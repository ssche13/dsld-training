import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function TwoStoryHomes() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Two Story Homes</h2>

      <p className="text-sm leading-relaxed">Extra elements are required to be taken off in two-story plans of any region. You will use the stair section of the PDF along with AutoCAD for these calculations.</p>

      <CmsImage src="/images/cms/two-story-homes--course_0.png" alt="Two Story Homes – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Sloped Stair Walls</h3>

      <p className="text-sm leading-relaxed">The walls behind or enclosing any stairs present that are at an angle will need wall lumber. <strong>This is taken off separately from your regular walls.</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Pull in the <strong>Stair section</strong> construct into your CAD workspace.</li>

        <li>Use <strong>POLYLINE</strong> to trace the wall behind the stairs to the best of your ability.</li>

      </ul>

      <CmsImage src="/images/cms/two-story-homes--course_1.png" alt="Sloped Stair Walls – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          Pull your polyline out and hatch at 16’’ O.C.
          <CmsImage src="/images/cms/two-story-homes--course_2.png" alt="Sloped Stair Walls – example 2" />
        </li>

        <li>Explode.</li>

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the lines.</li>

        <li>Place the resulting quantity into the following cells of the Wall Takeoffs section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/two-story-homes--course_3.png" alt="Sloped Stair Walls – example 3" />

      <h3 className="font-medium text-base text-dsld-text">Additional Lumber for Stairs</h3>

      <p className="text-sm leading-relaxed">The lumber to build the stairs also needs to be taken off. Stairs are built with<strong> 2x12s, </strong>and get a standard count of <strong>4 </strong>2x10x14s,<strong> 4 </strong>2x12x8s, and<strong> 4 </strong>2x12x14s.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Enter those quantities into the spreadsheet below. Use the parts list if parts are not already populated into this section.</li>

      </ul>

      <CmsImage src="/images/cms/two-story-homes--course_4.png" alt="Additional Lumber for Stairs – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          Use LINE to draw from the top of the stairs to the bottom.
          <CmsImage src="/images/cms/two-story-homes--course_5.png" alt="Additional Lumber for Stairs – example 2" />
        </li>

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the line drawn, then use the parts list to find the corresponding 2x12 with the matching length.</li>

        <li>A standard count of <strong>3</strong> is always given. Insert into the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/two-story-homes--course_6.png" alt="Additional Lumber for Stairs – example 3" />

      <h3 className="font-medium text-base text-dsld-text">Stair Landings</h3>

      <p className="text-sm leading-relaxed">If a set of stairs has a landing, ¾’’ Plywood will be needed.</p>

      <CmsImage src="/images/cms/two-story-homes--course_7.png" alt="Stair Landings – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count how many landings appear on the floor plan of the PDF.</li>

        <li>Use the parts list to find <strong>¾’’ Plywood 4x8 23/32x4x8 SYP RATED SHEATHING</strong> and insert into a placeholder cell of the Additional Lumber for Stairs section.</li>

        <li>Place the count of landings into the spreadsheet.</li>

      </ul>

      <h3 className="font-medium text-base text-dsld-text">OSB and Glue</h3>

      <Note>This is auto calculated in Florida.</Note>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Draw 4x8 boxes over the second floor floor plan in AutoCAD.</li>

        <li>All boxes must be <strong>inside</strong> the walls for this calculation. <strong>Any boxes the breaches the threshold of the wall should be deleted.</strong></li>

      </ul>

      <CmsImage src="/images/cms/two-story-homes--course_8.png" alt="OSB and Glue – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count how many boxes are present.</li>

        <li>Find <strong>23/32x4x8 OSB T&amp;G</strong> in the parts list and add it to the Additional Lumber for Stairs section of the spreadsheet.</li>

        <li>Place your count into the spreadsheet.</li>

      </ul>

      <h3 className="font-medium text-base text-dsld-text">Stairs Trim Punch</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Each plan gets a standard count of <strong>5</strong> for the handrail and <strong>2</strong> for the stair rail brackets.</li>

        <li>Enter into the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/two-story-homes--course_9.png" alt="Stairs Trim Punch – example 1" />
    </div>
  );
}
