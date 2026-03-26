import { type ReactNode } from "react";

const contentModules: Record<string, () => ReactNode> = {};

export function registerSection(slug: string, render: () => ReactNode) {
  contentModules[slug] = render;
}

export function getSectionContent(slug: string): ReactNode | null {
  const render = contentModules[slug];
  return render ? render() : null;
}

export function getRegisteredSlugs(): string[] {
  return Object.keys(contentModules);
}
