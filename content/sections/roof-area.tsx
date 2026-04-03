import ColorSwatch from "@/components/ColorSwatch";
import SpreadsheetRef from "@/components/SpreadsheetRef";
import CmsImage from "@/components/CmsImage";

export default function RoofArea() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Roof Area</h2>

      <h3 className="font-semibold text-base text-dsld-teal">Drawing Instructions</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use a <ColorSwatch color="green" /> <strong>green polyline</strong> to trace the
          outermost outline of the roof.
        </li>
      </ul>

      <CmsImage src="/images/cms/roof-area--docx_0.png" alt="Roof Area CAD" />

      <h3 className="font-semibold text-base text-dsld-teal">Entering the Value</h3>

      <p className="text-sm leading-relaxed">
        Place the <strong>total square footage</strong> in the Roof Area section of the estimating
        spreadsheet.
      </p>

      <CmsImage src="/images/cms/roof-area--roof-area_0.png" alt="Roof Area XL" />

      <SpreadsheetRef section="Roof" cell="Roof Area" />
    </div>
  );
}
