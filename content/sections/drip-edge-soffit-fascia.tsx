import Note from "@/components/callouts/Note";
import ColorSwatch from "@/components/ColorSwatch";
import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

export default function DripEdgeSoffitFascia() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Drip Edge and Soffit/Fascia</h2>

      <h3 className="font-semibold text-base text-dsld-teal">Drip Edge Drawing</h3>

      <p className="text-sm leading-relaxed">
        <strong>Trace all drip edges</strong> on the roof plan. A drip edge is any part of the roof
        that meets soffit. This can be done with a regular line since we only need the length.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="green" /> <strong>Green</strong> indicates 6" overhang</li>
        <li><ColorSwatch color="red" /> <strong>Red</strong> indicates 12" overhang</li>
        <li><ColorSwatch color="yellow" /> <strong>Yellow</strong> indicates 16" overhang</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Total length of lines drawn equals the <strong>total drip edge length</strong>. Place the
        total linear feet of <ColorSwatch color="red" /> red and <ColorSwatch color="green" />{" "}
        green lines in the Total Drip Edge Length cell.
      </p>

      <SpreadsheetRef section="Roof" cell="Total Drip Edge Length" />

      <h3 className="font-semibold text-base text-dsld-teal">Fascia Calculation</h3>

      <p className="text-sm leading-relaxed">
        Total linear feet of entire drip edge / 12 (+1) = 1x6x12 Cement Smooth Trim pieces.
      </p>

      <p className="text-sm leading-relaxed italic">
        Example: 180 ft total drip edge &rarr; 180 / 12 = 15 + 1 = <strong>16 pieces</strong> of
        1x6x12 Cement Smooth Trim.
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Soffit</h3>

      <p className="text-sm leading-relaxed">
        The overhang size determines the soffit product used:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>12" overhang on flat (eave)</strong> = 12"x12' <strong>vented</strong> soffit.</li>
        <li><strong>12" overhang on pitch (gable/dormer)</strong> = 12"x12' <strong>solid (non-vented)</strong> soffit.</li>
        <li><strong>16" overhang on flat</strong> = 16" <strong>vented</strong> soffit.</li>
        <li><strong>16" overhang on pitch</strong> = 16" <strong>solid (non-vented)</strong> soffit.</li>
        <li><strong>6" overhang</strong> = 6" lap siding is used under the soffit (not counted in this section).</li>
      </ul>

      <p className="text-sm leading-relaxed">
        The rule is simple: <strong>flat areas (eaves) get vented soffit</strong> and{" "}
        <strong>pitched areas (gables, dormers) get solid (non-vented) soffit</strong>.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>If overhang is less than 6", count in <strong>vinyl</strong> instead of in this section.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Get the linear length of each straight run of the same soffit type. <strong>Add together
        then divide by 12.</strong> Round up to the next whole number.
      </p>

      <p className="text-sm leading-relaxed italic">
        Example: (6ft + 25ft + 25ft + 12ft + 30ft + 2ft + 50ft + 8ft + 4ft + 22ft) / 12 = 15.33
        &rarr; Rounded up = <strong>16 pieces</strong>
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Birdboxes</h3>

      <p className="text-sm leading-relaxed">
        4 boxes come from one piece of <strong>1x12x12 Cement Smooth Trim</strong>. Count birdboxes
        from the elevation page, divide by 4, and round up.
      </p>

      <p className="text-sm leading-relaxed italic">
        Example: 6 birdboxes &rarr; 6 / 4 = 1.5 &rarr; <strong>2 pieces</strong>
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image7.png" alt="Bird box examples from front and side elevation views" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bird box examples from front and side views (PDF drawing)</p>
      </div>

      <Note>
        Always round up when calculating soffit pieces, fascia, and birdbox trim. Under-ordering
        causes delays on the job site.
      </Note>

      <SpreadsheetRef section="Roof" cell="Soffit/Fascia" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/imagee.png" alt="Soffit and Fascia section in the estimating spreadsheet" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Soffit & Fascia spreadsheet section</p>
      </div>

      <ImagePlaceholder label="Drip edge drawing with color coding" />
    </div>
  );
}
