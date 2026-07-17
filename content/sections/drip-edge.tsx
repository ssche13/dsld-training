import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function DripEdge() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Drip Edge</h2>

      <p className="text-sm leading-relaxed"><strong>Drip edge</strong> is metal flashing installed at roof edges to direct water away from the fascia and into gutters, preventing wood rot. The <strong>fascia</strong> is the vertical board capping where the gutters attach, while the <strong>soffit</strong> is the underside paneling connecting the fascia to the house.</p>

      <h3 className="font-medium text-base text-dsld-text">Starter Shingles</h3>

      <p className="text-sm leading-relaxed"><strong>Trace all drip edges</strong> on the roof plan using the <strong>LINE</strong> feature. A drip edge is any part of the roof that meets soffit. <strong>Always trace where gables or dormers are present.</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li><strong>Green</strong> = 16&quot; overhang</li>

        <li><strong>Red</strong> = 12&quot; overhang</li>

        <li><strong>Yellow</strong> = 6&quot; overhang</li>

      </ul>

      <CmsImage src="/images/cms/drip-edge--course_0.png" alt="Starter Shingles – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use the PDF plan drawing to determine the size overhang for each side of the roof.</li>

      </ul>

      <CmsImage src="/images/cms/drip-edge--course_1.png" alt="Starter Shingles – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of all lines.</li>

        <li>Round up, then place the resulting total into the <strong>Total Drip Edge Length</strong> cell of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/drip-edge--course_2.png" alt="Starter Shingles – example 3" />

      <h3 className="font-medium text-base text-dsld-text">Bell Overhang</h3>

      <p className="text-sm leading-relaxed">A bell overhang is an aesthetic feature where a roof gently curves outward at the bottom edge, resembling a bell.</p>

      <Note>Bell overhangs will not be taken off in Florida, North Alabama, or Tennessee.</Note>

      <CmsImage src="/images/cms/drip-edge--course_3.png" alt="Bell Overhang – example 1" />

      <p className="text-sm leading-relaxed">To calculate the linear footage of a bell overhang, use the <strong>LINE</strong> feature to trace where the overhang is present on your roof plan.</p>

      <CmsImage src="/images/cms/drip-edge--course_4.png" alt="Bell Overhang – example 2" />

      <p className="text-sm leading-relaxed">Get the <strong>total linear footage</strong> of the lines drawn, round up, and insert the quantity into the <strong>2x4</strong> cell of the spreadsheet.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          <strong>LA/TX spreadsheet:</strong>
          <CmsImage src="/images/cms/drip-edge--course_5.png" alt="Bell Overhang – example 3" />
        </li>

        <li><strong>MS/SAL spreadsheet:</strong></li>

      </ul>

      <CmsImage src="/images/cms/drip-edge--course_6.png" alt="Bell Overhang – example 4" />
    </div>
  );
}
