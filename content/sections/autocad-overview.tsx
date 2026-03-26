import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function AutocadOverview() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">AutoCAD Overview</h2>

      <p className="text-sm leading-relaxed">
        AutoCAD is the primary tool for measuring and tracing plan elements. Keeping your drawings
        organized is critical — a messy workspace leads to missed measurements and errors in the
        spreadsheet.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Organizing Your Workspace</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the correct layer for each element type (walls, roof, foundation, etc.).</li>
        <li>Color-code polylines according to the DSLD standard layer scheme.</li>
        <li>Keep reference drawings (elevations, cabinets) off to the side of your main floor plan.</li>
        <li>Lock layers you are not actively editing to prevent accidental changes.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Common Commands</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>PLINE</strong> — Draw polylines for tracing walls and outlines.</li>
        <li><strong>AREA</strong> — Calculate enclosed area from a polyline.</li>
        <li><strong>DIST</strong> — Measure distance between two points.</li>
        <li><strong>HATCH</strong> — Fill enclosed regions for area calculations.</li>
        <li><strong>LAYER</strong> — Switch between drawing layers.</li>
      </ul>

      <ImagePlaceholder label="AutoCAD project organization layout" />

      <Note>
        Always verify your drawing units are set to feet and inches before starting any measurements.
      </Note>
    </div>
  );
}
