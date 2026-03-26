import SpreadsheetRef from "@/components/SpreadsheetRef";

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
        <li>Calculate the gross wall area (linear footage &times; wall height) for each stucco face.</li>
        <li>Subtract window and door openings from the gross area.</li>
        <li>Subtract areas covered by other finishes (brick, siding) if the wall has mixed materials.</li>
        <li>Include gable-end areas above the plate line if they are called out for stucco.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Stucco vs. Other Finishes</h3>
      <p className="text-sm leading-relaxed">
        Many DSLD plans use a combination of stucco and brick or siding. Carefully read the
        elevation notes to determine exactly where stucco starts and stops on each wall face.
      </p>

      <SpreadsheetRef section="Exterior" cell="Stucco" />
    </div>
  );
}
