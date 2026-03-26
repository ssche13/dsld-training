import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function FlashingDoorsWindows() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Flashing — Doors &amp; Windows vs Water Tables
      </h2>

      <p className="text-sm leading-relaxed">
        Door/window flashing and water table flashing use{" "}
        <strong>different sizes</strong> and must be entered as{" "}
        <strong>separate line items</strong>. See the two subsections below.
      </p>

      {/* (A) 5/8" Galvanized Steel Flashing */}
      <h3 className="font-medium text-base text-dsld-text">
        (A) 5/8&quot; Galvanized Steel Flashing — Windows &amp; Doors
      </h3>

      <p className="text-sm leading-relaxed">
        <strong>5/8&quot; Galvanized Steel Flashing</strong> is used for all
        window and door flashing.
      </p>

      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>
          <strong>Measure</strong> the total linear feet of all window and door
          flashing.
        </li>
        <li>
          <strong>Divide</strong> the total linear feet by <strong>10</strong>.
        </li>
        <li>
          <strong>Round up</strong> to the next whole number.
        </li>
      </ol>

      <SpreadsheetRef section="Flashing" cell='5/8" Galv. Steel' />

      {/* (B) 1" Galvanized Steel Flashing */}
      <h3 className="font-medium text-base text-dsld-text">
        (B) 1&quot; Galvanized Steel Flashing — Water Tables Only
      </h3>

      <p className="text-sm leading-relaxed">
        <strong>1&quot; Galvanized Steel Flashing</strong> is used for{" "}
        <strong>water tables only</strong> — do not mix with door/window
        flashing.
      </p>

      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>
          <strong>Measure</strong> the total linear feet of all water table
          flashing.
        </li>
        <li>
          <strong>Divide</strong> the total linear feet by <strong>10</strong>.
        </li>
        <li>
          <strong>Round up</strong> to the next whole number.
        </li>
      </ol>

      <SpreadsheetRef section="Flashing" cell='1" Galv. Steel' />
    </div>
  );
}
