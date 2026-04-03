import Note from "@/components/callouts/Note";
import Tip from "@/components/callouts/Tip";
import ColorSwatch from "@/components/ColorSwatch";
import SpreadsheetRef from "@/components/SpreadsheetRef";
import CmsImage from "@/components/CmsImage";

export default function ExteriorInteriorFootings() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Exterior and Interior Footings</h2>

      <p className="text-sm leading-relaxed">
        This is the final foundation drawing. It captures{" "}
        <strong>all footings — both exterior and interior</strong> — using color-coded lines to
        distinguish between the two types.
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Identifying Footings on the Plan</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          All footings marked <strong>I</strong> on the plan PDF are traced in{" "}
          <ColorSwatch color="yellow" /> <strong>yellow</strong> (interior footings).
        </li>
        <li>
          All other footings are traced in <ColorSwatch color="red" /> <strong>red</strong>{" "}
          (exterior footings).
        </li>
      </ul>

      <h3 className="font-semibold text-base text-dsld-teal">Line Placement</h3>

      <p className="text-sm leading-relaxed">
        Footings should never intersect another footing. A line gap should always be between two
        separate footings to ensure every corner is accounted for without double-estimating.
      </p>

      <CmsImage src="/images/cms/exterior-interior-footings--docx_0.png" alt="Exterior and Interior Footings CAD" />

      <Note>
        Do not center the line on the footing — this causes inaccurate corner measurements. Always
        use top-of-footing for horizontal runs and left-of-footing for vertical runs.
      </Note>

      <h3 className="font-semibold text-base text-dsld-teal">Entering the Values</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the <ColorSwatch color="red" /> red lines.</li>
        <li>Round up, then place the resulting total into the <strong>Exterior Footings</strong> cell under the Concrete header.</li>
        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the <ColorSwatch color="yellow" /> yellow lines.</li>
        <li>Round up, place the resulting total into the <strong>Interior Footings</strong> cell, located below the Exterior Footings cell.</li>
      </ul>

      <CmsImage src="/images/cms/exterior-interior-footings--exterior-interior-footings_0.png" alt="Exterior and Interior Footings XL" />

      <SpreadsheetRef section="Concrete" cell="Exterior Footings" />
      <SpreadsheetRef section="Concrete" cell="Interior Footings" />
    </div>
  );
}
