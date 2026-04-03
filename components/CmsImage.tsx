const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CmsImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
      <img src={`${basePath}${src}`} alt={alt} className="w-full rounded" />
      <p className="mt-1 text-center text-xs text-gray-500">{alt}</p>
    </div>
  );
}
