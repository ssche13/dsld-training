const STORAGE_KEY = "dsld-training-flags";

export function getFlags(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function isFlagged(slug: string): boolean {
  return getFlags()[slug] === true;
}

export function setFlagged(slug: string, flagged: boolean): void {
  const flags = getFlags();
  if (flagged) {
    flags[slug] = true;
  } else {
    delete flags[slug];
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(flags));
}

export function getFlaggedSlugs(): string[] {
  const flags = getFlags();
  return Object.keys(flags).filter((s) => flags[s]);
}
