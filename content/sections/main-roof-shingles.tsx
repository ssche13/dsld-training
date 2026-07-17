import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function MainRoofShingles() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Main Roof Shingles</h2>

      <p className="text-sm leading-relaxed">This quantity is calculated to determine the number of roof shingles needed to cover the entire roof. Refer to the PDF plan drawing of the roof plan that shows the pitches. You will use this page along with AutoCAD to calculate the square footage of each flat surface on the roof.</p>

      <h3 className="font-medium text-base text-dsld-text">Color-Coded Pitch Areas</h3>

      <p className="text-sm leading-relaxed">Use <strong>POLYLINE</strong> in a color of your choice to trace each roof pitch area.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>All items with the <strong>same pitch</strong> are given the <strong>same color</strong>.</li>

        <li>Once all pitches are drawn, adjust the position of each shape so there is a small gap between each pitch. <strong>This prevents overlapping lines from skewing area calculations and verifies that the pitches are whole shapes with no loose ends.</strong></li>

      </ul>

      <CmsImage src="/images/cms/main-roof-shingles--course_0.png" alt="Color-Coded Pitch Areas – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Calculation</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage</strong> of each color, or pitch.</li>

        <li>Round up, then place the resulting total in the <strong>Main Roof Shingles - Sq/Ft on FLAT</strong> section of the spreadsheet based on its corresponding pitch.</li>

      </ul>

      <CmsImage src="/images/cms/main-roof-shingles--course_1.png" alt="Calculation – example 1" />

      <Note>To check for accuracy, your total roof area should always be greater than or equal to the Net Free Vent Area Required by Roof.</Note>

      <p className="text-sm leading-relaxed">For pitches that are not already present in the spreadsheet, simply use this table to replace unused values:</p>

      <CmsImage src="/images/cms/main-roof-shingles--course_2.png" alt="Calculation – example 2" />
    </div>
  );
}
