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

      <Note>
        For Ridge Vents, trainees should pay close attention to the elevations
        page to ensure that the same ridge vent is not calculated twice.
      </Note>

      <SpreadsheetRef section="Vents" cell="Ridge Vents" />
    </div>
  );
}
