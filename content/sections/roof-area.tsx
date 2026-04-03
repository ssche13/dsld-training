import ColorSwatch from "@/components/ColorSwatch";
import SpreadsheetRef from "@/components/SpreadsheetRef";

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

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/roof-area--docx_0.png" alt="Roof Area CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Roof Area CAD</p>
      </div>

      <h3 className="font-semibold text-base text-dsld-teal">Entering the Value</h3>

      <p className="text-sm leading-relaxed">
        Place the <strong>total square footage</strong> in the Roof Area section of the estimating
        spreadsheet.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/roof-area--roof-area_0.png" alt="Roof Area XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Roof Area XL</p>
      </div>

      <SpreadsheetRef section="Roof" cell="Roof Area" />
    </div>
  );
}
