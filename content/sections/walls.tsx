import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";


export default function Walls() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Walls</h2>

      <p className="text-sm leading-relaxed">
        Wall measurements are one of the most critical parts of the estimate.
        You will trace both interior and exterior walls in AutoCAD to calculate
        total linear footage and wall area for framing, sheetrock, and other
        trades.
      </p>

      {/* ---- Regular Walls & Knee Walls ---- */}
      <h3 className="font-medium text-base text-dsld-text">
        Regular Walls &amp; Knee Walls
      </h3>

      <p className="text-sm leading-relaxed">
        Regular walls are standard full-height walls. Knee walls are shorter
        walls — commonly found in attic spaces, bonus rooms, and at kitchen
        bars. Both must be measured accurately because they affect framing
        lumber and sheetrock quantities.
      </p>

      <Note>
        When joists from a 10ft room do not land on an adjacent 9ft wall,
        trainees should go with the higher ceiling height of the two.
      </Note>

      <Note>
        In rooms where there are tray ceilings, trainees should always honor
        the actual ceiling height and ignore the tray height.
      </Note>

      <Note>
        The calculations for knee walls in regular walls and knee walls for
        kitchen bars will go in separate places on the spreadsheet.
      </Note>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/imageb.png" alt="Knee wall and random lengths spreadsheet section" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Knee wall / random lengths spreadsheet section</p>
      </div>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image9.png" alt="Wall Takeoffs spreadsheet color coded by ceiling height" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Wall Takeoffs spreadsheet - color coded by ceiling height</p>
      </div>

      {/* ---- Exterior Walls ---- */}
      <h3 className="font-medium text-base text-dsld-text">Exterior Walls</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Trace the full perimeter of the exterior walls using a polyline on
          the correct layer.
        </li>
        <li>
          Include all bump-outs, bay windows, and garage walls in your trace.
        </li>
        <li>
          Record the total linear footage from the polyline properties.
        </li>
      </ul>

      {/* ---- Interior Walls ---- */}
      <h3 className="font-medium text-base text-dsld-text">Interior Walls</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Trace each interior wall segment individually.</li>
        <li>
          Pay attention to wall height callouts — some interior walls may be
          different heights.
        </li>
        <li>
          Do not double-count walls that are shared between rooms.
        </li>
      </ul>

      <SpreadsheetRef section="Wall Takeoffs" cell="Exterior LF" />
      <SpreadsheetRef section="Wall Takeoffs" cell="Interior LF" />

      <Tip>
        Use the DIST command to spot-check your polyline measurements against
        the dimensioned plan to catch tracing errors early.
      </Tip>
    </div>
  );
}
