"use client";

import { useEffect, useState } from "react";
import { isFlagged, setFlagged } from "@/lib/flags";

export default function FlagButton({ slug }: { slug: string }) {
  const [flagged, setFlaggedState] = useState(false);

  useEffect(() => {
    setFlaggedState(isFlagged(slug));
  }, [slug]);

  const toggle = () => {
    const next = !flagged;
    setFlaggedState(next);
    setFlagged(slug, next);
  };

  return (
    <button
      onClick={toggle}
      title={flagged ? "Flagged to revisit — click to remove" : "Flag this section to revisit later"}
      className={`no-print inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
        flagged
          ? "border-dsld-orange bg-dsld-orange-light text-dsld-orange"
          : "border-gray-300 bg-white text-dsld-gray hover:border-dsld-orange hover:text-dsld-orange"
      }`}
    >
      <svg className="h-5 w-5" fill={flagged ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6h-8.5l-1-2H5a2 2 0 00-2 2z" />
      </svg>
      {flagged ? "Flagged" : "Flag to Revisit"}
    </button>
  );
}
