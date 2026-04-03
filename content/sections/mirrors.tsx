export default function Mirrors() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Mirrors</h2>

      <p className="text-sm leading-relaxed">
        Mirror estimation is straightforward — count the number of mirrors and record the size of
        each one. Mirrors are typically located above bathroom vanities.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Place each count based on size in the <strong>Mirrors and Shower Doors</strong> section of
          the spreadsheet.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/mirrors--docx_0.png" alt="Mirrors XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Mirrors XL</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use <strong>LINE</strong> to trace around the perimeter of each mirror.
        </li>
        <li>
          Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the
          perimeters.
        </li>
        <li>
          Place the total linear footage into the <strong>Framed Mirrors</strong> section of the
          spreadsheet.
        </li>
        <li>
          Put <strong>1</strong> for the one-time installation fee.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/mirrors--docx_1.png" alt="Framed Mirrors XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Framed Mirrors XL</p>
      </div>
    </div>
  );
}
