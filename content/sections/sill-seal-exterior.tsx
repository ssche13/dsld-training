import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function SillSealExterior() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Sill Seal Exterior</h2>

      <p className="text-sm leading-relaxed">The sill seal measurement captures the <strong>total exterior perimeter</strong> of the foundation, including garage walls that interface with the home interior. Sill sealer acts as a moisture barrier to prevent wood-rot and reduce air leakage between the foundation wall and sill plate. This quantity feeds directly into the Wall Takeoffs section of the estimating spreadsheet.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> to trace a <strong>red </strong>line on the exterior walls of the foundation plan.</li>

        <li>Include garage walls that meet the interior of the home.</li>

        <li>Exclude porches and garage doors from this trace.</li>

      </ul>

      <CmsImage src="/images/cms/sill-seal-exterior--course_0.png" alt="Sill Seal Exterior – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the <strong>red</strong> lines.</li>

        <li>Round up, then enter the resulting total into the <strong>Exterior Perimeter (Including Garage Wall) Seal</strong> cell of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/sill-seal-exterior--course_1.png" alt="Sill Seal Exterior – example 2" />

      <Note>Double-check that the interior garage wall segments are included in your trace.</Note>
    </div>
  );
}
