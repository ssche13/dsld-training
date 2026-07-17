"use client";

import { useMemo, useState } from "react";
import Link from "@/components/StaticLink";
import { glossary } from "@/content/glossary";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const sorted = useMemo(
    () => [...glossary].sort((a, b) => a.term.localeCompare(b.term)),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [query, sorted]);

  const groups = useMemo(() => {
    const map: Record<string, typeof glossary> = {};
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase();
      (map[letter] ||= []).push(t);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-dsld-gray">
        <Link href="/" className="hover:text-dsld-teal">Home</Link>
        <span>/</span>
        <span>Reference</span>
      </div>
      <h1 className="mb-2 text-3xl font-bold text-dsld-text">Glossary of Terms</h1>
      <p className="mb-6 text-base text-dsld-gray">
        Definitions for the estimating, framing, and AutoCAD terms used throughout the course.
      </p>

      <div className="sticky top-0 z-10 -mx-2 mb-6 bg-dsld-bg/90 px-2 py-2 backdrop-blur">
        <div className="relative">
          <svg className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-dsld-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms and definitions…"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-base outline-none transition focus:border-dsld-teal focus:ring-1 focus:ring-dsld-teal"
          />
        </div>
        <p className="mt-1 px-1 text-xs text-dsld-gray">
          {filtered.length} {filtered.length === 1 ? "term" : "terms"}
        </p>
      </div>

      {groups.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-dsld-gray">
          No terms match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="space-y-8">
          {groups.map(([letter, terms]) => (
            <section key={letter}>
              <h2 className="mb-3 border-b border-gray-200 pb-1 text-xl font-bold text-dsld-teal">{letter}</h2>
              <dl className="space-y-4">
                {terms.map((t) => (
                  <div key={t.term} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <dt className="flex flex-wrap items-center gap-2">
                      <span className="text-lg font-semibold text-dsld-text">{t.term}</span>
                      <span className="rounded-full bg-dsld-teal-light px-2 py-0.5 text-xs font-medium text-dsld-teal">{t.category}</span>
                    </dt>
                    <dd className="mt-1 text-base leading-relaxed text-dsld-text">{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
