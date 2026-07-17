const STORAGE_KEY = "dsld-training-notes";

export function getNotes(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function getNote(slug: string): string {
  return getNotes()[slug] || "";
}

export function setNote(slug: string, text: string): void {
  const notes = getNotes();
  if (text.trim()) {
    notes[slug] = text;
  } else {
    delete notes[slug];
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}
