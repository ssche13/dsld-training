import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function Paint() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Paint</h2>

      <p className="text-sm leading-relaxed">
        Paint estimation is based on the total interior wall and ceiling area that will be painted.
        This value drives the paint material quantity and labor estimate.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Calculating Paintable Area</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Start with the total interior wall area from your wall measurements.</li>
        <li>Add ceiling area for all painted ceilings (exclude areas with other finishes like wood planking).</li>
        <li>Subtract areas that will not be painted: tile backsplashes, shower surrounds, and built-in cabinetry.</li>
        <li>Include closet interiors — walls and ceilings inside closets are painted.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Garage</h3>
      <p className="text-sm leading-relaxed">
        Garage walls and ceilings are typically painted with a single coat of flat white. Check the
        plan notes for whether the garage is included in the paint scope. If so, add the garage wall
        and ceiling area to your total.
      </p>

      <SpreadsheetRef section="Paint" cell="Total SF" />
    </div>
  );
}
