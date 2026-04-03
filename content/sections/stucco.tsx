
export default function Stucco() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Stucco</h2>

      <p className="text-sm leading-relaxed">
        Stucco is an exterior wall finish applied over a lath substrate. Estimation requires
        calculating the <strong>total surface area</strong> of exterior walls that receive stucco,
        minus openings.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Estimate</h3>
      <p className="text-sm leading-relaxed">
        Identify which exterior walls receive stucco from the elevation drawings.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          For finished stucco, <strong>keep</strong> doors, windows, and vents in your count. Only
          subtract garage doors or large openings.
        </li>
        <li>All related stucco calculations go in the spreadsheet:</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/stucco--stucco_0.png" alt="Stucco XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Stucco XL</p>
      </div>

      <p className="text-sm leading-relaxed">
        Flat bands refer to trim call outs on the elevations.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of each specific
          band size/style.
        </li>
      </ul>

      <p className="text-sm leading-relaxed">
        Water tables, keystones, medallions, and columns are stucco details that will be called out
        on the elevations.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          For <strong>water tables,</strong> get the <strong>total linear footage</strong> and use the
          correct sizing.
        </li>
        <li>
          For <strong>all others,</strong> count how many times they appear and place the resulting
          total into the spreadsheet.
        </li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Stucco vs. Other Finishes</h3>
      <p className="text-sm leading-relaxed">
        Many DSLD plans use a combination of stucco and brick or siding. Carefully read the
        elevation notes to determine exactly where stucco starts and stops on each wall face.
      </p>
    </div>
  );
}
