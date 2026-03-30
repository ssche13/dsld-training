import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function Stucco() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Stucco</h2>

      <p className="text-sm leading-relaxed">
        Stucco is an exterior wall finish applied over a lath substrate. Estimation requires
        calculating the <strong>total surface area</strong> of exterior walls that receive stucco, minus openings.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Estimate</h3>
      <p className="text-sm leading-relaxed">
        Identify which exterior walls receive stucco from the elevation drawings.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For finished stucco, you will keep doors and windows in your count. The only thing being subtracted are openings that are not doors or windows, like vents.</li>
        <li>All related stucco calculations will go here:</li>
      </ul>

      <ImagePlaceholder label="Stucco XL" />

      <p className="text-sm leading-relaxed">
        The different flat bands refer to trim call outs on the elevations.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the <strong>total linear footage</strong> of each specific band size/style needed.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Water tables, keystones, medallions, and columns are also stucco details that will be called out on the elevations.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For <strong>water tables,</strong> get the <strong>total linear footage</strong> and use the correct sizing from the lists for entering into the spreadsheet.</li>
        <li>For <strong>all others,</strong> count how many times they appear and place the resulting total into the spreadsheet.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        For Stucco and Brick, <strong>1x4x12 Cement Primed Smooth</strong> is used to connect the porch to the soffit.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the <strong>total linear footage of your porches and drip edge.</strong></li>
        <li><u>Porches will only be counted where there is stucco or brick cladding. If the elevation shows any other type of cladding at the porches, do not include it in this count.</u></li>
        <li><u>If the stucco has crown, it will not be counted.</u></li>
        <li>Multiply by 1.15.</li>
        <li>Divide by 12.</li>
        <li>Round to the next whole number and place the resulting total into the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Stucco and Brick XL" />

      <h3 className="font-medium text-base text-dsld-text">Stucco vs. Other Finishes</h3>
      <p className="text-sm leading-relaxed">
        Many DSLD plans use a combination of stucco and brick or siding. Carefully read the
        elevation notes to determine exactly where stucco starts and stops on each wall face.
      </p>
    </div>
  );
}
