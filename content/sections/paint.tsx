export default function Paint() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Paint</h2>

      <p className="text-sm leading-relaxed">
        Paint values drive material quantities and labor estimates. Use the{" "}
        <strong>floor plan</strong> in the PDF.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Garage Door</h3>

      <p className="text-sm leading-relaxed">
        Paint for garage doors works off a <strong>lump sum total</strong>.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Count <strong>1</strong> for 1 garage door.
        </li>
        <li>
          Count <strong>1</strong> for two 9&apos; garage doors.
        </li>
        <li>Multiples of anything larger each count as their own.</li>
        <li>
          Enter into the <strong>Plumbing, Elec. HVAC Top Out</strong> section.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/paint--docx_0.png" alt="Garage door LS XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Garage door LS XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Exterior Brick</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Enter the <strong>total square footage</strong> of brick from the{" "}
          <strong>Exterior Brick</strong> section into the{" "}
          <strong>Plumbing, Elec. HVAC Top Out</strong> section.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/paint--docx_1.png" alt="Ext Brick Paint XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Ext Brick Paint XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Trim Nails and Trim Labor</h3>

      <p className="text-sm leading-relaxed">
        These are simple count items.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Trim Nails are always allotted 1, entered into the{" "}
          <strong>Plumbing, Elec. HVAC Top Out</strong> section. Artist series gets{" "}
          <strong>2</strong>.
        </li>
        <li>
          Trim Labor is built-in on standard homes but counts as <strong>1</strong> for artist
          series.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/paint--docx_2.png" alt="Trim Nails XL and Trim Labor XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Trim Nails XL and Trim Labor XL</p>
      </div>
    </div>
  );
}
