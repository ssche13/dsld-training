import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function CypressPosts() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Cypress Posts</h2>

      <p className="text-sm leading-relaxed">
        Cypress posts are exterior structural and decorative posts used on porches, covered entries,
        and carports. They are counted from the <strong>Elevations</strong> of the PDF drawing.
      </p>

      <ImagePlaceholder label="Cypress Post PDF" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count every cypress post called out on the elevations — include front porch, rear patio, side entries, and carports.</li>
        <li>Enter the total count in the following sections:</li>
      </ul>

      <ImagePlaceholder label="Cypress Posts Trim XL" />
      <ImagePlaceholder label="Cypress Posts Bid Rates XL" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Note the size of each post called out on the plans (e.g., 6x6, 8x8).</li>
        <li>Count how many posts of each size you will need and enter each count in its corresponding cell.</li>
      </ul>

      <ImagePlaceholder label="Cypress Decorative XL" />

      <h3 className="font-medium text-base text-dsld-text">Cypress Post Trim</h3>

      <p className="text-sm leading-relaxed">
        If a cypress post has decorative trim around the top and bottom, we will use 1x8x8 Cypress
        Trim.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>One piece will cover 1 post top and bottom.</li>
        <li>Place your count in the 1x8x8 Cypress Trim of the section shown in the previous image.</li>
      </ul>

      <SpreadsheetRef section="Trim" cell="Cypress Posts" />
    </div>
  );
}
