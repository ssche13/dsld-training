/**
 * DSLD CMS — Vanilla JS edit mode for file:// protocol
 * Works without React hydration
 */
(function () {
  "use strict";

  const SECTIONS_KEY = "dsld-cms-sections";
  const IMAGES_KEY = "dsld-cms-images";
  const EDITMODE_KEY = "dsld-cms-editmode";

  function readStore(key) {
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; }
  }
  function writeStore(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  function isEditMode() {
    return localStorage.getItem(EDITMODE_KEY) === "true";
  }
  function setEditMode(on) {
    localStorage.setItem(EDITMODE_KEY, String(on));
  }

  /* ── Slug from URL ── */
  function getSlug() {
    const m = location.pathname.match(/sections\/([^/]+)/);
    return m ? m[1] : null;
  }

  /* ── Gear toggle button ── */
  function createGearButton() {
    const wrap = document.createElement("div");
    wrap.id = "cms-gear-wrap";
    wrap.style.cssText = "position:fixed;bottom:16px;right:16px;z-index:9999;font-family:system-ui,sans-serif;";

    const btn = document.createElement("button");
    btn.id = "cms-gear-btn";
    btn.title = "CMS Settings";
    btn.style.cssText = "width:36px;height:36px;border-radius:50%;background:#e5e7eb;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 3px rgba(0,0,0,.2);";
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#6b7280" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-1.17 1.902-1.17 2.202 0a1.724 1.724 0 002.573 1.066c1.014-.583 2.186.589 1.602 1.602a1.724 1.724 0 001.066 2.573c1.17.3 1.17 1.902 0 2.202a1.724 1.724 0 00-1.066 2.573c.583 1.014-.589 2.186-1.602 1.602a1.724 1.724 0 00-2.573 1.066c-.3 1.17-1.902 1.17-2.202 0a1.724 1.724 0 00-2.573-1.066c-1.014.583-2.186-.589-1.602-1.602a1.724 1.724 0 00-1.066-2.573c-1.17-.3-1.17-1.902 0-2.202a1.724 1.724 0 001.066-2.573c-.583-1.014.589-2.186 1.602-1.602a1.724 1.724 0 002.573-1.066z"/><circle cx="12" cy="12" r="3"/></svg>';

    const popover = document.createElement("div");
    popover.id = "cms-popover";
    popover.style.cssText = "display:none;position:absolute;bottom:44px;right:0;width:200px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:12px;box-shadow:0 4px 12px rgba(0,0,0,.15);";

    const editOn = isEditMode();

    popover.innerHTML = `
      <label style="display:flex;align-items:center;justify-content:space-between;font-size:14px;color:#374151;cursor:pointer;">
        <span>Edit Mode</span>
        <span id="cms-toggle" style="display:inline-flex;align-items:center;width:36px;height:20px;border-radius:10px;background:${editOn ? "#1a6e8c" : "#d1d5db"};cursor:pointer;transition:background .2s;padding:2px;">
          <span id="cms-toggle-dot" style="display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .2s;transform:translateX(${editOn ? "16px" : "0"});"></span>
        </span>
      </label>
      <hr style="margin:8px 0;border:none;border-top:1px solid #f3f4f6;">
      <div style="display:flex;flex-direction:column;gap:6px;">
        <button id="cms-export-btn" style="text-align:left;font-size:13px;color:#4b5563;background:none;border:none;cursor:pointer;padding:4px 0;">Export All Edits</button>
        <label id="cms-import-label" style="font-size:13px;color:#4b5563;cursor:pointer;padding:4px 0;">Import Edits
          <input type="file" id="cms-import-input" accept=".json" style="display:none;">
        </label>
        <button id="cms-reset-btn" style="text-align:left;font-size:13px;color:#ef4444;background:none;border:none;cursor:pointer;padding:4px 0;">Reset All Edits</button>
      </div>
    `;

    wrap.appendChild(popover);
    wrap.appendChild(btn);
    document.body.appendChild(wrap);

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      popover.style.display = popover.style.display === "none" ? "block" : "none";
    });
    document.addEventListener("click", function () { popover.style.display = "none"; });
    popover.addEventListener("click", function (e) { e.stopPropagation(); });

    // Toggle
    document.getElementById("cms-toggle").addEventListener("click", function () {
      const next = !isEditMode();
      setEditMode(next);
      location.reload();
    });

    // Export
    document.getElementById("cms-export-btn").addEventListener("click", function () {
      const data = { sections: readStore(SECTIONS_KEY), images: readStore(IMAGES_KEY) };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "dsld-cms-export.json";
      a.click();
    });

    // Import
    document.getElementById("cms-import-input").addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function () {
        try {
          const data = JSON.parse(reader.result);
          if (data.sections) writeStore(SECTIONS_KEY, data.sections);
          if (data.images) writeStore(IMAGES_KEY, data.images);
          alert("Imported successfully. Reloading...");
          location.reload();
        } catch { alert("Invalid JSON file."); }
      };
      reader.readAsText(file);
    });

    // Reset
    document.getElementById("cms-reset-btn").addEventListener("click", function () {
      if (confirm("Reset all edits? This cannot be undone.")) {
        localStorage.removeItem(SECTIONS_KEY);
        localStorage.removeItem(IMAGES_KEY);
        location.reload();
      }
    });
  }

  /* ── Edit mode bar ── */
  function createEditBar() {
    if (!isEditMode()) return;
    const bar = document.createElement("div");
    bar.id = "cms-edit-bar";
    bar.style.cssText = "position:fixed;bottom:0;left:0;right:0;height:44px;background:#1a6e8c;display:flex;align-items:center;justify-content:space-between;padding:0 20px;z-index:9998;font-family:system-ui,sans-serif;";
    bar.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#4ade80;"></span>
        <span style="color:#fff;font-size:13px;font-weight:600;">Edit Mode ON</span>
      </div>
      <button id="cms-exit-edit" style="background:#fff;color:#1a6e8c;border:none;border-radius:6px;padding:6px 14px;font-size:13px;font-weight:600;cursor:pointer;">Exit Edit Mode</button>
    `;
    document.body.appendChild(bar);
    document.body.style.paddingBottom = "44px";

    document.getElementById("cms-exit-edit").addEventListener("click", function () {
      setEditMode(false);
      location.reload();
    });
  }

  /* ── Make article editable ── */
  function setupEditableContent() {
    const slug = getSlug();
    if (!slug) return;

    const article = document.querySelector("article");
    if (!article) return;

    // Load saved content
    const saved = readStore(SECTIONS_KEY);
    if (saved[slug]) {
      article.innerHTML = saved[slug];
    }

    if (!isEditMode()) return;

    // Make editable
    article.contentEditable = "true";
    article.style.outline = "none";
    article.style.border = "2px dashed #60a5fa";
    article.style.borderRadius = "8px";
    article.style.padding = "8px";

    article.addEventListener("blur", function () {
      const store = readStore(SECTIONS_KEY);
      store[slug] = article.innerHTML;
      writeStore(SECTIONS_KEY, store);
    });

    // Reset button
    if (saved[slug]) {
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset to Default";
      resetBtn.style.cssText = "margin-top:8px;background:#e5e7eb;border:none;border-radius:4px;padding:4px 12px;font-size:12px;color:#4b5563;cursor:pointer;";
      resetBtn.addEventListener("click", function () {
        const store = readStore(SECTIONS_KEY);
        delete store[slug];
        writeStore(SECTIONS_KEY, store);
        location.reload();
      });
      article.parentNode.insertBefore(resetBtn, article.nextSibling);
    }
  }

  /* ── Image placeholders: click to upload ── */
  function setupImageUploads() {
    const images = readStore(IMAGES_KEY);

    // Handle placeholder boxes
    document.querySelectorAll("[data-image-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-image-placeholder");
      if (!key) {
        key = el.textContent.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      }
      if (images[key]) {
        var img = document.createElement("img");
        img.src = images[key];
        img.alt = el.textContent.trim();
        img.style.cssText = "width:100%;height:auto;border-radius:8px;";
        el.replaceWith(img);
        if (isEditMode()) makeImageReplaceable(img, key);
        return;
      }
      if (isEditMode()) makePlaceholderUploadable(el, key);
    });

    // Also handle the dashed-border placeholder divs (ImagePlaceholder component)
    document.querySelectorAll("article .text-center").forEach(function (center) {
      var parent = center.parentElement;
      if (!parent || !parent.style.cssText && !parent.className.includes("border-dashed")) {
        // Check by structure: parent has dashed border
        if (!parent || parent.querySelectorAll("svg").length === 0) return;
      }
      var labelEl = center.querySelector("p.text-sm, p:first-of-type");
      if (!labelEl) return;
      var label = labelEl.textContent.trim();
      if (!label || label === "Image asset needed") return;
      var key = label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

      if (images[key]) {
        var img = document.createElement("img");
        img.src = images[key];
        img.alt = label;
        img.style.cssText = "width:100%;height:auto;border-radius:8px;margin:16px 0;";
        parent.replaceWith(img);
        if (isEditMode()) makeImageReplaceable(img, key);
        return;
      }
      if (isEditMode()) makePlaceholderUploadable(parent, key);
    });
  }

  function makePlaceholderUploadable(el, key) {
    el.style.cursor = "pointer";
    el.title = "Click to upload image";
    el.addEventListener("click", function () {
      var input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.addEventListener("change", function () {
        var file = input.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          var store = readStore(IMAGES_KEY);
          store[key] = reader.result;
          writeStore(IMAGES_KEY, store);
          location.reload();
        };
        reader.readAsDataURL(file);
      });
      input.click();
    });
  }

  function makeImageReplaceable(img, key) {
    img.style.cursor = "pointer";
    img.title = "Click to replace image";
    img.addEventListener("click", function () {
      var input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.addEventListener("change", function () {
        var file = input.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          var store = readStore(IMAGES_KEY);
          store[key] = reader.result;
          writeStore(IMAGES_KEY, store);
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
      input.click();
    });
  }

  /* ── Init ── */
  function init() {
    createGearButton();
    createEditBar();
    setupEditableContent();
    setupImageUploads();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
