import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function RidgeVents() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Ridge &amp; Off Ridge Vents</h2>

      <p className="text-base leading-relaxed">Vent counts and lengths are found on the <strong>elevation page</strong> of the PDF.</p>

      <CmsImage src="/images/cms/ridge-vents--course_0.png" alt="Ridge &amp; Off Ridge Vents – example 1" />

      <CmsImage src="/images/cms/ridge-vents--course_1.png" alt="Ridge &amp; Off Ridge Vents – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Off Ridge Vents</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count the total number of off ridge vents shown on the elevation page.</li>

        <li>Place the total count in the <strong>Off Ridge Vents</strong> cell of the spreadsheet.</li>

      </ul>

      <Note>Off-Ridge Vents are counted as a pair.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Ridge Vents</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Add the<strong> total linear footage</strong> of all ridge vents called out on the elevations page.</li>

        <li>Divide the total linear length by 4.</li>

        <li>Place the result in the <strong>Ridge Vents</strong> cell of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/ridge-vents--course_2.png" alt="Ridge Vents – example 1" />

      <Note>Pay close attention to the elevations to ensure that the same ridge vent is not calculated twice.</Note>
    </div>
  );
}
