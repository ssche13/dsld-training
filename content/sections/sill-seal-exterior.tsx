import Note from "@/components/callouts/Note";
import Tip from "@/components/callouts/Tip";
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

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use a <ColorSwatch color="red" /> <strong>red PolyLine</strong> to trace the exterior walls
          of the foundation plan.
        </li>
        <li>
          <strong>Include</strong> garage walls that meet the interior of the home.
        </li>
        <li>
          <strong>Exclude</strong> porches and garage doors from this trace.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/sill-seal-exterior--docx_0.png" alt="Sill Seal CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Sill Seal CAD</p>
      </div>

      <Tip>
        Focus only on walls where sill seal material will actually be installed. Porches do not
        receive sill seal, so they are excluded from this measurement.
      </Tip>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the <strong>total linear feet</strong> of the <ColorSwatch color="red" /> red lines.</li>
        <li>Round up, then enter the resulting total into the <strong>Exterior Perimeter (Including Garage Wall) Seal</strong> cell of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/sill-seal-exterior--sill-seal-exterior_0.png" alt="Sill Seal XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Sill Seal XL</p>
      </div>

      <SpreadsheetRef section="Wall Takeoffs" cell="Exterior Perimeter Seal" />

      <Note>
        Double-check that the garage wall segments are included in your trace. Missing these is a
        common error for new estimators.
      </Note>
    </div>
  );
}
