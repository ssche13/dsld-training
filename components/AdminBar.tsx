"use client";

import { useEditMode } from "./EditModeContext";

export default function AdminBar() {
  const { editMode, toggleEditMode } = useEditMode();

  if (!editMode) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-12 w-full items-center justify-between bg-dsld-teal px-4 text-white shadow-lg">
      <span className="flex items-center gap-2 text-sm font-semibold">
        <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        Edit Mode ON
      </span>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleEditMode}
          className="rounded bg-white/20 px-3 py-1 text-sm font-medium transition hover:bg-white/30"
        >
          Exit Edit Mode
        </button>
      </div>
    </div>
  );
}
