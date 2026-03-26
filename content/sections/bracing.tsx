import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Bracing() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Bracing</h2>

      <p className="text-sm leading-relaxed">
        Bracing provides lateral stability to the wall and roof framing system. This section covers
        wall bracing panels and collar ties used in the roof structure.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Wall Bracing</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Identify bracing locations on the framing plan — they are usually marked with a symbol or note.</li>
        <li>Count the number of bracing panels required per wall.</li>
        <li>Note the bracing type: let-in bracing, metal strap, or structural panel.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Collar Ties</h3>
      <p className="text-sm leading-relaxed">
        Collar ties are horizontal members connecting opposing rafters in the upper third of the
        rafter span. They prevent the rafters from spreading apart under load.
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the number of rafter pairs that require collar ties from the roof framing plan.</li>
        <li>Collar ties are typically spaced at every other rafter pair or as noted on the plan.</li>
        <li>Record the count and lumber size in the spreadsheet.</li>
      </ul>

      <SpreadsheetRef section="Framing" cell="Bracing" />

      <Note>
        Collar tie requirements vary by region and wind zone. Always check the structural notes on
        the plan for specific spacing requirements.
      </Note>
    </div>
  );
}
