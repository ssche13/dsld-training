import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function RidgeVents() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Ridge &amp; Off Ridge Vents
      </h2>

      <p className="text-sm leading-relaxed">
        Vent counts and lengths are found on the{" "}
        <strong>elevation page</strong> of the PDF.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/ridge-vents--ridge-vents_0.png" alt="Off Ridge Vents" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Off Ridge Vents</p>
      </div>
      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/ridge-vents--docx_0.png" alt="Ridge Vents" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Ridge Vents</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Off Ridge Vents</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          <strong>Count</strong> the total number of off ridge vents shown on
          the elevation page.
        </li>
        <li>
          Place the total count in the spreadsheet.
        </li>
      </ul>

      <Note>
        Off-Ridge Vents are counted as a pair.
      </Note>

      <SpreadsheetRef section="Vents" cell="Off Ridge Vents" />

      <h3 className="font-medium text-base text-dsld-text">Ridge Vents</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          <strong>Add</strong> the total linear length of all ridge vents called
          out on the elevations page.
        </li>
        <li>
          <strong>Divide</strong> the total linear length by{" "}
          <strong>4</strong>.
        </li>
        <li>
          <strong>Round up</strong> to the next whole number.
        </li>
        <li>
          Place the rounded result in the spreadsheet.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/ridge-vents--ridge-vents_1.png" alt="Ridge and Off Ridge Vents XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Ridge and Off Ridge Vents XL</p>
      </div>

      <Note>
        For Ridge Vents, pay close attention to the elevations to ensure that the same ridge vent
        is not calculated twice.
      </Note>

      <SpreadsheetRef section="Vents" cell="Ridge Vents" />
    </div>
  );
}
