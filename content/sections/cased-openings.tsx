import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function CasedOpenings() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Cased Openings</h2>

      <p className="text-sm leading-relaxed">
        Cased openings are interior openings that do not have a door installed. Instead, the opening
        is trimmed (cased) with door casing material on both sides. These are common for pass-throughs
        between rooms, hallway transitions, and closet openings without doors.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Counting Cased Openings</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Review the floor plan and identify all interior openings that are not assigned a door.</li>
        <li>Cross-reference with the door schedule to confirm which openings are cased (no door).</li>
        <li>Note the size of each cased opening — width and height affect the trim material needed.</li>
        <li>Record the total count and sizes for entry into the spreadsheet.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Entering into the Estimating Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Enter the cased opening count and sizes in the designated section of the estimating
        spreadsheet.
      </p>

      <ImagePlaceholder label="Estimating spreadsheet cased openings input location" />

      <SpreadsheetRef section="Cased Openings" cell="Count / Sizes" />

      <Note>
        Do not confuse cased openings with doorways. If a door is scheduled for an opening, it is not
        a cased opening — it belongs in the doors section of the estimate.
      </Note>
    </div>
  );
}
