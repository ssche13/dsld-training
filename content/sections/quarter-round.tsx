import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function QuarterRound() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Quarter Round</h2>

      <p className="text-base leading-relaxed">Quarter round is a small molding profile installed at the base of walls where the flooring meets the baseboard. It covers the expansion gap left for tile, hardwood, or laminate flooring.</p>

      <h3 className="font-medium text-lg text-dsld-text">Where Quarter Round Is Used</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Rooms with tile, hardwood, laminate, or vinyl plank flooring typically receive quarter round.</li>

        <li>Carpeted rooms usually do not require quarter round.</li>

        <li>Check the flooring plan to determine which rooms need it.</li>

      </ul>

      <h3 className="font-medium text-lg text-dsld-text">Calculation</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYLINE</strong> to trace a <strong><ColorWord c="yellow">yellow</ColorWord> </strong>line along the outside of sheetrock by using the Flooring construct you pulled in when setting up.</li>

        <li>Exclude doorways, cased openings, garages, tubs, showers, cabinets, and carpeted areas.</li>

        <li>Trace behind appliances.</li>

        <li><strong>Do not move these lines yet. </strong>Copy a set off to the side.</li>

      </ul>

      <CmsImage src="/images/cms/quarter-round--course_0.png" alt="Calculation – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of all <strong><ColorWord c="yellow">yellow</ColorWord></strong> lines you traced.</li>

        <li>Multiply by 1.1.</li>

        <li>Divide by 16.</li>

        <li>Round up, then place the resulting total into the <strong>Trim Punch</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/quarter-round--course_1.png" alt="Calculation – example 2" />
    </div>
  );
}
