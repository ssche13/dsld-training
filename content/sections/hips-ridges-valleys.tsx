import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function HipsRidgesValleys() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Hips, Ridges, &amp; Valleys</h2>

      <p className="text-base leading-relaxed">Use the<strong> Roof Check </strong>lines you traced previously along with the roof plan of the PDF to complete this section. Recall that hips, ridges, and valleys on the roof plan are represented by the following colors, so each type is easy to identify:</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong><ColorWord c="red">Red</ColorWord></strong> = Ridge</li>

        <li><strong><ColorWord c="yellow">Yellow</ColorWord></strong> = Hip</li>

        <li><strong><ColorWord c="green">Green</ColorWord></strong> = Valley</li>

      </ul>

      <h3 className="font-medium text-lg text-dsld-text">Reading the Roof Plan Page</h3>

      <p className="text-base leading-relaxed">On the <strong>Roof Plan</strong> of the PDF, numbers inside circles represent the length of that run. If a number has <strong>two circles</strong> around it, you need <strong>two pieces</strong> of that size.</p>

      <CmsImage src="/images/cms/hips-ridges-valleys--course_0.png" alt="Reading the Roof Plan Page – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Starter Shingles</h3>

      <p className="text-base leading-relaxed">Refer to the call outs on the PDF drawing representing <strong>the lengths of the hips on pitch</strong>.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Add all hip call-outs together, doubling if the call-out(s) is circled twice.</li>

        <li>Add the sum of all hip call outs to the total linear feet of ridges.</li>

        <li>Round up, then place the resulting total into the <strong>Total Ridges and Hips</strong> cell of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hips-ridges-valleys--course_1.png" alt="Starter Shingles – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">2x8’s</h3>

      <p className="text-base leading-relaxed">Refer to the same call outs on the PDF drawing to <strong>count</strong> how many 2x8s are represented at each pitch length. This count will include <strong>all 3</strong> roof elements.</p>

      <Note>2x8’s of hips, ridges, and valleys will not be taken off in Florida, North Alabama, or Tennessee.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>LA/TX</strong></li>

      </ul>

      <CmsImage src="/images/cms/hips-ridges-valleys--course_2.png" alt="2x8’s – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Insert each count into its corresponding cell in the <strong>Hips/Ridges/Valleys</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hips-ridges-valleys--course_3.png" alt="2x8’s – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>MS/SAL</strong></li>

      </ul>

      <p className="text-base leading-relaxed">You will need to refer to the engineering plans to determine the count of hips, ridges, and valleys, along with the length of hips and ridges for starter shingles. Hips, ridges, and valleys can come in either <strong>2x8’s or 2x10’s</strong> in these regions.</p>

      <CmsImage src="/images/cms/hips-ridges-valleys--course_4.png" alt="2x8’s – example 3" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Insert each count into their respective cells in the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hips-ridges-valleys--course_5.png" alt="2x8’s – example 4" />

      <Note>The hips and valleys &quot;on pitch&quot; are already calculated in the callouts from the PDF drawing and engineering plans.</Note>
    </div>
  );
}
