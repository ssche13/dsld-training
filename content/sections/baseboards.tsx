import CmsImage from "@/components/CmsImage";

export default function Baseboards() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Baseboards</h2>

      <p className="text-sm leading-relaxed">Baseboards are installed along the bottom of interior walls to cover the joint between the wall surface and the floor. Nearly every finished room in the house receives baseboard trim.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> to trace a <strong>red </strong>line everywhere you did not trace in yellow for quarter round.</li>

        <li>Exclude doorways, cased openings, tubs, and showers.</li>

      </ul>

      <CmsImage src="/images/cms/baseboards--course_0.png" alt="Baseboards – example 1" />

      <p className="text-sm leading-relaxed">Copied off to the side, your CAD sketch should look like this:</p>

      <CmsImage src="/images/cms/baseboards--course_1.png" alt="Baseboards – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of both your <strong>red</strong> and <strong>yellow</strong> polylines.</li>

        <li>Multiply by 1.1.</li>

        <li>Divide by 16.</li>

        <li>Round up, then place your count in the <strong>Trim</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/baseboards--course_2.png" alt="Baseboards – example 3" />
    </div>
  );
}
