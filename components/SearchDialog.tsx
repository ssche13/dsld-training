"use client";

import { useState, useEffect, useRef } from "react";
import Link from "@/components/StaticLink";
import { sections } from "@/content/sections";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  const results = query.trim()
    ? sections.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/70 transition hover:bg-white/20"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search... <kbd className="ml-auto rounded bg-white/20 px-1.5 py-0.5 text-xs">Ctrl+K</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-[15vh]" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <svg className="h-5 w-5 text-dsld-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm outline-none"
          />
          <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-dsld-gray">ESC</kbd>
        </div>
        {results.length > 0 && (
          <ul className="max-h-80 overflow-y-auto p-2">
            {results.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/sections/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex flex-col rounded-lg px-3 py-2 transition hover:bg-dsld-teal-light"
                >
                  <span className="text-sm font-medium text-dsld-text">{s.title}</span>
                  <span className="text-xs text-dsld-gray">{s.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {query.trim() && results.length === 0 && (
          <p className="px-4 py-6 text-center text-sm text-dsld-gray">No sections found.</p>
        )}
      </div>
    </div>
  );
}
