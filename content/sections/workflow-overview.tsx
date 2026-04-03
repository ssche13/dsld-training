import Note from "@/components/callouts/Note";

export default function WorkflowOverview() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Estimating Workflow Overview</h2>

      <p className="text-sm leading-relaxed">
        Every estimate follows the same high-level workflow. Understanding each step will help you
        stay organized and avoid rework.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Step-by-Step Process</h3>

      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li><strong>Receive request</strong> &mdash; A new estimation request arrives via the Monday meeting or the Estimating Sheet on SharePoint.</li>
        <li><strong>Open the project in AutoCAD</strong> &mdash; Locate the correct plan file and load it into your AutoCAD workspace.</li>
        <li><strong>Draw lines &amp; gather data</strong> &mdash; Trace walls, rooflines, and other elements on the plan while recording measurements.</li>
        <li><strong>Fill out the estimating spreadsheet</strong> &mdash; Transfer all gathered quantities into the correct cells of the estimating spreadsheet.</li>
        <li><strong>Send to team leader for review</strong> &mdash; Once the spreadsheet is complete, submit it to your team leader for a quality check.</li>
        <li><strong>Submit redlines (if applicable)</strong> &mdash; Attach snippet of redline with an explanation and add to the Estimating Redline bucket in Teams.</li>
        <li><strong>Submit bluelines (if applicable)</strong> &mdash; Parts that can&apos;t be found in the parts list are highlighted in blue on the estimating spreadsheet and placed in the Parts Creation folder.</li>
        <li><strong>Coordinator uploads to NewStar</strong> &mdash; After approval, the estimating coordinator uploads the final estimate into the NewStar system.</li>
        <li><strong>Monitor plan</strong> &mdash; As elements are being built out in the field, check for any discrepancies on the plans.</li>
      </ol>

      <Note>
        Do not skip the review step. Every estimate must be checked by a team leader before it is
        uploaded to NewStar.
      </Note>
    </div>
  );
}
