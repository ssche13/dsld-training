import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Doors() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Doors</h2>

      <p className="text-sm leading-relaxed">Door estimation uses the <strong>door schedule</strong> from the plan set. The schedule provides each door mark, size, and type (interior/exterior).</p>

      <CmsImage src="/images/cms/doors--course_0.png" alt="Doors – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Reading the Door Schedule</h3>

      <ol className="list-decimal pl-6 space-y-2 text-sm">

        <li>Locate the door schedule — usually on the same sheet as the window schedule.</li>

        <li>Each door mark (e.g., 1, 2) identifies a specific size and style.</li>

        <li>Note the door type: interior hollow-core, interior solid-core, exterior, sliding glass, etc.</li>

        <li>Verify the count matches the doors shown on the floor plan. <strong>As stated in the Windows section, the schedule may not always be accurate.</strong></li>

      </ol>

      <h3 className="font-medium text-base text-dsld-text">Interior Doors</h3>

      <p className="text-sm leading-relaxed">Keep a tally of door sizes and whether they are <strong>left-hand </strong>or <strong>right-hand. </strong>Include double doors in your tally, where they count as 1.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Place the resulting total counts in the <strong>Interior Doors and Trim</strong> section of the spreadsheet based on door type and door swing.</li>

        <li>Reference the <strong>Beams</strong> module of this course for how to add parts from the parts list if you cannot find the door you need.</li>

      </ul>

      <CmsImage src="/images/cms/doors--course_1.png" alt="Interior Doors – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Exterior Doors</h3>

      <p className="text-sm leading-relaxed">Repeat the same process you did for the interior doors.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Place the resulting count into the<strong> Windows, Exterior Doors, and Fireplaces</strong> section of the spreadsheet.</li>

        <li>Ensure the correct part is in the RH section and the correct counterpart is in the LH section.</li>

      </ul>

      <CmsImage src="/images/cms/doors--course_2.png" alt="Exterior Doors – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Garage Doors</h3>

      <p className="text-sm leading-relaxed">Repeat the same process.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Place the resulting count into the<strong> Garage door</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/doors--course_3.png" alt="Garage Doors – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Door Hardware</h3>

      <p className="text-sm leading-relaxed">Door hardware is referenced on the <strong>finishes</strong> page of the PDF.</p>

      <CmsImage src="/images/cms/doors--course_4.png" alt="Door Hardware – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          Counts of entry knobs and deadbolts will go in the <strong>Interior Garage Door Trim</strong> section of the spreadsheet.
          <CmsImage src="/images/cms/doors--course_5.png" alt="Door Hardware – example 2" />
        </li>

        <li>Counts of other doorknob types, door stop types, and bathroom hardware will go in the<strong> Trim Punch</strong> section of the spreadsheet. Use the <strong>finishes legend</strong> from the PDF for this part.</li>

      </ul>

      <CmsImage src="/images/cms/doors--course_6.png" alt="Door Hardware – example 3" />

      <CmsImage src="/images/cms/doors--course_7.png" alt="Door Hardware – example 4" />

      <h3 className="font-medium text-base text-dsld-text">Black Aluminum House Number</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Each home is allotted <strong>5</strong> for the <strong>Black Aluminum House Number</strong>.</li>

      </ul>

      <CmsImage src="/images/cms/doors--course_8.png" alt="Black Aluminum House Number – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Shower Doors</h3>

      <p className="text-sm leading-relaxed">Shower door information can be found on the <strong>floor plan</strong> of the PDF.</p>

      <CmsImage src="/images/cms/doors--course_9.png" alt="Shower Doors – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Find all showers with a door and count them based on their size. The callouts will be measured in inches.</li>

        <li>Convert the length to feet.</li>

        <li>Place the counts based on size in the <strong>Mirrors and Shower Doors</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/doors--course_10.png" alt="Shower Doors – example 2" />

      <h3 className="font-medium text-base text-dsld-text">Casing – LA ONLY</h3>

      <p className="text-sm leading-relaxed">Exterior doors and interior garage doors require casing to cover gaps between the door frame and adjacent walls.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count how many exterior doors and interior garage doors are present.</li>

        <li>Multiply that quantity by 2.</li>

        <li>Add the new quantity to the previous quantity.</li>

        <li>Place the resulting total into the corresponding cell in the Trim section of the spreadsheet.</li>

        <li>Add onto the window stool quantity in this cell.</li>

      </ul>

      <CmsImage src="/images/cms/doors--course_11.png" alt="Casing – LA ONLY – example 1" />

      <Note>If there is a door under any of these sections that you do not see already listed in the spreadsheet, you would need to pull the appropriate part from the parts list. Refer to the Beams module for more information.</Note>
    </div>
  );
}
