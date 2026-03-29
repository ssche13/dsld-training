import Note from "@/components/callouts/Note";
import Tip from "@/components/callouts/Tip";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import ColorSwatch from "@/components/ColorSwatch";
import SpreadsheetRef from "@/components/SpreadsheetRef";

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
        Draw at the <strong>TOP</strong> of the footing for horizontal runs and on the{" "}
        <strong>LEFT</strong> of the footing for vertical runs. This ensures every corner is
        accounted for without double-estimating.
      </p>

      <ImagePlaceholder label="Exterior and Interior Footings CAD" />

      <Note>
        Do not center the line on the footing — this causes inaccurate corner measurements. Always
        use top-of-footing for horizontal runs and left-of-footing for vertical runs.
      </Note>

      <h3 className="font-semibold text-base text-dsld-teal">Entering the Values</h3>

      <p className="text-sm leading-relaxed">
        The <strong>total linear feet</strong> of the <ColorSwatch color="red" /> red lines goes into
        the <strong>Exterior Footings</strong> cell under the Concrete header.
      </p>

      <p className="text-sm leading-relaxed">
        The <strong>total linear feet</strong> of the <ColorSwatch color="yellow" /> yellow lines
        goes into the <strong>Interior Footings</strong> section, located below the Exterior Footings
        cell.
      </p>

      <ImagePlaceholder label="Exterior and Interior Footings XL" />

      <SpreadsheetRef section="Concrete" cell="Exterior Footings" />
      <SpreadsheetRef section="Concrete" cell="Interior Footings" />
    </div>
  );
}
