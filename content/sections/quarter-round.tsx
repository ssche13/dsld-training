import CmsImage from "@/components/CmsImage";

export default function QuarterRound() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Quarter Round</h2>

      <p className="text-sm leading-relaxed">
        Quarter round is a small molding profile installed at the base of walls where the flooring
        meets the baseboard. It covers the expansion gap left for tile, hardwood, or laminate flooring.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Where Quarter Round Is Used</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Rooms with tile, hardwood, laminate, or vinyl plank flooring typically receive quarter round.</li>
        <li>Carpeted rooms usually do not require quarter round.</li>
        <li>Check the flooring plan to determine which rooms need it.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYLINE</strong> to trace <strong>yellow lines</strong> along the outside of sheetrock, or <strong>everywhere that you see flooring.</strong> (You can use AutoCAD for this. Note at the beginning when you pulled in the Flooring construct into the drawing.)</li>
        <li>Exclude doorways, cased openings, garages, tubs, showers, cabinets, and carpeted areas.</li>
        <li><strong>Do not move these lines yet.</strong></li>
      </ul>

      <CmsImage src="/images/cms/quarter-round--docx_0.png" alt="Qtr Rnd CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of all <strong>yellow lines</strong> you traced.</li>
        <li>Multiply by 1.1.</li>
        <li>Divide by 16.</li>
        <li>Round up, then place the resulting total into the <strong>Trim Punch</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/quarter-round--quarter-round_0.png" alt="Qtr Rnd XL" />
    </div>
  );
}
