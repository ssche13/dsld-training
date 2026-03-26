import { sections, getSectionBySlug, getAdjacentSections } from "@/content/sections";
import { notFound } from "next/navigation";
import Link from "@/components/StaticLink";
import PrintButton from "@/components/PrintButton";
import ProgressTracker from "@/components/ProgressTracker";
import { sectionContent } from "@/content/all-sections";
import EditableArticle from "@/components/EditableArticle";

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  if (!section) notFound();

  const { prev, next } = getAdjacentSections(slug);
  const Content = sectionContent[slug];

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-2 flex items-center gap-2 text-sm text-dsld-gray">
        <Link href="/" className="hover:text-dsld-teal">Home</Link>
        <span>/</span>
        <span>{section.category}</span>
      </div>
      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold text-dsld-text">{section.title}</h1>
        <PrintButton />
      </div>

      {/* Content */}
      <article className="prose prose-sm max-w-none">
        <EditableArticle slug={slug}>
          {Content ? <Content /> : (
            <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center text-dsld-gray">
              <p className="text-lg font-medium">Content coming soon</p>
              <p className="mt-1 text-sm">This section is being developed.</p>
            </div>
          )}
        </EditableArticle>
      </article>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t pt-6">
        <ProgressTracker slug={slug} />
        <div className="flex gap-2">
          {prev && (
            <Link
              href={`/sections/${prev.slug}`}
              className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm text-dsld-gray transition hover:border-dsld-teal hover:text-dsld-teal"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prev.title}
            </Link>
          )}
          {next && (
            <Link
              href={`/sections/${next.slug}`}
              className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm text-dsld-gray transition hover:border-dsld-teal hover:text-dsld-teal"
            >
              {next.title}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
