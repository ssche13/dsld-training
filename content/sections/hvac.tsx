import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function Hvac() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">HVAC</h2>

      <p className="text-sm leading-relaxed">
        HVAC (Heating, Ventilation, and Air Conditioning) estimation records the system type and
        component counts from the mechanical plan. DSLD homes typically use central forced-air
        systems.
      </p>

      <h3 className="font-medium text-base text-dsld-text">What to Record</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>System tonnage</strong> — Read from the mechanical plan or specification sheet.</li>
        <li><strong>Supply registers</strong> — Count every supply vent shown on the floor plan.</li>
        <li><strong>Return air grilles</strong> — Count all return air locations.</li>
        <li><strong>Thermostat locations</strong> — Typically one or two per system zone.</li>
        <li><strong>Exhaust fans</strong> — Bathroom and kitchen exhaust vent locations.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Multi-Zone Systems</h3>
      <p className="text-sm leading-relaxed">
        Larger homes may have two HVAC zones with separate units. If the plan shows a multi-zone
        system, record each zone separately in the spreadsheet with its own tonnage and duct counts.
      </p>

      <SpreadsheetRef section="HVAC" cell="System Tonnage" />
      <SpreadsheetRef section="HVAC" cell="Supply Registers" />

      <Note>
        HVAC system sizing is determined by the mechanical engineer. Your job is to record the
        specified size and count the distribution components — do not attempt to resize the system.
      </Note>
    </div>
  );
}
