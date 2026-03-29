import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function QuarterRound() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Quarter Round</h2>

      <p className="text-sm leading-relaxed">
        Quarter round is a small molding profile installed at the base of walls where the flooring
        meets the baseboard. It is installed anywhere with hard floors — hardwood, laminate, vinyl
        plank, and tile.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Where Quarter Round Is Used</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Any room with hard flooring (hardwood, laminate, vinyl plank, or tile) receives quarter round.</li>
        <li>Check the flooring plan to determine which rooms have hard floors.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Exclusions</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Doorways and cased openings.</li>
        <li>Garages.</li>
        <li>Tubs and showers.</li>
        <li>Areas behind cabinets.</li>
        <li>Carpeted areas.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Measure the perimeter of each room that requires quarter round.</li>
        <li>Subtract all exclusions listed above.</li>
        <li>Total all rooms and enter the linear footage in the spreadsheet.</li>
      </ul>

      <SpreadsheetRef section="Trim" cell="Quarter Round" />
    </div>
  );
}
