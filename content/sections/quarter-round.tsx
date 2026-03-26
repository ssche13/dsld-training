import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function QuarterRound() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Quarter Round</h2>

      <p className="text-sm leading-relaxed">
        Quarter round is a small molding profile installed at the base of walls where the flooring
        meets the baseboard. It covers the expansion gap left for hardwood or laminate flooring.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Where Quarter Round Is Used</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Rooms with hardwood, laminate, or vinyl plank flooring typically receive quarter round.</li>
        <li>Tile and carpet rooms usually do not require quarter round.</li>
        <li>Check the flooring plan to determine which rooms need it.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Measure the perimeter of each room that requires quarter round.</li>
        <li>Subtract door openings and areas where cabinetry sits against the wall.</li>
        <li>Total all rooms and enter the linear footage in the spreadsheet.</li>
      </ul>

      <Note>
        Showers are also excluded from these calculations.
      </Note>

      <SpreadsheetRef section="Trim" cell="Quarter Round" />
    </div>
  );
}
