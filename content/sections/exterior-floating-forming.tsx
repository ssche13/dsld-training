import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function ExteriorFloatingForming() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Exterior and Floating Forming</h2>

      <p className="text-sm leading-relaxed">This section measures two forming values: the <strong>exterior forming perimeter</strong> and the <strong>floating (interior) forming</strong>. Exterior forming is a temporary formwork on the perimeter to shape poured concrete. Floating forming is a technique where formwork “floats” or moves continuously on top of a soft surface.</p>

      <Note>Exterior and floating forming is only taken off for plans built in Louisiana and Texas.</Note>

      <CmsImage src="/images/cms/exterior-floating-forming--course_0.png" alt="Exterior &amp; Floating Forming – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Exterior Forming</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> to trace a <strong>red</strong> line along the <strong>outside perimeter</strong> of the foundation plan.</li>

        <li>Include the exterior outline of porches.</li>

        <li>Include the garage opening.</li>

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the <strong>red</strong> lines.</li>

        <li>Place the resulting total in the <strong>Exterior Forming</strong> cell under the Concrete header.</li>

      </ul>

      <h3 className="font-medium text-base text-dsld-text">Floating Forming</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> to trace a <strong>yellow</strong> line along <strong>interior porch walls</strong>.</li>

        <li>Include walls that border the garage and interior of the home.</li>

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the <strong>yellow</strong> lines.</li>

        <li>Round up, then place the resulting total in the <strong>Floating Forming</strong> cell under the Concrete header.</li>

      </ul>

      <CmsImage src="/images/cms/exterior-floating-forming--course_1.png" alt="Floating Forming – example 1" />
    </div>
  );
}
