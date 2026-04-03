import ColorSwatch from "@/components/ColorSwatch";
import CmsImage from "@/components/CmsImage";

export default function DripEdgeSoffitFascia() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Drip Edge and Soffit/Fascia</h2>

      <h3 className="font-semibold text-base text-dsld-teal">Drip Edge Drawing</h3>

      <p className="text-sm leading-relaxed">
        Trace all drip edges on the roof plan. A drip edge is any part of the roof that meets soffit.
        This can be done with the <strong>LINE</strong> feature since we only need the length.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="green" /> <strong>Green</strong> indicates 16&quot; overhang</li>
        <li><ColorSwatch color="red" /> <strong>Red</strong> indicates 12&quot; overhang</li>
        <li><ColorSwatch color="yellow" /> <strong>Yellow</strong> indicates 6&quot; overhang</li>
      </ul>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--docx_0.png" alt="Total Drip Edge CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the total linear footage of all lines.</li>
        <li>Round up, then place the resulting total into the <strong>Total Drip Edge Length</strong> cell of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--drip-edge-soffit-fascia_0.png" alt="Total Drip Edge XL" />

      <h3 className="font-semibold text-base text-dsld-teal">Fascia Calculation</h3>

      <p className="text-sm leading-relaxed">
        Fascia will run everywhere soffit is installed, both vented and non-vented.{" "}
        <strong>1x6x12 Cement Smooth Trim</strong> pieces are needed around the perimeter of the home.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the total linear footage of the drip edge you just calculated.</li>
        <li>Multiply by 1.1.</li>
        <li>Divide by 12.</li>
        <li>Add 1 extra.</li>
        <li>Place the resulting count into the <strong>Real Material Soffit and Fascia</strong> section of the estimating spreadsheet.</li>
      </ul>

      <p className="text-sm leading-relaxed italic">
        Example: 180 ft total drip edge &rarr; 180*1.1 / 12 = 15 + 1 = <strong>18 pieces</strong> of
        1x6x12 Cement Smooth Trim.
      </p>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--drip-edge-soffit-fascia_1.png" alt="1x6x12 XL" />

      <h3 className="font-semibold text-base text-dsld-teal">Soffit</h3>

      <p className="text-sm leading-relaxed">
        The overhang size determines whether 6&quot;, 12&quot;, or 16&quot; soffit is used.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Vented soffit is on the perimeter of the home.</li>
        <li>Gables and pitches are non-vented.</li>
        <li>Dormers are non-vented.</li>
        <li>Porches will have a 16&quot; soffit in most cases, not all.</li>
      </ul>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--docx_1.png" alt="Soffit PDF" />

      <p className="text-sm leading-relaxed">
        Copy your drip edge sketch off to the side and adjust with the following colors:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="orange" /> <strong>Orange</strong> - 12x12 Non-Vented Soffit (gables/dormers with brick cladding)</li>
        <li><ColorSwatch color="red" /> <strong>Red</strong> - 12x12 Vented Soffit (where brick is located on the perimeter of the home, usually already drawn from your drip edge sketch)</li>
        <li><ColorSwatch color="cyan" /> <strong>Cyan</strong> - 16x12 Non-Vented Soffit (gables/dormers with any other cladding besides brick)</li>
        <li><strong>White</strong> - 16x12 Vented Soffit (where porches are located)</li>
      </ul>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--docx_2.png" alt="Soffit CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the total linear footage of each run of the same soffit type.</li>
        <li>Multiply by 1.15.</li>
        <li>Divide by 12.</li>
        <li>Round up to the next whole number, then place the resulting count into its corresponding cell in the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>
      </ul>

      <p className="text-sm leading-relaxed italic">
        Example: (6ft + 25ft + 25ft + 12ft + 30ft + 2ft + 50ft + 8ft + 4ft + 22ft)*1.15 / 12 = 17.63
        &rarr; Rounded up = <strong>18</strong> 12x12 non-vented pieces
      </p>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--drip-edge-soffit-fascia_2.png" alt="Soffit XL" />

      <h3 className="font-semibold text-base text-dsld-teal">Birdboxes</h3>

      <p className="text-sm leading-relaxed">
        Birdboxes need to be accounted for. 4 boxes come from one piece of{" "}
        <strong>1x12x12 Cement Smooth Trim</strong>.
      </p>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--drip-edge-soffit-fascia_3.png" alt="Front Birdbox" />
      <CmsImage src="/images/cms/drip-edge-soffit-fascia--drip-edge-soffit-fascia_4.png" alt="Side Birdbox" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count birdboxes from the elevation page.</li>
        <li>Divide by 4.</li>
        <li>Round up, then place the resulting count into the corresponding cell in the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>
      </ul>

      <p className="text-sm leading-relaxed italic">
        Example: 6 birdboxes &rarr; 6 / 4 = 1.5 &rarr; <strong>2 pieces</strong>
      </p>

      <CmsImage src="/images/cms/drip-edge-soffit-fascia--drip-edge-soffit-fascia_5.png" alt="Birdbox XL" />
    </div>
  );
}
