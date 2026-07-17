import CmsImage from "@/components/CmsImage";

export default function Stucco() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Stucco</h2>

      <p className="text-sm leading-relaxed">Stucco is an exterior wall finish applied over a lath substrate. Estimation requires calculating the <strong>total surface area</strong> of exterior walls that receive stucco, <strong>including openings.</strong></p>

      <h3 className="font-medium text-base text-dsld-text">Calculation</h3>

      <p className="text-sm leading-relaxed">Identify which exterior walls receive stucco from the elevation drawings.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>For finished stucco, you will <strong>keep</strong> doors, windows, and louvered vents in your count. The only thing being subtracted are garage doors or large openings.</li>

        <li>All related stucco calculations will go here:</li>

      </ul>

      <CmsImage src="/images/cms/stucco--course_0.png" alt="Calculation – example 1" />

      <p className="text-sm leading-relaxed">The different flat bands refer to trim call outs on the elevations.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of each specific band size/style needed.</li>

      </ul>

      <p className="text-sm leading-relaxed">Water tables, keystones, medallions, and columns are also stucco details that will be called out on the elevations.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>For <strong>water tables,</strong> get the <strong>total linear footage</strong> and use the correct size from the list when entering into the spreadsheet.</li>

        <li>For <strong>all others,</strong> count how many times they appear and place the resulting total into the spreadsheet.</li>

      </ul>

      <h3 className="font-medium text-base text-dsld-text">Stucco vs. Other Finishes</h3>

      <p className="text-sm leading-relaxed">Many DSLD plans use a combination of stucco and brick or siding. Carefully read the elevation notes to determine exactly where stucco starts and stops on each wall face.</p>
    </div>
  );
}
