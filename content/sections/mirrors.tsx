import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function Mirrors() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Mirrors</h2>

      <p className="text-sm leading-relaxed">
        Mirror estimation is straightforward — count the number of mirrors shown on the plan and
        record the size of each one. Mirrors are typically located above bathroom vanities.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Count</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Check each bathroom on the floor plan for a mirror callout above the vanity.</li>
        <li>Note the mirror width — it usually matches the vanity width.</li>
        <li>Standard mirror height is typically 36&quot; unless noted otherwise on the plan.</li>
        <li>Powder rooms and secondary bathrooms usually each have one mirror.</li>
        <li>Master bathrooms may have one large mirror or two separate mirrors depending on vanity layout.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Counting Linear Feet for Frames</h3>
      <p className="text-sm leading-relaxed">
        Mirrors need linear feet for frames. In the cabinet elevations, trace out each mirror using
        rectangles. Once all mirrors are traced, get the total linear feet of the traced rectangles
        and enter that value into the spreadsheet.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Entering the Count</h3>
      <p className="text-sm leading-relaxed">
        Enter the total mirror count and sizes in the Mirrors section of the spreadsheet. If mirrors
        vary in size, list each size separately.
      </p>

      <SpreadsheetRef section="Mirrors" cell="Mirror Count" />
    </div>
  );
}
