import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function Plumbing() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Plumbing</h2>

      <p className="text-sm leading-relaxed">
        Plumbing estimation involves counting all plumbing fixtures shown on the floor plan. Each
        fixture type is tracked separately in the spreadsheet.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Fixtures to Count</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>Toilets</strong> — Count in each bathroom, powder room, and utility area.</li>
        <li><strong>Sinks</strong> — Kitchen, bathroom vanity, utility, and wet bar sinks.</li>
        <li><strong>Bathtubs</strong> — Standard tubs and garden tubs.</li>
        <li><strong>Showers</strong> — Standalone showers and tub/shower combos.</li>
        <li><strong>Dishwasher</strong> — One per kitchen unless plan shows otherwise.</li>
        <li><strong>Water heater</strong> — Note whether tank or tankless is specified.</li>
        <li><strong>Washer connection</strong> — Located in the laundry room.</li>
        <li><strong>Hose bibs</strong> — Exterior faucet locations (typically 2–3 per home).</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">How to Count</h3>
      <p className="text-sm leading-relaxed">
        Go room by room on the floor plan and count each fixture. The plumbing legend identifies
        fixture symbols. Enter each count in the corresponding row of the Plumbing section.
      </p>

      <SpreadsheetRef section="Plumbing" cell="Fixture Count" />
      <SpreadsheetRef section="Plumbing" cell="Hose Bibs" />
    </div>
  );
}
