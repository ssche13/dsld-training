import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function PlanName() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Plan Identification</h2>

      <p className="text-sm leading-relaxed">The plan <strong>name</strong>, <strong>letter</strong>, and <strong>number</strong> will be found in the title section of the corresponding plan's PDF drawing. As mentioned before, most of these PDF drawings are in the Shared Files folder under<strong> House Plans</strong>.</p>

      <p className="text-sm leading-relaxed"><strong>Identifying the Plan Information</strong></p>

      <p className="text-sm leading-relaxed">The title section of each PDF drawing contains the plan name, elevation letter, and version number. For example, a plan labeled <strong>FALKNER-A/G/S-3</strong>, where:</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li><strong>FALKNER</strong> — the plan name.</li>

        <li><strong>A/B/G/H</strong> — the elevation letters, representing different configurations of the same plan. A/G/S plans share the same floor plan and roof layout but use different exterior siding materials. A/B/C plans share the same floor plan but use different roof and exterior layouts.</li>

        <li><strong>3</strong> — the version/revision number of the plan. When updates are made to a plan, this number increments.</li>

      </ul>

      <CmsImage src="/images/cms/plan-name--course_0.png" alt="Plan Identification – example 1" />

      <p className="text-sm leading-relaxed"><strong>Entering into the Estimating Spreadsheet</strong></p>

      <p className="text-sm leading-relaxed">Transfer this information over to the two appropriate sections in the estimating spreadsheet:<strong> Plan-A-II</strong> and <strong>Plan2</strong>. Once inserted, this information should auto-populate in columns <strong>I</strong> and <strong>J</strong> throughout the entire spreadsheet.</p>

      <CmsImage src="/images/cms/plan-name--course_1.png" alt="Plan Identification – example 2" />

      <Note>Make sure both the Plan-A-II and Plan2 sections are filled in. If either is missing, columns I and J will not auto-populate correctly throughout the spreadsheet.</Note>
    </div>
  );
}
