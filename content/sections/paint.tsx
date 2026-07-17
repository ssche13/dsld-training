import CmsImage from "@/components/CmsImage";

export default function Paint() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Paint</h2>

      <p className="text-sm leading-relaxed">Paint values drive paint material quantities and labor estimates. You will use the<strong> floor plan</strong> in the PDF for this section.</p>

      <h3 className="font-medium text-base text-dsld-text">Garage Door</h3>

      <p className="text-sm leading-relaxed">Paint for garage doors works off a <strong>lump sum total.</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count <strong>1</strong> for 1 garage door.</li>

        <li>Count <strong>1</strong> for two 9' garage doors.</li>

        <li>Multiples of anything larger will each count as their own.</li>

        <li>Get the lump sum based on what you see in the PDF and enter the number into the appropriate cell of the <strong>Plumbing, Elec. HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/paint--course_0.png" alt="Garage Door – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Exterior Brick</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Enter the <strong>total square footage</strong> of brick you calculated from the <strong>Exterior Brick</strong> section of the spreadsheet into the appropriate cell of the <strong>Plumbing, Elec. HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/paint--course_1.png" alt="Exterior Brick – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Trim Nails and Trim Labor</h3>

      <p className="text-sm leading-relaxed">These are simple count items.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Trim Nails are always allotted an allowance of <strong>1</strong> and entered into the <strong>Plumbing, Elec. HVAC Top Out</strong> section of the spreadsheet. Artist series will get <strong>2</strong>.</li>

        <li>Trim Labor is a built-in cost on standard homes but counts as <strong>1</strong> for artist series homes.</li>

      </ul>

      <CmsImage src="/images/cms/paint--course_2.png" alt="Trim Nails and Trim Labor – example 1" />
    </div>
  );
}
