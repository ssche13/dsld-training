import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function Sheetrock() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Sheetrock</h2>

      <p className="text-sm leading-relaxed">
        Sheetrock (drywall) is sent off to <strong>JDK Construction</strong> for estimation.
      </p>

      <p className="text-sm leading-relaxed">
        1. Email <u>eric@jdk-construction.com</u> a PDF attachment of the plan with the name of the plan as
        the subject.
      </p>

      <p className="text-sm leading-relaxed">
        2. Add the plan to the <u>JDK Dropbox</u> in a new folder with the current date.
      </p>

      <p className="text-sm leading-relaxed">
        <strong><u>NOTE:</u></strong> The only area that we do takeoffs for sheetrock is Tennessee.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Nailers</h3>
      <p className="text-sm leading-relaxed">
        Nailers are required wherever two drywall sheets meet at a corner or where drywall terminates
        at a framing member.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Copy over your wall takeoff sketch.</li>
        <li>Count the number of 2x6 sheetrock nailers by using the <strong>CIRCLE</strong> command at each location.</li>
        <li>Color code your circles to <strong>match the color of the wall that it is on.</strong> This makes it easier to verify counts and ensures nailers are assigned to the correct height category in the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Sheetrock Nailers CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Any wall intersection that looks like a <strong>&quot;T&quot;</strong> needs a sheetrock nailer.</li>
        <li>Any wall intersection that looks like a <strong>&quot;t&quot;</strong> does not need a sheetrock nailer.</li>
        <li>Sheetrock nailers are <strong>not</strong> needed on <strong>6&quot; walls</strong>.</li>
        <li>If there are <strong>two ceiling heights</strong> represented at a nailer location, go with the <strong>higher</strong> ceiling height of the two to assign the appropriate color.</li>
        <li>Place the count of each based on ceiling height into the corresponding <strong>Wall Intersections</strong> cells of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Sheetrock Nailers XL" />

      <SpreadsheetRef section="Sheetrock" cell="Total SF" />
    </div>
  );
}
