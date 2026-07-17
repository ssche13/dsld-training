"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CmsImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  const full = `${basePath}${src}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <figure className="my-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block cursor-zoom-in rounded-lg border border-gray-200 bg-gray-50 p-1.5 transition hover:border-dsld-teal"
          aria-label={`Enlarge image: ${alt}`}
        >
          <img
            src={full}
            alt={alt}
            className="mx-auto max-h-64 w-auto max-w-full rounded"
          />
        </button>
        <figcaption className="mt-1 flex items-center justify-center gap-1 text-center text-base text-gray-500">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 8v6M8 11h6M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
          </svg>
          {alt}
        </figcaption>
      </figure>

      {open && (
        <div
          className="no-print fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={full}
              alt={alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-3 max-w-2xl text-center text-sm text-white/80">{alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
