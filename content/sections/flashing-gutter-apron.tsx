import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function FlashingGutterApron() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Gutter Wood Apron Flashing
      </h2>

      <p className="text-sm leading-relaxed">
        Gutter Wood Apron Flashing is installed along the{" "}
        <strong>horizontal roof edges (eaves)</strong> where the roof deck meets
        the fascia board and drains into a gutter.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Measure the total linear feet of eave runs where Gutter Wood Apron
          Flashing is required.
        </li>
        <li>
          Enter the total in the spreadsheet.
        </li>
      </ul>

      <SpreadsheetRef section="Flashing" cell="Gutter Wood Apron" />

      <ImagePlaceholder label="CAD image showing correct Gutter Wood Apron Flashing installation at eaves" />
    </div>
  );
}
