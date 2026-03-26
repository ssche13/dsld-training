"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const SECTIONS_KEY = "dsld-cms-sections";
const IMAGES_KEY = "dsld-cms-images";
const EDITMODE_KEY = "dsld-cms-editmode";

interface EditModeContextValue {
  editMode: boolean;
  toggleEditMode: () => void;
  saveContent: (slug: string, html: string) => void;
  getContent: (slug: string) => string | null;
  saveImage: (key: string, dataUrl: string) => void;
  getImage: (key: string) => string | null;
  exportAll: () => string;
  importAll: (json: string) => void;
  resetAll: () => void;
}

const EditModeContext = createContext<EditModeContextValue | null>(null);

function readJson(key: string): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeJson(key: string, data: Record<string, string>) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [sections, setSections] = useState<Record<string, string>>({});
  const [images, setImages] = useState<Record<string, string>>({});

  // Hydrate from localStorage on mount
  useEffect(() => {
    setSections(readJson(SECTIONS_KEY));
    setImages(readJson(IMAGES_KEY));
    try {
      const stored = localStorage.getItem(EDITMODE_KEY);
      if (stored === "true") setEditMode(true);
    } catch {
      // ignore
    }
  }, []);

  const toggleEditMode = useCallback(() => {
    setEditMode((prev) => {
      const next = !prev;
      localStorage.setItem(EDITMODE_KEY, String(next));
      return next;
    });
  }, []);

  const saveContent = useCallback((slug: string, html: string) => {
    setSections((prev) => {
      const next = { ...prev, [slug]: html };
      writeJson(SECTIONS_KEY, next);
      return next;
    });
  }, []);

  const getContent = useCallback(
    (slug: string): string | null => sections[slug] ?? null,
    [sections]
  );

  const saveImage = useCallback((key: string, dataUrl: string) => {
    setImages((prev) => {
      const next = { ...prev, [key]: dataUrl };
      writeJson(IMAGES_KEY, next);
      return next;
    });
  }, []);

  const getImage = useCallback(
    (key: string): string | null => images[key] ?? null,
    [images]
  );

  const exportAll = useCallback((): string => {
    return JSON.stringify({ sections, images }, null, 2);
  }, [sections, images]);

  const importAll = useCallback((json: string) => {
    try {
      const data = JSON.parse(json);
      const newSections: Record<string, string> = data.sections ?? {};
      const newImages: Record<string, string> = data.images ?? {};
      setSections(newSections);
      setImages(newImages);
      writeJson(SECTIONS_KEY, newSections);
      writeJson(IMAGES_KEY, newImages);
    } catch (e) {
      console.error("Failed to import CMS data:", e);
    }
  }, []);

  const resetAll = useCallback(() => {
    setSections({});
    setImages({});
    localStorage.removeItem(SECTIONS_KEY);
    localStorage.removeItem(IMAGES_KEY);
  }, []);

  return (
    <EditModeContext.Provider
      value={{
        editMode,
        toggleEditMode,
        saveContent,
        getContent,
        saveImage,
        getImage,
        exportAll,
        importAll,
        resetAll,
      }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode(): EditModeContextValue {
  const ctx = useContext(EditModeContext);
  if (!ctx) throw new Error("useEditMode must be used within EditModeProvider");
  return ctx;
}
