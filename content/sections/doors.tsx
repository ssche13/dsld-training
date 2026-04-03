import Note from "@/components/callouts/Note";

export default function Doors() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Doors</h2>

      <p className="text-sm leading-relaxed">
        Door estimation uses the door schedule from the plan set. The schedule provides each door
        mark, size, and type (interior/exterior).
      </p>

      <h3 className="font-medium text-base text-dsld-text">Reading the Door Schedule</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Locate the door schedule &mdash; usually on the same sheet as the window schedule.</li>
        <li>Each door mark (e.g., 1, 2) identifies a specific size and style.</li>
        <li>Note the door type: interior hollow-core, interior solid-core, exterior, sliding glass, etc.</li>
        <li>Verify the count matches the doors shown on the floor plan. As stated in the Windows module, the schedule may not always be accurate.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Interior Doors</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Keep a tally of door sizes and whether they are left-hand or right-hand. Include double doors in your tally, where they count as 1. Your interior door counts will go in two locations.</li>
        <li>Place the resulting total counts in the <strong>Interior Doors and Trim</strong> section of the spreadsheet based on door type and door swing.</li>
        <li>Reference the <strong>Beams</strong> module of this course for how to add parts from the parts list if you cannot find the door you need.</li>
        <li>Add the same resulting total counts into the <strong>Header Calculator</strong> based on width.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/doors--docx_0.png" alt="Header Calculator XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Header Calculator XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Exterior Doors</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Repeat the same process you did for the interior doors.</li>
        <li>Place the resulting count into the <strong>Windows, Exterior Doors, and Fireplaces</strong> section of the spreadsheet.</li>
        <li>Ensure the correct part is in the RH section and the correct counterpart is in the LH section.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/doors--doors_0.png" alt="Ext Doors XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Ext Doors XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Garage Doors</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Repeat the same process.</li>
        <li>Place the resulting count into the <strong>Garage door</strong> section of the spreadsheet.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Door Hardware</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Door hardware is referenced on the finishes page of the PDF.</li>
        <li>Counts of entry knobs and deadbolts will go in the <strong>Interior Garage Door Trim</strong> section of the spreadsheet.</li>
        <li>Counts of other door knob types, door stop types, and bathroom hardware will go in the <strong>Trim Punch</strong> section of the spreadsheet.</li>
        <li>Each home is allotted 5 for the Black Aluminum House Number.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/doors--docx_4.png" alt="Trim Hardware XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Trim Hardware XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Shower Doors</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Shower door information can be found on the floor plan of the PDF.</li>
        <li>Find all showers with a door and count them based on their size. The callouts will be measured in inches.</li>
        <li>Convert the length to feet.</li>
        <li>Place the counts based on size in the <strong>Mirrors and Shower Doors</strong> section of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/doors--docx_8.png" alt="Mirrors and Shower doors XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Mirrors and Shower doors XL</p>
      </div>

      <Note>
        If there is a door under any of these sections that you do not see already listed in the
        spreadsheet, you would need to pull the appropriate part from the parts list. Refer to the
        Beams module for more information.
      </Note>
    </div>
  );
}
