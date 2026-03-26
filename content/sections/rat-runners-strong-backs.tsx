import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function RatRunnersStrongBacks() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Rat Runners &amp; Strong Backs</h2>

      <p className="text-sm leading-relaxed">
        Rat runners and strong backs are horizontal framing members that provide structural support
        between ceiling joists. They prevent joists from twisting and help distribute loads evenly
        across the framing system.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Rat Runners</h3>
      <p className="text-sm leading-relaxed">
        Rat runners are continuous bracing members nailed perpendicular to the ceiling joists. They
        run the length of the joist span and keep the joists aligned. Count the number of rat runner
        rows needed based on the joist span length.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Strong Backs</h3>
      <p className="text-sm leading-relaxed">
        Strong backs are L-shaped or T-shaped assemblies installed at mid-span of ceiling joists to
        prevent sagging. They are typically made from 2x6 or 2x8 lumber fastened vertically to a
        continuous horizontal member. Measure the total linear footage needed based on the number of
        joist bays.
      </p>

      <SpreadsheetRef section="Framing" cell="Rat Runners" />
      <SpreadsheetRef section="Framing" cell="Strong Backs" />

      <Note>
        Strong backs are required whenever ceiling joist spans exceed the threshold specified in the
        framing plan. Check the structural notes on the plan before skipping this item.
      </Note>
    </div>
  );
}
