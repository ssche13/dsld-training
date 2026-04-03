import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";


export default function Concrete() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Concrete</h2>

      <p className="text-sm leading-relaxed">
        The square feet of porches, garages, and living area are provided in the title section of the
        corresponding plan&apos;s PDF drawing. These values are used to calculate concrete quantities
        for the estimate.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Open the plan&apos;s PDF drawing and locate the title section.</li>
        <li>Identify the square footage listed for <strong>porches</strong>, <strong>garages</strong>, and <strong>living area</strong>.</li>
        <li>Verify the values match what is shown on the floor plan dimensions.</li>
      </ul>

      <CmsImage src="/images/cms/concrete--concrete_0.png" alt="Concrete - Plan Info" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/sq-footage-pdf.jpg" alt="PDF drawing title section showing porch, garage, and living area square footage" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">PDF drawing title section with porch, garage, and living area square footage</p>
      </div>

      <p className="text-sm leading-relaxed">
        Transfer this information over to the appropriate section in the estimating spreadsheet. Each
        area type (porch, garage, living) has its own input field in the concrete section.
      </p>

      <CmsImage src="/images/cms/concrete--concrete_1.png" alt="Concrete - Given Info from Plans" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/concrete-spreadsheet.jpg" alt="Estimating spreadsheet concrete section input location" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Estimating spreadsheet concrete section input fields</p>
      </div>

      <SpreadsheetRef section="Concrete" cell="Porch SF" />
      <SpreadsheetRef section="Concrete" cell="Garage SF" />
      <SpreadsheetRef section="Concrete" cell="Living Area SF" />

      <Note>
        Double-check that you are reading the correct square footage values from the PDF title
        section. Transposing porch and garage values is a common mistake that will throw off the
        concrete totals.
      </Note>
    </div>
  );
}
