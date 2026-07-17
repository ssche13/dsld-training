import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Windows() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Windows</h2>

      <p className="text-sm leading-relaxed">Window estimation is based on the window schedule included in the plan set. The schedule lists every window by mark number, size, type, and quantity. It is important that you use the <strong>Window Schedule</strong> from the PDF plan drawing to aid in the following calculations.</p>

      <CmsImage src="/images/cms/windows--course_0.png" alt="Windows – example 1" />

      <Note>Don't always trust that the schedule is correct.</Note>

      <h3 className="font-medium text-base text-dsld-text">Reading the Window Schedule</h3>

      <ol className="list-decimal pl-6 space-y-2 text-sm">

        <li>Locate the window schedule on the plan — it is typically on the floor plans page.</li>

        <li>Each window mark (e.g., W1, W2) corresponds to a specific size and type.</li>

        <li>Verify the count on the schedule against the windows shown on the floor plan.</li>

        <li>Note any special window types: fixed, casement, sliding, or bay.</li>

      </ol>

      <h3 className="font-medium text-base text-dsld-text">Raw Window Counts</h3>

      <p className="text-sm leading-relaxed">Raw window counts are needed for estimating the windows themselves.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Place the total count of each window based on its size and sash in its corresponding cell of the <strong>Windows - Standard </strong>section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/windows--course_1.png" alt="Raw Window Counts – example 1" />

      <Note>All beige windows will need to be backed out with a white window option in all regions.</Note>

      <h3 className="font-medium text-base text-dsld-text">Rain Windows</h3>

      <p className="text-sm leading-relaxed">Rain windows also need to be accounted for. They are typically 36x36 and used in bathrooms. <strong>These windows will also need to be backed out with a white option.</strong></p>

      <CmsImage src="/images/cms/windows--course_2.png" alt="Rain Windows – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Place the total count of the windows in its corresponding cell in the <strong>Misc.</strong> section of the spreadsheet.</li>

        <li>If a different sized rain window is used, find it in the parts list as discussed in the <strong>Beams</strong> section of this training course.</li>

      </ul>

      <CmsImage src="/images/cms/windows--course_3.png" alt="Rain Windows – example 2" />

      <h3 className="font-medium text-base text-dsld-text">Blinds</h3>

      <p className="text-sm leading-relaxed">Blinds are placed on all windows except for rain windows and windows in gables.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count exterior doors.</li>

        <li>Place the total count into the <strong>BLINDSR</strong> cell of the <strong>Misc.</strong> section of the spreadsheet.</li>

        <li>Count windows, excluding rain windows and windows in gables.</li>

        <li>Place the total count into the <strong>BLINDS</strong> cell of the<strong> Misc. </strong>section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/windows--course_4.png" alt="Blinds – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Window Stool Casing – LA ONLY</h3>

      <p className="text-sm leading-relaxed">For window casing, <strong>4 windows</strong> can be covered by <strong>1 piece</strong>. The same metric can be used for the window stool.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Get the total count of windows.</li>

        <li>Divide by 4.</li>

        <li>Round up, then place the resulting total into the following 2 cells of the <strong>Trim</strong> section:</li>

      </ul>

      <CmsImage src="/images/cms/windows--course_5.png" alt="Window Stool Casing – LA ONLY – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Louvered Vents</h3>

      <p className="text-sm leading-relaxed">Louvered vents will be called out on the elevations along with the size. Measure in AutoCAD if the size is missing.</p>

      <Note>Louvered vents will not be taken off in North Alabama or Tennessee.</Note>

      <CmsImage src="/images/cms/windows--course_6.png" alt="Louvered Vents – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Get the total count of vents based on size.</li>

        <li>Place resulting totals into the <strong>Fypon Vents and Brackets</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/windows--course_7.png" alt="Louvered Vents – example 2" />

      <h3 className="font-medium text-base text-dsld-text">Shutters</h3>

      <p className="text-sm leading-relaxed">Closed (or fake) shutters and open shutters are treated the same.</p>

      <CmsImage src="/images/cms/windows--course_8.png" alt="Shutters – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          Count <strong>4</strong> per shutter.
          <p className="mt-2 leading-relaxed">Example: A window with 2 shutters would have a count of 8.</p>
        </li>

        <li>Place resulting totals into the <strong>Real Material Shutters</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/windows--course_9.png" alt="Shutters – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Divide the previous count by 8.</li>

        <li>Place resulting totals into the <strong>Build Custom Wood Shutters per pair</strong> cell of the Bid Rates section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/windows--course_10.png" alt="Shutters – example 3" />
    </div>
  );
}
