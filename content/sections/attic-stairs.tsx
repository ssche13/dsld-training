import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function AtticStairs() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Attic Stairs</h2>

      <p className="text-sm leading-relaxed">
        Attic stairs (also called attic access or pull-down stairs) provide access to the
        attic space. They are counted from the floor plan and typically appear as a dashed
        rectangle labeled with the attic stair callout.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Locating Attic Stairs</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Open the floor plan in AutoCAD or the PDF drawing.</li>
        <li>Look for dashed rectangles typically located in hallways, closets, or garage ceilings.</li>
        <li>The callout will usually indicate &quot;attic access&quot; or show the stair symbol.</li>
        <li>Count the total number of attic stair locations on the plan.</li>
      </ul>

      <ImagePlaceholder label="Attic stairs location on floor plan" />

      <Note>
        Most plans have one attic stair, but larger homes or homes with detached garages may
        have two or more. Always verify the count against the floor plan.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Entering into the Estimating Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Enter the count of attic stairs in the designated cell in the Trim section of the
        estimating spreadsheet.
      </p>

      <ImagePlaceholder label="Attic Stairs spreadsheet input location" />

      <SpreadsheetRef section="Trim" cell="Attic Stairs" />
    </div>
  );
}
