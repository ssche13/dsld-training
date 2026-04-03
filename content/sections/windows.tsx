import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Windows() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Windows</h2>

      <p className="text-sm leading-relaxed">
        Window estimation is based on the window schedule included in the plan set. Use the{" "}
        <strong>Window Schedule</strong> from the PDF to aid in the following calculations.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Reading the Window Schedule</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Locate the window schedule on the plan &mdash; it is typically on the floor plans page.</li>
        <li>Each window mark (e.g., W1, W2) corresponds to a specific size and type.</li>
        <li>
          <strong>Don&apos;t always trust that the schedule is correct.</strong> Verify the count
          against the windows shown on the floor plan.
        </li>
        <li>Note any special window types: fixed, casement, sliding, or bay.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Entering into the Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        The perimeter of windows is needed.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the linear footage of the windows you traced in yellow.</li>
        <li>Non-brick windows and brick windows go into their own respective cells.</li>
        <li>
          <strong>Regarding brick windows,</strong> windows that were counted as one for calculating
          the soldier course will now be counted as individual windows.
        </li>
      </ul>

      <CmsImage src="/images/cms/windows--windows_0.png" alt="Windows Perimeter XL" />

      <p className="text-sm leading-relaxed">
        Window trim is also needed.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Check all windows across the floor plan, elevations, and window schedule.</li>
        <li>Keep a tally of each type of window, ensuring the callouts match across all three references.</li>
        <li>
          Place the total count of each window based on width in its corresponding cell of the{" "}
          <strong>Header Calculator</strong> section of the spreadsheet.
        </li>
      </ul>

      <p className="text-sm leading-relaxed">
        Counts for sashes are also needed.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Place the total count of each window based on its sash in its corresponding cell of the{" "}
          <strong>Windows - Standard</strong> section of the spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/doors--docx_0.png" alt="Header Calculator XL" />

      <p className="text-sm leading-relaxed">
        Rain windows also need to be accounted for. They are typically 36x36 and used in bathrooms.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Place the total count of the windows in its corresponding cell in the{" "}
          <strong>Misc.</strong> section of the spreadsheet.
        </li>
        <li>
          If a different size rain window is used, find it in the parts lists as discussed in the{" "}
          <strong>Beams</strong> section of this training course.
        </li>
      </ul>

      <CmsImage src="/images/cms/windows--docx_2.png" alt="Misc Rain Windows XL" />

      <p className="text-sm leading-relaxed">
        Blinds will also need to be calculated in this section.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Count exterior doors and place the total count into the <strong>BLINDSR</strong> cell of
          the <strong>Misc.</strong> section of the spreadsheet.
        </li>
        <li>
          Count windows and place the total count into the <strong>BLINDS</strong> cell of the{" "}
          <strong>Misc.</strong> section of the spreadsheet.
        </li>
      </ul>

      <p className="text-sm leading-relaxed">
        For window casing, <strong>4 windows</strong> can be covered by <strong>1 piece</strong>. The
        same metric can be used for the window stool.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the total count of windows.</li>
        <li>Divide by 4.</li>
        <li>
          Round up, then place the resulting total into the following 2 cells of the{" "}
          <strong>Trim</strong> section:
        </li>
      </ul>

      <CmsImage src="/images/cms/windows--docx_4.png" alt="Casing for Windows XL" />

      <h3 className="font-medium text-base text-dsld-text">Vents</h3>
      <p className="text-sm leading-relaxed">
        Louvered vents are called out on the elevations with their size. If the size is missing,
        measure it in AutoCAD.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the vents based on size.</li>
        <li>
          Place the count into the <strong>Fypon Vents and Brackets</strong> section of the
          spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/windows--docx_6.png" alt="Fypon Vents XL" />

      <h3 className="font-medium text-base text-dsld-text">Shutters</h3>
      <p className="text-sm leading-relaxed">
        Closed (fake) shutters and open shutters are treated the same.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Count 4 per shutter (e.g., a window with 2 shutters = a count of 8).
        </li>
        <li>
          Place the count into the <strong>Real Material Shutters</strong> section of the
          spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/windows--docx_8.png" alt="Real Material Shutters XL" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Divide the previous count by 8.</li>
        <li>
          Place the result into the <strong>Build Custom Wood Shutters per pair</strong> cell.
        </li>
      </ul>

      <CmsImage src="/images/cms/windows--docx_9.png" alt="Shutters pair XL" />

      <Note>
        If you add or change a window from the parts list, be sure to carry that update across all
        sections discussed in this section.
      </Note>
    </div>
  );
}
