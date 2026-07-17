import CmsImage from "@/components/CmsImage";

export default function RoofArea() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Roof Area</h2>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> to trace a <strong>green </strong>line along the perimeter of the roof.</li>

      </ul>

      <CmsImage src="/images/cms/roof-area--course_0.png" alt="Roof Area – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage</strong> of the polyline.</li>

        <li>Round up, then place the resulting total into the <strong>Roof Area</strong> cell of the estimating spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/roof-area--course_1.png" alt="Roof Area – example 2" />
    </div>
  );
}
