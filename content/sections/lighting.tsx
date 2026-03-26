import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";

export default function Lighting() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Lighting</h2>

      <p className="text-sm leading-relaxed">
        Lighting estimation is based on the electrical plan, which shows the location and type of
        every light fixture in the house. Count each fixture type and enter totals into the
        spreadsheet.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Reading the Electrical Plan</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Each fixture type has a unique symbol on the plan (recessed, surface mount, pendant, etc.).</li>
        <li>Refer to the electrical legend to identify each symbol.</li>
        <li>Count fixtures room by room to avoid missing any.</li>
        <li>Include exterior fixtures (porch lights, garage lights, soffit lights).</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Common Fixture Types</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Recessed can lights</li>
        <li>Surface-mount ceiling lights</li>
        <li>Pendant / chandelier locations</li>
        <li>Under-cabinet lights</li>
        <li>Exterior wall-mount fixtures</li>
      </ul>

      <SpreadsheetRef section="Electrical" cell="Lighting" />

      <Tip>
        Count switches and fan locations separately — they are often tracked as different line items
        in the electrical section of the spreadsheet.
      </Tip>
    </div>
  );
}
