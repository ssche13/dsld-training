import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";

export default function Granite() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Granite Countertops</h2>

      <p className="text-sm leading-relaxed">
        Granite countertop estimation is based on the total square footage of countertop surface
        area. Measurements are taken from the cabinet layout drawing in AutoCAD.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Open the cabinet layout drawing for the kitchen and any bathrooms with granite tops.</li>
        <li>Measure the length of each countertop run along the front edge.</li>
        <li>Standard countertop depth is 25.5&quot; for kitchen base cabinets. Use the actual depth if different.</li>
        <li>Calculate square footage: length &times; depth for each run, then sum all runs.</li>
        <li>Include island countertops with their actual dimensions from the plan.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">What to Include</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Kitchen countertops (perimeter and island).</li>
        <li>Bathroom vanity tops if specified as granite.</li>
        <li>Utility room countertops if shown on plan.</li>
      </ul>

      <SpreadsheetRef section="Granite" cell="Total SF" />

      <Note>
        The total of the red and yellow lines after being exploded and adjusted are to be converted to linear inches before being inputted into the splash sections.
      </Note>

      <Tip>
        Do not deduct for sink or cooktop cutouts — the granite fabricator handles cutouts separately.
      </Tip>
    </div>
  );
}
