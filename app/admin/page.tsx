"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useEditMode } from "@/components/EditModeContext";

export default function AdminPage() {
  const {
    editMode,
    toggleEditMode,
    exportAll,
    importAll,
    resetAll,
    getContent,
  } = useEditMode();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Compute stats by reading localStorage directly for counts
  const sectionCount = (() => {
    try {
      const raw = localStorage.getItem("dsld-cms-sections");
      return raw ? Object.keys(JSON.parse(raw)).length : 0;
    } catch {
      return 0;
    }
  })();

  const imageCount = (() => {
    try {
      const raw = localStorage.getItem("dsld-cms-images");
      return raw ? Object.keys(JSON.parse(raw)).length : 0;
    } catch {
      return 0;
    }
  })();

  function handleExport() {
    const json = exportAll();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dsld-cms-export.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        importAll(reader.result as string);
        setImportStatus("Import successful!");
        setTimeout(() => setImportStatus(null), 3000);
      } catch {
        setImportStatus("Import failed. Invalid JSON.");
        setTimeout(() => setImportStatus(null), 3000);
      }
    };
    reader.readAsText(file);
    // Reset the input so the same file can be re-imported
    e.target.value = "";
  }

  function handleReset() {
    resetAll();
    setShowResetConfirm(false);
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <Link
          href="/"
          className="text-sm text-dsld-teal transition hover:underline"
        >
          Back to Training
        </Link>
      </div>

      {/* Edit Mode Toggle */}
      <section className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Edit Mode</h2>
            <p className="text-sm text-gray-500">
              Enable to make content sections editable in-place.
            </p>
          </div>
          <button
            role="switch"
            aria-checked={editMode}
            onClick={toggleEditMode}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
              editMode ? "bg-dsld-teal" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                editMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm">
          <p className="text-3xl font-bold text-dsld-teal">{sectionCount}</p>
          <p className="mt-1 text-sm text-gray-500">Edited Sections</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm">
          <p className="text-3xl font-bold text-dsld-teal">{imageCount}</p>
          <p className="mt-1 text-sm text-gray-500">Replaced Images</p>
        </div>
      </section>

      {/* Export */}
      <section className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Export All Edits
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Download all CMS edits as a JSON file for backup or transfer.
        </p>
        <button
          onClick={handleExport}
          className="rounded bg-dsld-teal px-4 py-2 text-sm font-medium text-white transition hover:bg-dsld-teal-dark"
        >
          Export JSON
        </button>
      </section>

      {/* Import */}
      <section className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Import Edits
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Load a previously exported JSON file to restore edits.
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          onChange={handleImport}
          className="block text-sm text-gray-600 file:mr-3 file:rounded file:border-0 file:bg-dsld-teal file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white file:transition hover:file:bg-dsld-teal-dark"
        />
        {importStatus && (
          <p className="mt-2 text-sm font-medium text-dsld-teal">
            {importStatus}
          </p>
        )}
      </section>

      {/* Reset */}
      <section className="rounded-lg border border-red-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-red-700">
          Reset All Edits
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Permanently remove all CMS edits. This cannot be undone.
        </p>
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Reset All
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-red-700">
              Are you sure?
            </span>
            <button
              onClick={handleReset}
              className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
            >
              Yes, Reset Everything
            </button>
            <button
              onClick={() => setShowResetConfirm(false)}
              className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
