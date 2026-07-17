import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function RoofArea() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Roof Area</h2>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYLINE</strong> to trace a <strong><ColorWord c="green">green</ColorWord> </strong>line along the perimeter of the roof.</li>

      </ul>

      <CmsImage src="/images/cms/roof-area--course_0.png" alt="Roof Area – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage</strong> of the polyline.</li>

        <li>Round up, then place the resulting total into the <strong>Roof Area</strong> cell of the estimating spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/roof-area--course_1.png" alt="Roof Area – example 2" />
    </div>
  );
}
