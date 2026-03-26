import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Sheetrock() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Sheetrock</h2>

      <p className="text-sm leading-relaxed">
        Sheetrock (drywall) estimation requires calculating the total wall area and ceiling area that
        will receive drywall. This section also covers nailers, which are backing pieces installed to
        support drywall edges at corners and intersections.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Calculating Wall Area</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Multiply the total linear footage of interior walls by the wall height to get gross wall area.</li>
        <li>Subtract window and door openings from the gross area to get net drywall area.</li>
        <li>Include garage-side walls if they require fire-rated drywall (check the plan notes).</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Ceiling Area</h3>
      <p className="text-sm leading-relaxed">
        Calculate the ceiling drywall area by measuring the floor area of each room. For vaulted or
        tray ceilings, use the actual sloped surface area rather than the floor footprint.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Nailers</h3>
      <p className="text-sm leading-relaxed">
        Nailers are required wherever two drywall sheets meet at a corner or where drywall terminates
        at a framing member. Count the number of nailer locations from the framing plan.
      </p>
      <p className="text-sm leading-relaxed">
        Trainees should color code their circles based on the corresponding
        ceiling height. This makes it easier to verify counts and ensures
        nailers are assigned to the correct height category in the
        spreadsheet.
      </p>

      <SpreadsheetRef section="Sheetrock" cell="Total SF" />

      <Note>
        Always include the garage common wall in your sheetrock count if fire-rated drywall is
        specified on the plan.
      </Note>
    </div>
  );
}
