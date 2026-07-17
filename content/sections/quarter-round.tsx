import CmsImage from "@/components/CmsImage";

export default function QuarterRound() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Quarter Round</h2>

      <p className="text-sm leading-relaxed">Quarter round is a small molding profile installed at the base of walls where the flooring meets the baseboard. It covers the expansion gap left for tile, hardwood, or laminate flooring.</p>

      <h3 className="font-medium text-base text-dsld-text">Where Quarter Round Is Used</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Rooms with tile, hardwood, laminate, or vinyl plank flooring typically receive quarter round.</li>

        <li>Carpeted rooms usually do not require quarter round.</li>

        <li>Check the flooring plan to determine which rooms need it.</li>

      </ul>

      <h3 className="font-medium text-base text-dsld-text">Calculation</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>POLYLINE</strong> to trace a <strong>yellow </strong>line along the outside of sheetrock by using the Flooring construct you pulled in when setting up.</li>

        <li>Exclude doorways, cased openings, garages, tubs, showers, cabinets, and carpeted areas.</li>

        <li>Trace behind appliances.</li>

        <li><strong>Do not move these lines yet. </strong>Copy a set off to the side.</li>

      </ul>

      <CmsImage src="/images/cms/quarter-round--course_0.png" alt="Calculation – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of all <strong>yellow</strong> lines you traced.</li>

        <li>Multiply by 1.1.</li>

        <li>Divide by 16.</li>

        <li>Round up, then place the resulting total into the <strong>Trim Punch</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/quarter-round--course_1.png" alt="Calculation – example 2" />
    </div>
  );
}
