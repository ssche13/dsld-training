export default function CeilingJoists() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Ceiling Joists</h2>

      <p className="text-sm leading-relaxed">
        Ceiling joists span between bearing walls to support the ceiling sheetrock below and attic
        storage loads above. The ceiling framing layout from the PDF will be used.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/ceiling-joists--docx_0.png" alt="Ceiling Joists PDF" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Ceiling Joists PDF</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count ceiling joists from the ceiling framing plan on the PDF.</li>
        <li>
          Place total counts based on size into the <strong>Ceiling Joists</strong> section of the
          spreadsheet.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/ceiling-joists--docx_1.png" alt="Ceiling Joists XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Ceiling Joists XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Floor Joists</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Floor joists only appear in <strong>two-story homes</strong>.
        </li>
        <li>
          Use the <strong>engineered floor joists</strong> page on the PDF.
        </li>
        <li>Use the parts list to fill in placeholders.</li>
        <li>Count how many of each floor joist are needed.</li>
        <li>Count any other call outs related to floor joists.</li>
        <li>
          Place each count into the <strong>Floor Joist Package</strong> section of the spreadsheet.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/ceiling-joists--docx_2.png" alt="Floor Joists XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Floor Joists XL</p>
      </div>
    </div>
  );
}
