import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Beams() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Beams</h2>

      <p className="text-base leading-relaxed">Beams are primary structural horizontal members spanning openings and carrying loads. Accurate beam measurement requires careful reading of the project files provided for all regions.</p>

      <h3 className="font-medium text-lg text-dsld-text">Under-Beams Studs</h3>

      <Note>Under beam studs are not taken off in Florida, North Alabama, or Tennessee.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>LA/TX</strong></li>

      </ul>

      <CmsImage src="/images/cms/beams--course_0.png" alt="Under-Beams Studs – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>From the ceiling framing plan on the PDF, count where beam ends fall in the middle of a wall on <strong>both</strong> sides.</li>

        <li>Exclude porches, when a beam lands on another beam, in the middle of a doorway, in the middle of a cased opening, or in a corner.</li>

        <li>Determine the height of the beam by the ceiling height of the room it is in.</li>

        <li>Place the total counts for <strong>each beam end at each plate height</strong> into the <strong>2x4 under beams</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/beams--course_1.png" alt="Under-Beams Studs – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          <strong>MS/SAL</strong>
          <CmsImage src="/images/cms/beams--course_2.png" alt="Under-Beams Studs – example 3" />
          <p className="mt-2 text-base leading-relaxed">Bethel Engineering calls out where stud locations are and how many need to be at each location.</p>
        </li>

        <li>Group quantities together based on ceiling height and wall size, then insert the totals into their respective cells in the spreadsheet:</li>

      </ul>

      <CmsImage src="/images/cms/beams--course_3.png" alt="Under-Beams Studs – example 4" />

      <h3 className="font-medium text-lg text-dsld-text">Raw Beam Counts</h3>

      <p className="text-base leading-relaxed">The logic is the same for each region: simply count how many of each beam is present and enter the quantities into the spreadsheet.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>LA/TX</strong></li>

      </ul>

      <CmsImage src="/images/cms/beams--course_4.png" alt="Raw Beam Counts – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Any that call for doubles, count for <strong>2</strong> instead of 1.</li>

        <li>Floating beams are indicated by &quot;<strong>F.B.</strong>&quot; at the end of a beam callout.</li>

        <li>
          <strong>MS/SAL</strong>
          <p className="mt-2 text-base leading-relaxed">Beam callouts in these regions do not include the length. You will need to use <strong>MEASURE</strong> in Foxit PDF Editor to get the length of each beam.</p>
          <CmsImage src="/images/cms/beams--course_5.png" alt="Raw Beam Counts – example 2" />
        </li>

        <li>
          <strong>FL/NAL/TN</strong>
          <p className="mt-2 text-base leading-relaxed">Exact beam sizes and quantities are <strong>given</strong> in these regions through a legend. Simply transfer this information over to the spreadsheet.</p>
          <CmsImage src="/images/cms/beams--course_6.png" alt="Raw Beam Counts – example 3" />
          <p className="mt-2 text-base leading-relaxed">Attics receive <strong>1 2x12x10 </strong>for all regions.</p>
        </li>

        <li>Place the count of each beam type/size into its corresponding cell of the<strong> Beams </strong>section.</li>

      </ul>

      <CmsImage src="/images/cms/beams--course_7.png" alt="Raw Beam Counts – example 4" />

      <h3 className="font-medium text-lg text-dsld-text">Parts List</h3>

      <p className="text-base leading-relaxed">You may notice that this part of the spreadsheet is filled with <strong>placeholders.</strong> This is because beams that match what is called out on the plans often must be added to the spreadsheet from the <strong>parts list.</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          Go to the <strong>Master Parts List</strong> sheet within the excel workbook. This is where you can find any part you need for any section of the estimation process.
          <CmsImage src="/images/cms/beams--course_8.png" alt="Parts List – example 1" />
        </li>

        <li>Find the part number and place it in the part number section of the spreadsheet in a placeholder cell. The next cell over will auto-populate the part.</li>

      </ul>

      <CmsImage src="/images/cms/beams--course_9.png" alt="Parts List – example 2" />

      <CmsImage src="/images/cms/beams--course_10.png" alt="Parts List – example 3" />

      <p className="text-base leading-relaxed">Refer to this section from other modules if you need help navigating an item you cannot find already listed within the takeoff spreadsheet.</p>
    </div>
  );
}
