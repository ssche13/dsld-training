import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function AutocadOverview() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">AutoCAD Overview</h2>

      <p className="text-base leading-relaxed">AutoCAD is our primary tool for measuring and tracing plan elements. Keeping your drawings organized is critical — a messy workspace leads to missed measurements and errors in the spreadsheet.</p>

      <h3 className="font-medium text-lg text-dsld-text">Organizing Your Workspace</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>The organization structure of your estimate should mimic what is depicted in the image below.</li>

        <li>Color-code lines according to the DSLD standard color scheme instructed in the course.</li>

        <li>Keep your PDF plan drawing as a reference when working in AutoCAD <strong>at all times.</strong></li>

      </ul>

      <CmsImage src="/images/cms/autocad-overview--course_0.png" alt="Organizing Your Workspace – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Common Commands</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>PLINE</strong> — A connected sequence of line segments created as a single object</li>

        <li><strong>LINE</strong> — A single straight distance between 2 points</li>

        <li><strong>APPLOAD</strong> — A pop-up window for you to add POLYAREA and TLEN as commands for calculations in your takeoff</li>

        <li><strong>POLYAREA</strong> — Calculates the square footage of an enclosed area from a polyline</li>

        <li><strong>TLEN</strong> — Calculates the linear footage of a line</li>

        <li><strong>HATCH</strong> — Fills enclosed regions with lines at a desired distance for area calculations</li>

        <li><strong>ROTATE</strong> — Rotates lines or shapes to any desired orientation</li>

        <li><strong>X-CLIP</strong> — Allows you to crop a reference</li>

        <li><strong>X-LINE</strong> — Creates a line of infinite length</li>

        <li><strong>LAYOFF</strong> — Hides selected elements from view within your drawing</li>

        <li><strong>F3</strong> — Toggles SNAP on and off</li>

        <li><strong>F8</strong> — Toggles ORTHO on and off</li>

      </ul>

      <Note>Always verify your drawing units are set to feet and inches before starting any measurements.</Note>
    </div>
  );
}
