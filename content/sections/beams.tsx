import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";

export default function Beams() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Load-Bearing Beams</h2>

      <p className="text-sm leading-relaxed">
        Beam estimation covers all structural and decorative beams in the plan, including Hardie
        wrapped beams used on exterior porches and entries. Accurate beam measurement requires careful
        reading of the framing plan and beam schedule.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Beams</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all beams on the framing plan (porch beams, header beams, ridge beams).</li>
        <li>Measure the linear length of each beam in AutoCAD.</li>
        <li>Record the beam size and length in the spreadsheet.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Get total counts for each beam <strong>END</strong> (not the beam itself).
      </p>

      <h3 className="font-medium text-base text-dsld-text">Measuring Beams</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify each beam on the framing plan by its callout tag.</li>
        <li>Measure the linear length of each beam using AutoCAD.</li>
        <li>Record the beam size (e.g., 2-2x10, 3-2x12, LVL) and length.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Hardie Wrapped Beams</h3>
      <p className="text-sm leading-relaxed">
        Hardie wrapped beams are structural beams covered with Hardie board trim for a finished
        exterior appearance. After measuring the linear length, apply the waste factor and unit
        conversion before entering the value.
      </p>

      <Tip>
        Multiply the linear length by 1.10 (waste factor), then divide by 12 to convert to feet
        before entering into the spreadsheet.
      </Tip>

      <SpreadsheetRef section="Beams" cell="Hardie Wrapped Beams" />
    </div>
  );
}
