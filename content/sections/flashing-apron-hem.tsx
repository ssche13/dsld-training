import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function FlashingApronHem() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Gutter Apron &amp; Hem Flashing</h2>

      <Note>These types of flashing will not be taken off in Florida, North Alabama, or Tennessee.</Note>

      <h3 className="font-medium text-base text-dsld-text">Gutter Apron Flashing</h3>

      <p className="text-sm leading-relaxed">Gutter apron flashing is a pre-bent metal strip installed where the roof meets a wall at an obtuse angle. You will usually find this type of flashing on <strong>dormer fronts</strong> and <strong>clipped gables.</strong></p>

      <CmsImage src="/images/cms/flashing-apron-hem--course_0.png" alt="Gutter Apron Flashing – example 1" />

      <CmsImage src="/images/cms/flashing-apron-hem--course_1.png" alt="Gutter Apron Flashing – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Identify any dormers or clipped gables from the elevations page.</li>

        <li>For <strong>dormers</strong>, use <strong>LINE</strong> to trace where the <strong>front</strong> wall of the dormer meets the roof from end to end.</li>

        <li>For <strong>clipped gables</strong>, use <strong>LINE</strong> to trace where the front cladding under the gable meets the clipped roof from end to end.</li>

        <li>Use <strong>TLEN</strong> to get the linear footage of each run. If a run is greater than 10', a 1' overlap for each side would be needed. (e.g. You measured 30' for 1 dormer run. 2' of overlap would be needed + the full 30' run.)</li>

        <li>Add each linear footage together to get the<strong> total linear footage</strong>.</li>

        <li>Divide by 10.</li>

        <li>Round up, then place the result into the appropriate cell in the <strong>Standard Shingles and Flashing</strong> section of the respective spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/flashing-apron-hem--course_2.png" alt="Gutter Apron Flashing – example 3" />

      <CmsImage src="/images/cms/flashing-apron-hem--course_3.png" alt="Gutter Apron Flashing – example 4" />

      <h3 className="font-medium text-base text-dsld-text">Hem Angle Flashing</h3>

      <p className="text-sm leading-relaxed">Hem Angle Flashing is installed where the roof meets a wall at a 90-degree angle. You will find this type of flashing on the <strong>same components</strong> as the gutter apron flashing.</p>

      <CmsImage src="/images/cms/flashing-apron-hem--course_4.png" alt="Hem Angle Flashing – example 1" />

      <CmsImage src="/images/cms/flashing-apron-hem--course_5.png" alt="Hem Angle Flashing – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Identify any dormers or clipped gables from the elevations page.</li>

        <li>For dormers, use <strong>LINE</strong> to trace where the <strong>side</strong> wall of the dormer meets the roof from end to end.</li>

        <li>If a clipped gable is present, add 2' per side.</li>

        <li>Use <strong>TLEN</strong> to get the linear footage of each run. If a run is greater than 10', a 1' overlap is needed for each side.</li>

        <li>Add each linear footage together to get the<strong> total linear footage</strong>.</li>

        <li>Divide by 10.</li>

        <li>Round up, then place the result into the appropriate cell in the <strong>Standard Shingles and Flashing</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/flashing-apron-hem--course_6.png" alt="Hem Angle Flashing – example 3" />

      <CmsImage src="/images/cms/flashing-apron-hem--course_7.png" alt="Hem Angle Flashing – example 4" />

      <Note>Gutter apron and hem angle are both sold in 10-foot sections. Always round up after dividing — partial pieces cannot be ordered.</Note>
    </div>
  );
}
