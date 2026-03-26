import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function CypressPosts() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Cypress Posts</h2>

      <p className="text-sm leading-relaxed">
        Cypress posts are exterior structural and decorative posts used on porches,
        covered entries, and carports. They are counted from the elevation pages of
        the PDF drawing.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Counting Cypress Posts</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Review each elevation page in the PDF drawing.</li>
        <li>Count every cypress post shown — include front porch, rear patio, side entries, and carports.</li>
        <li>Note the size of each post (e.g., 6x6, 8x8) as different sizes go in different spreadsheet cells.</li>
        <li>Do not double-count posts that appear on multiple elevation views — cross-reference with the floor plan.</li>
      </ul>

      <ImagePlaceholder label="Cypress posts on elevation drawing" />

      <h3 className="font-medium text-base text-dsld-text">Entering into the Estimating Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Enter the total count for each post size in the corresponding cell in the Trim section
        of the estimating spreadsheet.
      </p>

      <ImagePlaceholder label="Cypress Posts spreadsheet input location" />

      <SpreadsheetRef section="Trim" cell="Cypress Posts" />
    </div>
  );
}
