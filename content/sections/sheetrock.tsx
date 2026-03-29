import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function Sheetrock() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Sheetrock</h2>

      <p className="text-sm leading-relaxed">
        Sheetrock (drywall) is sent off to JDK construction for estimation.
      </p>

      <p className="text-sm leading-relaxed">
        1. Email eric@jdk-construction.com a PDF attachment of the plan with the name of the plan as
        the subject.
      </p>

      <p className="text-sm leading-relaxed">
        2. Add the plan to the JDK dropbox in a new folder with the current date.
      </p>

      <p className="text-sm leading-relaxed">
        <strong><u>NOTE:</u></strong> The only area that we do takeoffs for sheetrock is Tennessee.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Nailers</h3>
      <p className="text-sm leading-relaxed">
        Nailers are required wherever two drywall sheets meet at a corner or where drywall terminates
        at a framing member.
      </p>

      <p className="text-sm leading-relaxed">
        Copy over your wall takeoff sketch and count the number of 2x6 sheetrock nailers by drawing
        a circle at each location.
      </p>

      <ImagePlaceholder label="Sheetrock Nailers CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Any wall intersection that looks like a &quot;T&quot; needs a sheetrock nailer added.</li>
        <li>Any wall intersection that looks like a &quot;t&quot; does not need a sheetrock nailer.</li>
        <li>Nailers are not needed on 6&apos;&apos; walls.</li>
        <li>If there are 2 ceiling heights at a nailer location, go with the higher ceiling height of the 2.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Color code your circles based on the corresponding ceiling height you used for the walls.
        This makes it easier to verify counts and ensures nailers are assigned to the correct height
        category in the spreadsheet.
      </p>

      <ImagePlaceholder label="Sheetrock Nailers XL" />

      <SpreadsheetRef section="Sheetrock" cell="Total SF" />
    </div>
  );
}
