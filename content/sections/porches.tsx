import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Porches() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Porches</h2>

      <p className="text-sm leading-relaxed">Porch estimation covers both covered and uncovered porches. Covered porches have a roof structure overhead — include the front entry, rear covered patio, and any side porches. Uncovered porches (patios) are concrete slabs without a roof structure. The key measurement is the total square footage of each porch type, which drives the concrete, framing, and finish material quantities.</p>

      <Note>Porches do not need to be taken off in Florida, North Alabama, South Alabama, or Tennessee.</Note>

      <h3 className="font-medium text-base text-dsld-text">Louisiana and Texas Plans</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> to trace the porches, then pull them off to the side.</li>

        <li>Add hatch lines at <strong>16'' O.C.</strong></li>

        <li>Explode, then pull the hatch lines out.</li>

        <li>
          Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the hatch lines and insert them into the <strong>1x4 on porches</strong> cell in the spreadsheet.
          <CmsImage src="/images/cms/porches--course_0.png" alt="Louisiana and Texas Plans – example 1" />
        </li>

        <li>In the empty porch outlines, draw <strong>4x8 boxes</strong> using the <strong>POLYLINE</strong> command to fill in the porches you traced. Consider the waste factor that is left over from boxes that exceed the area of the traced porches so that you are not over-estimating.</li>

      </ul>

      <CmsImage src="/images/cms/porches--course_1.png" alt="Louisiana and Texas Plans – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count the boxes, then place that count in <strong>4x8-1/4'' Beaded Cement Soffit</strong> cell of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/porches--course_2.png" alt="Louisiana and Texas Plans – example 3" />

      <h3 className="font-medium text-base text-dsld-text">Mississippi Plans</h3>

      <p className="text-sm leading-relaxed">Porches are taken off by calculating the total linear footage of the porch interiors.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the porches you traced.</li>

        <li>Round up and place the resulting total into the following cell:</li>

      </ul>

      <CmsImage src="/images/cms/porches--course_3.png" alt="Mississippi Plans – example 1" />
    </div>
  );
}
