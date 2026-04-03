import Note from "@/components/callouts/Note";

export default function FlashingApronHem() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Gutter Apron &amp; Hem Flashing
      </h2>

      <h3 className="font-medium text-base text-dsld-text">Gutter Apron Flashing</h3>

      <p className="text-sm leading-relaxed">
        Gutter Apron Flashing is a pre-bent metal strip installed where the roof meets a wall at an
        <strong> obtuse angle</strong>. You will usually find this type of flashing on dormer fronts
        and clipped gables.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/flashing-apron-hem--docx_0.png" alt="Gutter Apron from Plans" className="w-full rounded" />
        <img src="/images/cms/flashing-apron-hem--docx_1.png" alt="Gutter Apron from Plans" className="mt-2 w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Gutter Apron from Plans</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify any dormers or clipped gables from the elevations page.</li>
        <li>For dormers, use <strong>LINE</strong> to trace where the front wall of the dormer meets the roof from end to end on each.</li>
        <li>For clipped gables, use <strong>LINE</strong> to trace where the front cladding under the gable meets the clipped roof from end to end.</li>
        <li>Use <strong>TLEN</strong> to get the linear footage of each run. If a run is greater than 10&apos;, a 1&apos; overlap would be needed. (e.g. You measured 30&apos; for 1 dormer run. 2&apos; of overlap would be needed + the full 30&apos; run.)</li>
        <li>Add each linear footage together to get the total linear footage.</li>
        <li>Divide by 10.</li>
        <li>Round up, then place the result into the appropriate cell in the <strong>Flashing For Real Material Touching Roof</strong> section of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/flashing-apron-hem--flashing-apron-hem_0.png" alt="Gutter Flashing XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Gutter Flashing XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Hem Angle Flashing</h3>

      <p className="text-sm leading-relaxed">
        Hem Angle Flashing is installed where the roof meets a wall at a <strong>90 degree angle</strong>.
        You will find this type of flashing on the same components as the gutter apron flashing.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/flashing-apron-hem--docx_2.png" alt="Hem Angle from Plans" className="w-full rounded" />
        <img src="/images/cms/flashing-apron-hem--docx_3.png" alt="Hem Angle from Plans" className="mt-2 w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Hem Angle from Plans</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify any dormers or clipped gables from the elevations page.</li>
        <li>For dormers, use <strong>LINE</strong> to trace where the side wall of the dormer meets the roof from end to end.</li>
        <li>If a clipped gable is present, add 2&apos; per side.</li>
        <li>Use <strong>TLEN</strong> to get the linear footage of each run. If a run is greater than 10&apos;, a 1&apos; overlap would be needed.</li>
        <li>Add each linear footage together to get the total linear footage.</li>
        <li>Divide by 10.</li>
        <li>Round up, then place the result into the appropriate cell in the <strong>Flashing For Real Material Touching Roof</strong> section of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/flashing-apron-hem--flashing-apron-hem_1.png" alt="Hem Flashing XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Hem Flashing XL</p>
      </div>

      <Note>
        Gutter Apron and Hem Angle are both sold in 10-foot sections. Always
        round up after dividing &mdash; partial pieces cannot be ordered.
      </Note>
    </div>
  );
}
