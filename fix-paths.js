const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "out");

function fixFile(filePath) {
  let html = fs.readFileSync(filePath, "utf-8");

  // Calculate depth from out/ root
  const rel = path.relative(outDir, path.dirname(filePath));
  const depth = rel ? rel.split(path.sep).length : 0;
  const prefix = depth === 0 ? "." : Array(depth).fill("..").join("/");

  // Fix asset paths: ./_next/ -> relative _next/
  html = html.replace(/(?:href|src)="\.?\/?_next\//g, (match) => {
    const attr = match.startsWith("href") ? "href" : "src";
    return `${attr}="${prefix}/_next/`;
  });

  // Fix src="/images/..." -> relative images/
  html = html.replace(/src="\/images\//g, `src="${prefix}/images/`);

  // Fix href="/" -> relative index.html
  html = html.replace(/href="\/"(?![\/_])/g, `href="${prefix}/index.html"`);

  // Fix href="/sections/slug" or href="/sections/slug/"
  html = html.replace(/href="\/sections\/([^"]+?)\/?"(?![\/_])/g, (match, slug) => {
    return `href="${prefix}/sections/${slug}/index.html"`;
  });

  // Fix href="/admin" or href="/admin/"
  html = html.replace(/href="\/admin\/?"(?![\/_])/g, `href="${prefix}/admin/index.html"`);

  // Inject CMS vanilla JS script before </body> if not already present
  if (!html.includes("cms.js")) {
    html = html.replace("</body>", `<script src="${prefix}/cms.js"></script>\n</body>`);
  }

  fs.writeFileSync(filePath, html, "utf-8");
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) fixFile(full);
  }
}

walk(outDir);
console.log("Fixed all HTML paths for file:// access.");
