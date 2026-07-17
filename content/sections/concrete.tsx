import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Concrete() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Concrete</h2>

      <p className="text-sm leading-relaxed">The square footage of <strong>porches</strong>, <strong>garages</strong>, and <strong>the</strong> <strong>living area</strong> are provided in the title section of your corresponding plan's PDF drawing. These values are used to calculate concrete quantities for the estimate.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Identify the <strong>square footage</strong> listed for <strong>porches</strong>, <strong>garages</strong>, and <strong>living area</strong>.</li>

        <li>Verify the values match what is shown on the floor plan dimensions.</li>

      </ul>

      <CmsImage src="/images/cms/concrete--course_0.png" alt="Concrete – example 1" />

      <p className="text-sm leading-relaxed">Transfer this information over to the appropriate cells in the <strong>Concrete</strong> section of estimating spreadsheet. Each area type has its own input field.</p>

      <CmsImage src="/images/cms/concrete--course_1.png" alt="Concrete – example 2" />

      <Note>Double-check that you are reading the correct square footage values from the PDF title section. Transposing porch and garage values is a common mistake that will throw off the concrete totals.</Note>
    </div>
  );
}
