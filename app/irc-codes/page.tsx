import Link from "@/components/StaticLink";
import { ircChapters } from "@/content/irc-links";
import { getSectionBySlug } from "@/content/sections";

export const metadata = {
  title: "IRC Code Links — DSLD Homes Estimating Training",
};

export default function IrcCodesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-dsld-gray">
        <Link href="/" className="hover:text-dsld-teal">Home</Link>
        <span>/</span>
        <span>Reference</span>
      </div>
      <h1 className="mb-2 text-3xl font-bold text-dsld-text">IRC Code Links</h1>
      <p className="mb-4 text-base text-dsld-gray">
        The residential code provisions behind the takeoff rules, linked to the free
        ICC Digital Codes viewer for the <strong>2021 International Residential Code</strong>.
        Each chapter link opens the official code; the section number points you to the
        exact provision.
      </p>
      <div className="mb-8 rounded-lg border border-dsld-blue/30 bg-dsld-blue-light p-4 text-sm text-dsld-text">
        Codes are adopted and amended state by state. Always confirm the edition and any
        local amendments for the region you are estimating.
      </div>

      <div className="space-y-6">
        {ircChapters.map((ch) => (
          <section key={ch.chapter} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <a
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-lg font-semibold text-dsld-teal hover:underline"
            >
              {ch.chapter}
              <svg className="h-4 w-4 opacity-60 transition group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <ul className="mt-3 divide-y divide-gray-100">
              {ch.entries.map((e) => {
                const related = e.relatedSlug ? getSectionBySlug(e.relatedSlug) : undefined;
                return (
                  <li key={e.code + e.title} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <a
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-dsld-teal-light px-2 py-0.5 font-mono text-sm font-semibold text-dsld-teal hover:underline"
                      >
                        {e.code}
                      </a>
                      <span className="text-base font-medium text-dsld-text">{e.title}</span>
                    </div>
                    <p className="mt-1 text-base leading-relaxed text-dsld-gray">{e.note}</p>
                    {related && (
                      <Link
                        href={`/sections/${related.slug}`}
                        className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-dsld-teal hover:underline"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        See course section: {related.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
