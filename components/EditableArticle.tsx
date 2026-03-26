"use client";

import { useState, useEffect, useRef } from "react";
import { useEditMode } from "@/components/EditModeContext";

function getStorageKey(slug: string) {
  return slug;
}

export default function EditableArticle({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const { editMode } = useEditMode();
  const [savedHtml, setSavedHtml] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const storageKey = getStorageKey(slug);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("dsld-cms-sections");
      if (stored) {
        const sections = JSON.parse(stored);
        if (sections[storageKey]) {
          setSavedHtml(sections[storageKey]);
        }
      }
    } catch {
      // ignore parse errors
    }
  }, [storageKey]);

  function handleBlur() {
    if (!contentRef.current) return;
    const html = contentRef.current.innerHTML;

    try {
      const stored = localStorage.getItem("dsld-cms-sections");
      const sections = stored ? JSON.parse(stored) : {};
      sections[storageKey] = html;
      localStorage.setItem("dsld-cms-sections", JSON.stringify(sections));
      setSavedHtml(html);
    } catch {
      // ignore storage errors
    }
  }

  function handleReset() {
    try {
      const stored = localStorage.getItem("dsld-cms-sections");
      if (stored) {
        const sections = JSON.parse(stored);
        delete sections[storageKey];
        localStorage.setItem("dsld-cms-sections", JSON.stringify(sections));
      }
    } catch {
      // ignore storage errors
    }
    setSavedHtml(null);
  }

  // Not in edit mode: render saved HTML override or default children
  if (!editMode) {
    if (savedHtml) {
      return <div dangerouslySetInnerHTML={{ __html: savedHtml }} />;
    }
    return <>{children}</>;
  }

  // Edit mode
  return (
    <div className="relative">
      {savedHtml ? (
        <div
          ref={contentRef}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
          className="rounded-lg border-2 border-dashed border-blue-400 p-2 outline-none focus:border-blue-600"
          dangerouslySetInnerHTML={{ __html: savedHtml }}
        />
      ) : (
        <div
          ref={contentRef}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
          className="rounded-lg border-2 border-dashed border-blue-400 p-2 outline-none focus:border-blue-600"
        >
          {children}
        </div>
      )}
      <button
        onClick={handleReset}
        className="mt-2 rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600 transition hover:bg-gray-300"
      >
        Reset to Default
      </button>
    </div>
  );
}
