import Note from "@/components/callouts/Note";
import Tip from "@/components/callouts/Tip";

export default function GatheringInfo() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Gathering Information</h2>

      <p className="text-sm leading-relaxed">
        Before you begin estimating, you need to set up both AutoCAD and the estimating spreadsheet.
        This section walks through pulling the right drawings and preparing your workspace.
      </p>

      <h3 className="font-medium text-base text-dsld-text">AutoCAD Setup</h3>
      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Open the project in AutoCAD.</li>
        <li>Select the correct plan from the project file list.</li>
        <li>Add the construct to your drawing session.</li>
        <li>Set up the drawing template with the standard DSLD layers.</li>
      </ol>

      <h3 className="font-medium text-base text-dsld-text">Drawings to Pull In</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Cabinets</li>
        <li>Elevations</li>
        <li>Exterior Walls</li>
        <li>Interior Walls</li>
        <li>Flooring</li>
        <li>Foundation</li>
        <li>Optional Fireplace</li>
        <li>Roof Framing</li>
        <li>Roof Parent</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Estimating Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Open the estimating spreadsheet from the Shared-Admin Drive. Use <strong>Save As</strong> and
        name the file using the standard plan name format so it can be identified later.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Elevation Correlations</h3>
      <p className="text-sm leading-relaxed">
        Elevation letters map across plan variants. Use this table to match elevations correctly:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>A / G / S</strong></li>
        <li><strong>B / H / T</strong></li>
        <li><strong>C / I / U</strong></li>
        <li><strong>D / J / V</strong></li>
        <li><strong>E / K / W</strong></li>
        <li><strong>F / L / X</strong></li>
      </ul>

      <Tip>
        Always double-check which elevation letter you are working with before pulling drawings.
        Using the wrong elevation will invalidate the entire estimate.
      </Tip>
    </div>
  );
}
