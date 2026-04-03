import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function Vents() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Vents</h2>

      <p className="text-sm leading-relaxed">
        Vents include all exterior ventilation openings on the home &mdash; gable vents, dryer vents,
        exhaust vents, and any other openings called out on the plan. These are counted from the
        elevations and floor plans.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Types of Vents</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>Gable vents</strong> &mdash; Located in gable ends for attic ventilation.</li>
        <li><strong>Dryer vents</strong> &mdash; Exterior termination for dryer exhaust.</li>
        <li><strong>Exhaust/bath vents</strong> &mdash; Roof or wall-mounted for bathroom and kitchen exhaust fans.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count each vent type from the elevations and floor plan.</li>
        <li>Place the count into the corresponding cell of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Vents XL" />

      <Note>
        Make sure to check all four elevations for vents &mdash; they are easy to miss on side and rear views.
      </Note>
    </div>
  );
}
