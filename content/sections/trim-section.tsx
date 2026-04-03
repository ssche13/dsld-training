import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";


export default function TrimSection() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Trim — Cement Smooth &amp; Hardi Post</h2>

      <p className="text-sm leading-relaxed">
        This section covers the 5/4x4x12 Cement Smooth trim pieces and the Hardi Post Cap &amp; Base
        components used on exterior posts and columns.
      </p>

      <h3 className="font-medium text-base text-dsld-text">5/4x4x12 Cement Smooth Trim</h3>
      <p className="text-sm leading-relaxed">
        The counting method for 5/4x4x12 trim is the same as baseboard and crown &mdash; use the
        <strong> &ldquo;Group Lines by Boundary&rdquo;</strong> command inside a closed rectangle.
        The rectangle width for this trim is <strong>12&rsquo;</strong> (compared to 16&rsquo; for shelving).
      </p>

      <h4 className="font-medium text-sm text-dsld-text mt-2">Drawing the Lines</h4>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>In AutoCAD, use LINE to draw on the perimeter of windows, doors, and vents.</li>
        <li>For the <strong>sides</strong>: trace inside the trim.</li>
        <li>For the <strong>tops and bottoms</strong>: trace outside the trim.</li>
        <li>For windows with less than 6&quot; separation, treat them as one window.</li>
      </ul>

      <h4 className="font-medium text-sm text-dsld-text mt-2">Counting</h4>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Pull the lines out and rotate any vertical lines to horizontal.</li>
        <li>Place all lines inside a 12&rsquo;&times;15&rsquo; rectangle.</li>
        <li>Use <strong>&ldquo;Group Lines by Boundary&rdquo;</strong> (group lines in polygon) to count the lines in the rectangle.</li>
        <li>Add <strong>1</strong> for each inside corner.</li>
        <li>Add <strong>2</strong> for each outside corner.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/imaged.png" alt="Trim spreadsheet section" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Trim spreadsheet section</p>
      </div>

      <SpreadsheetRef section="Trim" cell="5/4x4x12 Cement Smooth" />

      <h3 className="font-medium text-base text-dsld-text">Hardi Post Cap &amp; Base</h3>
      <p className="text-sm leading-relaxed">
        Hardi Post Caps and Bases are decorative trim pieces installed at the top and bottom of
        exterior columns. Count each post that requires a cap and base from the elevation drawings
        and enter the total count in the spreadsheet.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/trim-section--docx_0.png" alt="Stone column reference" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Stone column reference</p>
      </div>

      <Note>
        The current spreadsheet image for Hardi Post Cap &amp; Base has the wrong cell circled. This
        will be updated in the next image revision.
      </Note>

      <SpreadsheetRef section="Trim" cell="Hardi Post Cap & Base" />
    </div>
  );
}
