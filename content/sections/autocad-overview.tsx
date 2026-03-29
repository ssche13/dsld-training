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
        <li>The organization structure of your estimate should mimic what is depicted in the image below.</li>
        <li>Color-code lines according to the DSLD standard color scheme.</li>
        <li>Keep your PDF plan drawing as a reference when working in AutoCAD at all times.</li>
      </ul>

      <ImagePlaceholder label="AutoCAD Project Organization Layout" />

      <h3 className="font-medium text-base text-dsld-text">Common Commands</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>PLINE</strong> — A connected sequence of line segments created as a single object</li>
        <li><strong>LINE</strong> — A single straight distance between 2 points</li>
        <li><strong>POLYAREA</strong> — Calculates an enclosed area from a polyline</li>
        <li><strong>TLEN</strong> — Calculates the linear feet of a line</li>
        <li><strong>HATCH</strong> — Fills enclosed regions with lines for area calculations</li>
        <li><strong>ROTATE</strong> — Rotates lines or shapes to any desired orientation</li>
        <li><strong>X-CLIP</strong> — Allows you to crop a reference</li>
        <li><strong>X-LINE</strong> — Creates a line of infinite length</li>
        <li><strong>LAYOFF</strong> — Hides selected elements from view within your drawing</li>
        <li><strong>F3</strong> — Toggles SNAP on and off</li>
        <li><strong>F8</strong> — Toggles ORTHO on and off</li>
      </ul>

      <Note>
        Always verify your drawing units are set to feet and inches before starting any measurements.
      </Note>
    </div>
  );
}
