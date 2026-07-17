"use client";

import Link from "@/components/StaticLink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getSectionsByCategory, categories } from "@/content/sections";
import { getProgress } from "@/lib/progress";
import { getFlags } from "@/lib/flags";
import SearchDialog from "./SearchDialog";

export default function Sidebar() {
  const pathname = usePathname();
  const grouped = getSectionsByCategory();
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setFlags(getFlags());
  }, [pathname]);

  const toggleCategory = (cat: string) => {
    setCollapsed((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const nav = (
    <>
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-dsld-green text-sm font-bold text-white">D</div>
          <div>
            <h1 className="text-sm font-bold text-white">DSLD Homes</h1>
            <p className="text-xs text-white/60">Estimating Training</p>
          </div>
        </Link>
      </div>

      <div className="px-3 pb-3">
        <SearchDialog />
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {categories.map((cat) => {
          const secs = grouped[cat] || [];
          const isCollapsed = collapsed[cat];
          return (
            <div key={cat} className="mb-1">
              <button
                onClick={() => toggleCategory(cat)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/50 transition hover:text-white/80"
              >
                {cat}
                <svg className={`h-3 w-3 transition ${isCollapsed ? "-rotate-90" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {!isCollapsed && (
                <ul className="space-y-0.5">
                  {secs.map((s) => {
                    const active = pathname === `/sections/${s.slug}`;
                    const done = progress[s.slug];
                    const flagged = flags[s.slug];
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/sections/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition ${
                            active
                              ? "bg-white/15 font-medium text-white"
                              : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {done ? (
                            <svg className="h-3.5 w-3.5 shrink-0 text-dsld-green" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="h-3.5 w-3.5 shrink-0" />
                          )}
                          <span className="flex-1 truncate">{s.title}</span>
                          {flagged && (
                            <svg className="h-3.5 w-3.5 shrink-0 text-dsld-orange" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6h-8.5l-1-2H5a2 2 0 00-2 2z" />
                            </svg>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}

        <div className="mt-3 border-t border-white/10 pt-3">
          <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-white/50">Reference</p>
          {[
            { href: "/glossary", label: "Glossary of Terms", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
            { href: "/irc-codes", label: "IRC Code Links", d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
          ].map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition ${
                  active ? "bg-white/15 font-medium text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.d} />
                </svg>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="no-print fixed left-4 top-4 z-50 rounded-lg bg-dsld-teal p-2 text-white shadow-lg lg:hidden"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar no-print fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-dsld-teal-dark transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {nav}
      </aside>
    </>
  );
}
