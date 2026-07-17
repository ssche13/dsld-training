"use client";

import { useEffect, useRef, useState } from "react";
import { getNote, setNote } from "@/lib/notes";

export default function SectionNotes({ slug }: { slug: string }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "saved">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setText(getNote(slug));
    setStatus("idle");
  }, [slug]);

  const onChange = (value: string) => {
    setText(value);
    setStatus("idle");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setNote(slug, value);
      setStatus("saved");
    }, 500);
  };

  return (
    <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-dsld-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <h3 className="text-base font-semibold text-dsld-text">My Notes</h3>
        </div>
        <span className={`text-xs transition ${status === "saved" ? "text-dsld-green" : "text-transparent"}`}>
          Saved
        </span>
      </div>
      <p className="mb-2 text-xs text-dsld-gray">
        Private to this browser. Jot down questions, reminders, or anything you want to remember about this section.
      </p>
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your notes here…"
        rows={4}
        className="w-full resize-y rounded-lg border border-gray-300 p-3 text-base leading-relaxed text-dsld-text outline-none transition focus:border-dsld-teal focus:ring-1 focus:ring-dsld-teal"
      />
    </section>
  );
}
