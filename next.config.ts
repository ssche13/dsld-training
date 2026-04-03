import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const basePath = isGitHubPages ? "/dsld-training" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGitHubPages ? "/dsld-training/" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
