import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function MainRoofShingles() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Main Roof Shingles</h2>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/main-roof-shingles--docx_0.png" alt="Pitch Examples for Plans" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Pitch Examples for Plans</p>
      </div>

      <p className="text-sm leading-relaxed">
        Refer to the picture of the roof plan showing the pitches. You will use this page in your
        PDF plan drawing along with AutoCAD to calculate the square footage of the flat surface of the roof.
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Color-Coded Pitch Areas</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYLINE</strong> in a color of your choice to trace each roof pitch area.</li>
        <li>All items with the <strong>same pitch</strong> are given the <strong>same color</strong>.</li>
        <li>
          Once all pitches are drawn, adjust the position of each shape so there is a small gap
          between each pitch shape. This prevents overlapping lines from skewing area calculations
          and verifies that the pitches are whole shapes with no loose ends.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/main-roof-shingles--main-roof-shingles_0.png" alt="Main Roof Shingles CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Main Roof Shingles CAD</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYAREA</strong> to get the total square footage of each color, or pitch.</li>
        <li>Round up, then place the resulting total in the <strong>Main Roof Shingles - Sq/Ft on FLAT</strong> section of the spreadsheet based on its corresponding pitch.</li>
      </ul>

      <Note>
        Pitches should be separated by a color of your choice &mdash; pick a distinct color for each
        unique pitch so they are easy to tell apart.
      </Note>

      <ImagePlaceholder label="Main Roof Shingles XL" />

      <Note>
        To check for accuracy, your total roof area should always be greater than or equal to the
        Net Free Vent Area Required by Roof.
      </Note>
    </div>
  );
}
