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
        To count the number of 5/4x4x12 Cement Smooth trim pieces, draw 12&rsquo;&times;15&rsquo;
        rectangles on the elevation drawings in AutoCAD. Each rectangle represents one trim piece.
        Count the total number of rectangles needed to cover all trim locations on the elevations.
      </p>

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

      <Note>
        The current spreadsheet image for Hardi Post Cap &amp; Base has the wrong cell circled. This
        will be updated in the next image revision.
      </Note>

      <SpreadsheetRef section="Trim" cell="Hardi Post Cap & Base" />
    </div>
  );
}
