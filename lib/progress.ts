const STORAGE_KEY = "dsld-training-progress";

export function getProgress(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function setCompleted(slug: string, completed: boolean): void {
  const progress = getProgress();
  progress[slug] = completed;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function isCompleted(slug: string): boolean {
  return getProgress()[slug] === true;
}

export function getCompletionStats(slugs: string[]): { completed: number; total: number; percent: number } {
  const progress = getProgress();
  const completed = slugs.filter((s) => progress[s] === true).length;
  const total = slugs.length;
  return { completed, total, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
}
