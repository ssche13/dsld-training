"use client";

import { useState, useRef, useEffect } from "react";
import { useEditMode } from "@/components/EditModeContext";

function getImageKey(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

export default function ImagePlaceholder({ label }: { label: string }) {
  const { editMode } = useEditMode();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageKey = getImageKey(label);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("dsld-cms-images");
      if (stored) {
        const images = JSON.parse(stored);
        if (images[imageKey]) {
          setUploadedImage(images[imageKey]);
        }
      }
    } catch {
      // ignore parse errors
    }
  }, [imageKey]);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setUploadedImage(dataUrl);

      try {
        const stored = localStorage.getItem("dsld-cms-images");
        const images = stored ? JSON.parse(stored) : {};
        images[imageKey] = dataUrl;
        localStorage.setItem("dsld-cms-images", JSON.stringify(images));
      } catch {
        // ignore storage errors
      }
    };
    reader.readAsDataURL(file);
  }

  if (uploadedImage) {
    return (
      <div
        className="relative my-4 overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={uploadedImage}
          alt={label}
          className="h-auto w-full rounded-lg"
        />
        {editMode && isHovered && (
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black/50 transition"
            onClick={() => fileInputRef.current?.click()}
          >
            <span className="text-sm font-medium text-white">Replace Image</span>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>
    );
  }

  return (
    <div
      className="relative my-4 flex min-h-[200px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center">
        <svg className="mx-auto mb-2 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="mt-1 text-xs text-gray-400">Image asset needed</p>
      </div>

      {editMode && isHovered && (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black/50 transition"
          onClick={() => fileInputRef.current?.click()}
        >
          <span className="text-sm font-medium text-white">Upload Image</span>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />
    </div>
  );
}
