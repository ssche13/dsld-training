import ColorSwatch from "@/components/ColorSwatch";
import CmsImage from "@/components/CmsImage";


export default function Baseboards() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Baseboards</h2>

      <p className="text-sm leading-relaxed">
        Baseboards are installed along the bottom of interior walls to cover the joint between the
        wall surface and the floor. Nearly every finished room in the house receives baseboard trim.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Measuring Baseboards</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYLINE</strong> to trace a <ColorSwatch color="red" /> <strong>red line</strong> everywhere you did not trace in yellow for quarter round.</li>
        <li>Exclude doorways, cased openings, tubs, and showers.</li>
      </ul>

      <CmsImage src="/images/cms/baseboards--docx_0.png" alt="Baseboards CAD tracing" />
      <CmsImage src="/images/cms/baseboards--docx_1.png" alt="Baseboards CAD sketch" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the total linear footage of both your <ColorSwatch color="red" /> red and <ColorSwatch color="yellow" /> yellow polylines.</li>
        <li>Multiply by 1.1.</li>
        <li>Divide by 16.</li>
        <li>Round up, then place your count in the <strong>Trim</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/baseboards--baseboards_0.png" alt="Baseboards XL" />
    </div>
  );
}
