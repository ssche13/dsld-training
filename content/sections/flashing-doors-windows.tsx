import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function FlashingDoorsWindows() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Flashing — Doors &amp; Windows vs Water Tables
      </h2>

      <p className="text-sm leading-relaxed">
        Door/window flashing and water table flashing use different sizes and must be entered as
        separate line items.
      </p>

      <h3 className="font-medium text-base text-dsld-text">
        5/8&quot; Galvanized Steel Flashing
      </h3>

      <p className="text-sm leading-relaxed">
        5/8&quot; Galvanized Steel Flashing is used for all window and door flashing.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Measure the total linear feet of the door polylines, then divide by 10. Round up to the next whole number.</li>
        <li>Two windows can be covered by one piece. Count the windows, divide by 2, then round up to the next whole number.</li>
        <li>Add both counts together and enter into the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Flashing 5/8 XL" />

      <SpreadsheetRef section="Flashing" cell='5/8" Galv. Steel' />

      <h3 className="font-medium text-base text-dsld-text">
        1&quot; Galvanized Steel Flashing
      </h3>

      <p className="text-sm leading-relaxed">
        1&quot; Galvanized Steel Flashing is used for water tables only.
      </p>

      <ImagePlaceholder label="Water Table PDF" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Measure the total linear feet of the water tables, then divide by 10. Round up to the next whole number.</li>
        <li>Enter into the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Flashing 1 XL" />

      <SpreadsheetRef section="Flashing" cell='1" Galv. Steel' />
    </div>
  );
}
