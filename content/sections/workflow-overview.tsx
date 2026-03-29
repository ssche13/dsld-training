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
        <li><strong>Receive request</strong> — A new estimation request arrives via the Monday meeting or the Estimating Sheet on SharePoint.</li>
        <li><strong>Open the project in AutoCAD</strong> — Locate the correct plan file and load it into your AutoCAD workspace.</li>
        <li><strong>Draw lines &amp; gather data</strong> — Trace walls, rooflines, and other elements on the plan while recording measurements.</li>
        <li><strong>Fill out the estimating spreadsheet</strong> — Transfer all gathered quantities into the correct cells of the estimating spreadsheet.</li>
        <li><strong>Send to team leader for review</strong> — Once the spreadsheet is complete, submit it to your team leader for a quality check.</li>
        <li><strong>Coordinator uploads to NewStar</strong> — After approval, the estimating coordinator uploads the final estimate into the NewStar system.</li>
      </ol>

      <Note>
        Do not skip the review step. Every estimate must be checked by a team leader before it is
        uploaded to NewStar.
      </Note>
    </div>
  );
}
