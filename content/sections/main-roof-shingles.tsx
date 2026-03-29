import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";

export default function MainRoofShingles() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Main Roof Shingles</h2>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image5.png" alt="Roof plan snippet showing pitches from PDF drawing" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Roof plan showing pitches from PDF drawing</p>
      </div>

      <p className="text-sm leading-relaxed">
        Refer to the picture of the roof plan showing the pitches.
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Color-Coded Pitch Areas</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          All items with the <strong>same pitch</strong> are given the <strong>same color</strong>.
        </li>
        <li>
          This is done to calculate the square footage of the flat surface of the roof.
        </li>
        <li>
          Use a <strong>polyline</strong> to trace each roof pitch area.
        </li>
        <li>
          Place the <strong>total square feet</strong> for each color in the first column based on
          the correct pitch listed in the second column.
        </li>
      </ul>

      <Note>
        Pitches should be separated by a color of your choice — pick a distinct color for each
        unique pitch so they are easy to tell apart.
      </Note>

      <p className="text-sm leading-relaxed">
        Once all pitches are drawn, <strong>adjust the position</strong> of each shape so there is a
        small gap between each pitch shape. The reason for separating them is to make sure all areas
        are fully closed with no loose ends — if shapes aren&apos;t closed, the area calculation will be
        incorrect. This also prevents overlapping lines from skewing area calculations.
      </p>

      <Tip>
        Each unique pitch gets its own color. Grouping by color makes it easy to total the flat
        square footage per pitch for the spreadsheet.
      </Tip>

      <SpreadsheetRef section="Roof" cell="Shingles by Pitch" />

      <ImagePlaceholder label="Roof plan with pitch areas color-coded" />
    </div>
  );
}
