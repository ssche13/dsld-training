import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function Stucco() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Stucco</h2>

      <p className="text-sm leading-relaxed">
        Stucco is an exterior wall finish applied over a lath substrate. Estimation requires
        calculating the total surface area of exterior walls that receive stucco, minus openings.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Estimate</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify which exterior walls receive stucco from the elevation drawings.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        For finished stucco, you will keep doors and windows in your count. The only thing being
        subtracted are openings that are not doors or windows, like vents. All related stucco
        measurements will go here:
      </p>

      <ImagePlaceholder label="Stucco XL" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>The different flat bands refer to trim call outs on the elevations. For these, use <strong>total linear feet</strong> of the specific band size/style needed.</li>
        <li>Water tables, keystones, medallions, and columns are also stucco details that will be called out on the elevations. For water tables, measure the <strong>total linear feet</strong> and use the correct sizing from the lists. For all others, count how many times they appear and place your total into the spreadsheet.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        For Stucco and Brick, 1x4x12 Cement Primed Smooth is used to connect the porch to the
        soffit.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>In AutoCAD, get the total linear feet of your porches and drip edge. Multiply by 1.15, then divide by 12. <strong><u>NOTE:</u></strong> This only applies where there is stucco or brick regarding the porches. If the elevation shows any other type of cladding, do not include it in this count.</li>
        <li>If stucco has crown, this is not needed.</li>
        <li>Round to the next whole number and insert into the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Stucco and Brick XL" />

      <h3 className="font-medium text-base text-dsld-text">Stucco vs. Other Finishes</h3>
      <p className="text-sm leading-relaxed">
        Many DSLD plans use a combination of stucco and brick or siding. Carefully read the
        elevation notes to determine exactly where stucco starts and stops on each wall face.
      </p>

      <SpreadsheetRef section="Exterior" cell="Stucco" />
    </div>
  );
}
