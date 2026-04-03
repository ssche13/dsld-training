import CmsImage from "@/components/CmsImage";

export default function Sheetrock() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Sheetrock</h2>

      <p className="text-sm leading-relaxed">
        Sheetrock (drywall) is sent off to <strong>JDK Construction</strong> for estimation.
      </p>

      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Email <u>eric@jdk-construction.com</u> a PDF attachment of the plan with the name of the plan as the subject.</li>
        <li>Add the plan to the <u>JDK Dropbox</u> in a new folder with the current date.</li>
      </ol>

      <p className="text-sm leading-relaxed">
        <strong><u>NOTE:</u></strong> The only area that we do takeoffs for sheetrock is Tennessee.
      </p>

      <p className="text-sm leading-relaxed">
        If zero lot line walls are present, sheetrock would need to be updated to have a run on
        the inside of the fire rock while backing out the regular sheetrock for that run. Refer to
        the <strong>Zero Lot Line Walls</strong> section of the OSB Module for more information.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Nailers</h3>
      <p className="text-sm leading-relaxed">
        Nailers are required wherever two drywall sheets meet at a corner or where drywall terminates
        at a framing member.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Copy over your wall takeoff sketch.</li>
        <li>Use the <strong>CIRCLE</strong> command to count the number of 2x6 sheetrock nailers at each location.</li>
        <li>Color code your circles to <strong>match the color of the wall that it is on.</strong> This makes it easier to verify counts and ensures nailers are assigned to the correct height category in the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/sheetrock--docx_0.png" alt="Sheetrock Nailers CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Any wall intersection that looks like a <strong>&quot;T&quot;</strong> needs a sheetrock nailer.</li>
        <li>Any wall intersection that looks like a <strong>&quot;t&quot;</strong> does not need a sheetrock nailer.</li>
        <li>Sheetrock nailers are <strong>not</strong> needed on <strong>6&quot; walls</strong>.</li>
        <li>If there are <strong>two ceiling heights</strong> represented at a nailer location, go with the <strong>higher</strong> ceiling height of the two to assign the appropriate color.</li>
        <li>Place the count of each based on ceiling height into the corresponding <strong>Wall Intersections</strong> cells of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/sheetrock--sheetrock_0.png" alt="Sheetrock Nailers XL" />

      <h3 className="font-medium text-base text-dsld-text">Two-Story Homes</h3>
      <p className="text-sm leading-relaxed">
        If you are estimating a two-story home, <strong>1/8x4x8 Structural Sheathing</strong> is
        needed as a draft stop where the second story wall meets the attic space.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the total linear footage.</li>
        <li>Place the resulting count into the <strong>Decking and Felt</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/sheetrock--sheetrock_1.png" alt="2 story sheathing XL" />
    </div>
  );
}
