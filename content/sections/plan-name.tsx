import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";


export default function PlanName() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Plan Name, Letter, and Family</h2>

      <p className="text-sm leading-relaxed">
        The plan name, letter, and family will be found in the title section of the corresponding
        plan&apos;s PDF drawing. These PDF drawings are located in the Shared Files folder under
        <strong> House Plans</strong>.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Identifying the Plan Information</h3>
      <p className="text-sm leading-relaxed">
        The title section of each PDF drawing contains the plan name, elevation letter, and version
        number. For example, a plan might be labeled <strong>ABBEY-A/G/S-4</strong>, where:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>ABBEY</strong> — the plan name.</li>
        <li><strong>A/G/S</strong> — the elevation letters, representing different siding configurations of the same plan. A/G/S plans share the same floor plan and roof layout but use different exterior siding materials.</li>
        <li><strong>4</strong> — the version/revision number of the plan. When updates are made to a plan, this number increments.</li>
      </ul>

      <Note>
        Elevation letters can mean different things depending on context. <strong>A/G/S</strong> elevation
        letters indicate different siding configurations — same floor plan and roof layout, different
        exterior siding materials. <strong>A/B</strong> elevation letters indicate different roof and
        exterior layouts that share the same interior layout.
      </Note>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/plan-name-label.jpg" alt="PDF drawing title section showing ABBEY-A/G/S-4 plan name, elevation letters, and version number" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">PDF drawing title section showing plan name, letter, and version number</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Entering into the Estimating Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Transfer this information over to the two appropriate sections in the estimating spreadsheet:
        <strong> Plan-A-II</strong> and <strong>Plan2</strong>. Once inserted, this information should
        auto-populate in columns <strong>I</strong> and <strong>J</strong> throughout the entire
        spreadsheet.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/plan-spreadsheet-header.jpg" alt="Estimating spreadsheet showing Plan-A-II and Plan2 header sections" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Estimating spreadsheet Plan-A-II and Plan2 sections</p>
      </div>

      <SpreadsheetRef section="Plan-A-II" cell="Plan Name / Letter / Family" />
      <SpreadsheetRef section="Plan2" cell="Plan Name / Letter / Family" />

      <Note>
        Make sure both the Plan-A-II and Plan2 sections are filled in. If either is missing, columns
        I and J will not auto-populate correctly throughout the spreadsheet.
      </Note>
    </div>
  );
}
