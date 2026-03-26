import { sections } from "@/content/sections";

export interface SearchResult {
  slug: string;
  title: string;
  category: string;
  matchText: string;
}

const sectionSearchData: Record<string, string> = {};

export function registerSearchContent(slug: string, text: string): void {
  sectionSearchData[slug] = text.toLowerCase();
}

export function search(query: string, limit = 10): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const section of sections) {
    const content = sectionSearchData[section.slug] || "";
    const titleMatch = section.title.toLowerCase().includes(q);
    const contentMatch = content.includes(q);

    if (titleMatch || contentMatch) {
      let matchText = "";
      if (contentMatch) {
        const idx = content.indexOf(q);
        const start = Math.max(0, idx - 40);
        const end = Math.min(content.length, idx + q.length + 40);
        matchText = (start > 0 ? "..." : "") + content.slice(start, end) + (end < content.length ? "..." : "");
      } else {
        matchText = section.title;
      }

      results.push({
        slug: section.slug,
        title: section.title,
        category: section.category,
        matchText,
      });
    }

    if (results.length >= limit) break;
  }

  return results;
}
