import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function CeilingJoists() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Ceiling Joists</h2>

      <p className="text-sm leading-relaxed">
        Ceiling joists span between bearing walls to support the ceiling below and, in some cases,
        attic storage loads above. Estimation includes the joist count, size, and associated joist
        hangers.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Counting Joists</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Refer to the roof framing plan for joist layout, spacing, and direction.</li>
        <li>Standard spacing is 16&quot; or 24&quot; on center — check the plan for the specified spacing.</li>
        <li>Calculate the number of joists: divide the span length by the spacing and add one.</li>
        <li>Note the joist size (2x6, 2x8, 2x10) and length for each run.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Joist Hangers</h3>
      <p className="text-sm leading-relaxed">
        Joist hangers are metal connectors used where ceiling joists frame into a beam or header
        rather than sitting on top of a wall plate. Count each hanger location from the framing plan
        and record the hanger size that matches the joist dimension.
      </p>

      <SpreadsheetRef section="Framing" cell="Ceiling Joists" />
    </div>
  );
}
