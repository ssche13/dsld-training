import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function PostsBeams() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Posts &amp; Beams</h2>

      <p className="text-sm leading-relaxed">
        Posts and beams are structural and decorative elements found on porches, covered entries, and
        load-bearing locations. You will count posts from the floor plan and elevations, and measure
        beam lengths from the framing plan.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Porch Posts</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count all porch posts shown on the floor plan and verify against the elevations.</li>
        <li>Note the post type — vinyl wrap, wood, or Hardi-wrapped — from the elevation details.</li>
        <li>Record the 1x4 porch vinyl post nailer count in the appropriate cell.</li>
      </ul>

      <ImagePlaceholder label="Spreadsheet screenshot showing 1x4 porch vinyl post nailer input cell location" />

      <h3 className="font-medium text-base text-dsld-text">Beams</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify all beams on the framing plan (porch beams, header beams, ridge beams).</li>
        <li>Measure the linear length of each beam in AutoCAD.</li>
        <li>Record the beam size and length in the spreadsheet.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Get total counts for each beam <strong>END</strong> (not the beam itself).
      </p>

      <h3 className="font-medium text-base text-dsld-text">Hardie Wrapped Beams</h3>
      <p className="text-sm leading-relaxed">
        To calculate hardie wrapped beams, use the following formula:
      </p>
      <p className="text-sm leading-relaxed font-medium">
        Total linear feet of dropped beams &times; 1.1 / 12 = your count
      </p>

      <Note>
        The wrong cell is circled for Hardi post cap/base in the training video. Verify you are entering the value in the correct cell in the spreadsheet.
      </Note>

      <SpreadsheetRef section="Posts & Beams" cell="Post Count" />
      <SpreadsheetRef section="Posts & Beams" cell="Beam Ends" />
    </div>
  );
}
