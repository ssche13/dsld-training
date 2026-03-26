"use client";

import { useEffect, useState } from "react";
import Link from "@/components/StaticLink";
import { sections, categories, getSectionsByCategory } from "@/content/sections";
import { getCompletionStats, getProgress } from "@/lib/progress";

export default function Dashboard() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const grouped = getSectionsByCategory();

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const allSlugs = sections.map((s) => s.slug);
  const overall = getCompletionStats(allSlugs);

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
