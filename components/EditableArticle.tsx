"use client";

import { useEffect } from "react";

// Course content is generated from the source training document, so the old
// per-page HTML overrides (saved in localStorage under "dsld-cms-sections")
// are retired: a saved innerHTML snapshot can never include the interactive
// features (image lightbox, color highlights, notes) and would silently shadow
// content and feature updates. We always render the canonical content and
// purge any stale saved overrides so previously edited pages self-heal.
export default function EditableArticle({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    try {
      const stored = localStorage.getItem("dsld-cms-sections");
      if (!stored) return;
      const sections = JSON.parse(stored);
      if (sections && slug in sections) {
        delete sections[slug];
        localStorage.setItem("dsld-cms-sections", JSON.stringify(sections));
      }
    } catch {
      // ignore storage errors
    }
  }, [slug]);

  return <>{children}</>;
}
