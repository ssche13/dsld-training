import Note from "@/components/callouts/Note";
import Tip from "@/components/callouts/Tip";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import ColorSwatch from "@/components/ColorSwatch";
import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function SillSealExterior() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Sill Seal Exterior</h2>

      <p className="text-sm leading-relaxed">
        The sill seal measurement captures the <strong>total exterior perimeter</strong> of the
        foundation, including garage walls that interface with the home interior. This value feeds
        directly into the Wall Takeoffs section of the estimating spreadsheet.
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Drawing Instructions</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use a <ColorSwatch color="red" /> <strong>red PolyLine</strong> to trace the exterior walls
          of the foundation plan.
        </li>
        <li>
          <strong>Include</strong> garage walls that meet the interior of the home.
        </li>
        <li>
          <strong>Exclude</strong> porches from this trace.
        </li>
      </ul>

      <Tip>
        Focus only on walls where sill seal material will actually be installed. Porches do not
        receive sill seal, so they are excluded from this measurement.
      </Tip>

      <h3 className="font-semibold text-base text-dsld-teal">Entering the Value</h3>

      <p className="text-sm leading-relaxed">
        Take the <strong>total linear feet</strong> of the <ColorSwatch color="red" /> red lines and
        enter it into the <strong>Exterior Perimeter (Including Garage Wall) Seal</strong> field in
        the Wall Takeoffs section of the estimating spreadsheet.
      </p>

      <SpreadsheetRef section="Wall Takeoffs" cell="Exterior Perimeter Seal" />

      <Note>
        The AutoCAD sketch will exclude garage doors along with porches.
      </Note>

      <Note>
        Double-check that the garage wall segments are included in your trace. Missing these is a
        common error for new estimators.
      </Note>
    </div>
  );
}
