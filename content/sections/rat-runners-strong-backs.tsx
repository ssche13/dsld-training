import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function RatRunnersStrongBacks() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Rat Runners &amp; Strong Backs</h2>

      <p className="text-sm leading-relaxed">
        Rat runners and strong backs are horizontal framing members that provide structural support
        between ceiling joists. They prevent joists from twisting and help distribute loads evenly
        across the framing system. You will refer to the <strong>Ceiling Framing Layout</strong> in
        the PDF plan drawing for this section.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Rat Runners</h3>
      <p className="text-sm leading-relaxed">
        Rat runners are continuous bracing members nailed perpendicular to the ceiling joists. They
        run the length of the joist span and keep the joists aligned.
      </p>

      <p className="text-sm leading-relaxed">
        <strong>The Rat Runner materials section will be auto calculated from the information
        inputted regarding the strong backs.</strong>
      </p>

      <h3 className="font-medium text-base text-dsld-text">Strong Backs</h3>
      <p className="text-sm leading-relaxed">
        Strong backs are L-shaped or T-shaped assemblies installed at mid-span of ceiling joists to
        prevent sagging. They are typically made from 2x6 or 2x8 lumber fastened vertically to a
        continuous horizontal member.
      </p>

      <p className="text-sm leading-relaxed">
        Pull in the Ceiling Framing construct into your AutoCAD drawing.
      </p>

      <p className="text-sm leading-relaxed">
        Trace everything circled in red in the image below.
      </p>

      <ImagePlaceholder label="Strong Backs from Plans" />

      <p className="text-sm leading-relaxed">
        Measure the total linear footage of the lines you traced, round up, and insert into the
        spreadsheet.
      </p>

      <ImagePlaceholder label="Strong Backs CAD" />

      <p className="text-sm leading-relaxed">
        <strong><u>NOTE:</u></strong> Strong backs are not needed for areas that are 3&apos; or smaller.
      </p>

      <SpreadsheetRef section="Framing" cell="Rat Runners" />
      <SpreadsheetRef section="Framing" cell="Strong Backs" />

      <Note>
        Strong backs are required whenever ceiling joist spans exceed the threshold specified in the
        framing plan. Check the structural notes on the plan before skipping this item.
      </Note>
    </div>
  );
}
