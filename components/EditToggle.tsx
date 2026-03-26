"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useEditMode } from "./EditModeContext";

export default function EditToggle() {
  const { editMode, toggleEditMode } = useEditMode();
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={popoverRef} className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-2 w-48 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
          <label className="flex cursor-pointer items-center justify-between text-sm text-gray-700">
            <span>Edit Mode</span>
            <button
              role="switch"
              aria-checked={editMode}
              onClick={toggleEditMode}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition ${
                editMode ? "bg-dsld-teal" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${
                  editMode ? "translate-x-4" : "translate-x-0.5"
                }`}
              />
            </button>
          </label>
          <hr className="my-2 border-gray-100" />
          <Link
            href="/admin"
            className="block text-sm text-gray-600 transition hover:text-dsld-teal"
            onClick={() => setOpen(false)}
          >
            Admin Panel
          </Link>
        </div>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 shadow transition hover:bg-gray-300 hover:text-gray-700"
        aria-label="CMS settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-1.17 1.902-1.17 2.202 0a1.724 1.724 0 002.573 1.066c1.014-.583 2.186.589 1.602 1.602a1.724 1.724 0 001.066 2.573c1.17.3 1.17 1.902 0 2.202a1.724 1.724 0 00-1.066 2.573c.583 1.014-.589 2.186-1.602 1.602a1.724 1.724 0 00-2.573 1.066c-.3 1.17-1.902 1.17-2.202 0a1.724 1.724 0 00-2.573-1.066c-1.014.583-2.186-.589-1.602-1.602a1.724 1.724 0 00-1.066-2.573c-1.17-.3-1.17-1.902 0-2.202a1.724 1.724 0 001.066-2.573c-.583-1.014.589-2.186 1.602-1.602a1.724 1.724 0 002.573-1.066z"
          />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  );
}
