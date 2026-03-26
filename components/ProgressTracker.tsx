"use client";

import { useEffect, useState } from "react";
import { isCompleted, setCompleted } from "@/lib/progress";

export default function ProgressTracker({ slug }: { slug: string }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(isCompleted(slug));
  }, [slug]);

  const toggle = () => {
    const next = !done;
    setDone(next);
    setCompleted(slug, next);
  };

  return (
    <button
      onClick={toggle}
      className={`no-print inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
        done
          ? "border-dsld-green bg-dsld-green-light text-dsld-green"
          : "border-gray-300 bg-white text-dsld-gray hover:border-dsld-green hover:text-dsld-green"
      }`}
    >
      {done ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
        </svg>
      )}
      {done ? "Completed" : "Mark Complete"}
    </button>
  );
}
