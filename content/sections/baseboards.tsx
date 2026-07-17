import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function Baseboards() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Baseboards</h2>

      <p className="text-base leading-relaxed">Baseboards are installed along the bottom of interior walls to cover the joint between the wall surface and the floor. Nearly every finished room in the house receives baseboard trim.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYLINE</strong> to trace a <strong><ColorWord c="red">red</ColorWord> </strong>line everywhere you did not trace in <ColorWord c="yellow">yellow</ColorWord> for quarter round.</li>

        <li>Exclude doorways, cased openings, tubs, and showers.</li>

      </ul>

      <CmsImage src="/images/cms/baseboards--course_0.png" alt="Baseboards – example 1" />

      <p className="text-base leading-relaxed">Copied off to the side, your CAD sketch should look like this:</p>

      <CmsImage src="/images/cms/baseboards--course_1.png" alt="Baseboards – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of both your <strong><ColorWord c="red">red</ColorWord></strong> and <strong><ColorWord c="yellow">yellow</ColorWord></strong> polylines.</li>

        <li>Multiply by 1.1.</li>

        <li>Divide by 16.</li>

        <li>Round up, then place your count in the <strong>Trim</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/baseboards--course_2.png" alt="Baseboards – example 3" />
    </div>
  );
}
