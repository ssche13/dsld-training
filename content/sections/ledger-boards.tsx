import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function LedgerBoards() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Ledger Boards</h2>

      <p className="text-sm leading-relaxed">
        Ledger boards are horizontal framing members attached to the side of a wall or beam to
        support the ends of joists, rafters, or other structural elements. <strong>They are not
        commonly used in our estimation process but are worth mentioning.</strong>
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Find the size of the ceiling joist.</li>
        <li>Match to a nailer on the wall where the ceiling joist would be hung.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Common Locations</h3>
      <p className="text-sm leading-relaxed">
        Ledger boards are used when a knee wall is needed but cannot be built. Look for them at
        porch connections, second-story floor transitions, and anywhere joists bear on a wall rather
        than sitting on top of a beam or plate.
      </p>

      <SpreadsheetRef section="Framing" cell="Ledger Boards" />
    </div>
  );
}
