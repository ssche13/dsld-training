import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Sheetrock() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Sheetrock</h2>

      <p className="text-base leading-relaxed">Sheetrock (drywall) is sent off to<strong> JDK Construction</strong> for estimation in all regions <strong>except for Tennessee. </strong></p>

      <ol className="list-decimal pl-6 space-y-2 text-base">

        <li>Email eric@jdk-construction.com a PDF attachment of the plan with the name of the plan as the subject.</li>

        <li>Add the plan to the JDK Dropbox in a new folder with the current date.</li>

      </ol>

      <p className="text-base leading-relaxed">If zero lot line walls are present, sheetrock would need to be updated to have a run on the inside of the fire rock while backing out the regular sheetrock for that run. Refer to the <strong>Zero Lot Line Walls</strong> section of the <strong>OSB Module</strong> for more information.</p>

      <h3 className="font-medium text-lg text-dsld-text">Tennessee Considerations</h3>

      <p className="text-base leading-relaxed">Sheetrock is taken off in Tennessee using the sheetrock calculator in the spreadsheet. The living square footage of the home will be auto populated into the calculator based on what is inputted in the concrete section.</p>

      <CmsImage src="/images/cms/sheetrock--course_0.png" alt="Tennessee Considerations – example 1" />

      <p className="text-base leading-relaxed">You will use your wall takeoff in AutoCAD to get the total linear footage of the walls based on height. Interior walls will be copied over twice, while exterior walls and knee walls will only be copied over once.</p>

      <CmsImage src="/images/cms/sheetrock--course_1.png" alt="Tennessee Considerations – example 2" />

      <p className="text-base leading-relaxed">The 4’ knee wall is your kitchen bar wall quantity and the 2’ knee wall is your garage header wall quantity.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          Get the <strong>total linear footage</strong> of the lines based on their respective heights and insert them into the appropriate cells in the calculator. The following cells will auto-populate:
          <CmsImage src="/images/cms/sheetrock--course_2.png" alt="Tennessee Considerations – example 3" />
        </li>

        <li>Insert those quantities into their respective cells under the Sheetrock section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/sheetrock--course_3.png" alt="Tennessee Considerations – example 4" />

      <h3 className="font-medium text-lg text-dsld-text">Nailers</h3>

      <p className="text-base leading-relaxed">Nailers are required wherever two drywall sheets meet at a corner or where drywall terminates at a framing member.</p>

      <Note>Sheetrock nailers are not taken off in Florida, North Alabama, or Tennessee.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Copy over your wall takeoff sketch.</li>

        <li>Use the <strong>CIRCLE</strong> command to count the number of 2x6 sheetrock nailers at each location.</li>

        <li>Color code your circles to <strong>match the color of the wall that it is on.</strong> This makes it easier to verify counts and ensures nailers are assigned to the correct height category in the spreadsheet.</li>

        <li>Any wall intersection that looks like a <strong>&quot;T&quot;</strong> needs a sheetrock nailer.</li>

        <li>Any wall intersection that looks like a <strong>&quot;t&quot;</strong> does not need a sheetrock nailer.</li>

        <li>Sheetrock nailers are <strong>not</strong> needed on <strong>6'' walls</strong>.</li>

        <li>If there are <strong>two ceiling heights</strong> represented at a nailer location, go with the <strong>higher</strong> ceiling height of the two to assign the appropriate color.</li>

      </ul>

      <CmsImage src="/images/cms/sheetrock--course_4.png" alt="Nailers – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Place the count of each based on ceiling height into the corresponding <strong>Wall Intersections</strong> cells of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/sheetrock--course_5.png" alt="Nailers – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Two-Story Homes</h3>

      <p className="text-base leading-relaxed">If you are estimating a two-story home,<strong> 1/8x4x8 Structural Sheathing</strong> is needed as a draft stop where the second story wall meets the attic space.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the total linear footage.</li>

        <li>Place the resulting count into the <strong>Decking and Felt</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/sheetrock--course_6.png" alt="Two-Story Homes – example 1" />
    </div>
  );
}
