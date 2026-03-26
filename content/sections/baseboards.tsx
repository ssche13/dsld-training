import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function Baseboards() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Baseboards</h2>

      <p className="text-sm leading-relaxed">
        Baseboards are installed along the bottom of interior walls to cover the joint between the
        wall surface and the floor. Nearly every finished room in the house receives baseboard trim.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Measuring Baseboards</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Measure the perimeter of each room that receives baseboard.</li>
        <li>Subtract door openings, sliding glass doors, and areas behind built-in cabinetry.</li>
        <li>Include closet interiors — they typically receive baseboard as well.</li>
        <li>Garages and unfinished utility rooms generally do not receive baseboard.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Baseboard Sizes</h3>
      <p className="text-sm leading-relaxed">
        The most common baseboard profile is 3-1/4&quot; MDF. Check the plan specifications for any
        upgraded or alternative profiles that may be called out for specific elevations.
      </p>

      <SpreadsheetRef section="Trim" cell="Baseboards" />
    </div>
  );
}
