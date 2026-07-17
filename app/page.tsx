"use client";

import { useEffect, useState } from "react";
import Link from "@/components/StaticLink";
import { sections, categories, getSectionsByCategory, getSectionBySlug } from "@/content/sections";
import { getCompletionStats, getProgress } from "@/lib/progress";
import { getFlaggedSlugs } from "@/lib/flags";

export default function Dashboard() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [flagged, setFlagged] = useState<string[]>([]);
  const grouped = getSectionsByCategory();

  useEffect(() => {
    setProgress(getProgress());
    setFlagged(getFlaggedSlugs());
  }, []);

  const allSlugs = sections.map((s) => s.slug);
  const overall = getCompletionStats(allSlugs);
  const flaggedSections = flagged
    .map((slug) => getSectionBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dsld-text">Estimating Training Module</h1>
        <p className="mt-2 text-dsld-gray">
          Welcome to the DSLD Homes estimating training. Work through each section to learn the
          full AutoCAD takeoff process.
        </p>
      </div>

      {/* Overall progress */}
      <div className="mb-8 rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Overall Progress</h2>
          <span className="text-sm font-medium text-dsld-teal">
            {overall.completed}/{overall.total} sections
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-dsld-green transition-all duration-500"
            style={{ width: `${overall.percent}%` }}
          />
        </div>
        <p className="mt-1 text-right text-sm text-dsld-gray">{overall.percent}% complete</p>
      </div>

      {/* Flagged to revisit */}
      {flaggedSections.length > 0 && (
        <div className="mb-8 rounded-xl border border-dsld-orange/30 bg-dsld-orange-light p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-dsld-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6h-8.5l-1-2H5a2 2 0 00-2 2z" />
            </svg>
            <h2 className="text-lg font-semibold text-dsld-text">Flagged to Revisit</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {flaggedSections.map((s) => (
              <Link
                key={s.slug}
                href={`/sections/${s.slug}`}
                className="inline-flex items-center gap-1 rounded-lg border border-dsld-orange/40 bg-white px-3 py-1.5 text-sm text-dsld-text transition hover:border-dsld-orange hover:text-dsld-orange"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Reference quick links */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Link href="/glossary" className="flex items-center gap-3 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md hover:border-dsld-teal">
          <svg className="h-6 w-6 shrink-0 text-dsld-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <div>
            <h3 className="font-semibold text-dsld-text">Glossary of Terms</h3>
            <p className="text-sm text-dsld-gray">Definitions for estimating and CAD terms used throughout the course.</p>
          </div>
        </Link>
        <Link href="/irc-codes" className="flex items-center gap-3 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md hover:border-dsld-teal">
          <svg className="h-6 w-6 shrink-0 text-dsld-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <div>
            <h3 className="font-semibold text-dsld-text">IRC Code Links</h3>
            <p className="text-sm text-dsld-gray">Jump to the residential code sections behind the takeoff rules.</p>
          </div>
        </Link>
      </div>

      {/* Category cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => {
          const secs = grouped[cat] || [];
          const catSlugs = secs.map((s) => s.slug);
          const stats = {
            completed: catSlugs.filter((s) => progress[s]).length,
            total: catSlugs.length,
          };
          const percent = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

          return (
            <div key={cat} className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-dsld-text">{cat}</h3>
                <span className="text-xs font-medium text-dsld-gray">
                  {stats.completed}/{stats.total}
                </span>
              </div>
              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-dsld-teal transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <ul className="space-y-1">
                {secs.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/sections/${s.slug}`}
                      className="flex items-center gap-2 rounded px-2 py-1 text-sm text-dsld-gray transition hover:bg-dsld-teal-light hover:text-dsld-teal"
                    >
                      {progress[s.slug] ? (
                        <svg className="h-3.5 w-3.5 text-dsld-green" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-3.5 w-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth={2} />
                        </svg>
                      )}
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
