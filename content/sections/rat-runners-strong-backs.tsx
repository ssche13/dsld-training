import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function RatRunnersStrongBacks() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Rat Runners &amp; Strong Backs</h2>

      <p className="text-base leading-relaxed">Rat runners and strong backs are horizontal framing members that provide structural support between ceiling joists. They prevent joists from twisting and help distribute loads evenly across the framing system. You will refer to the <strong>ceiling framing layout</strong> in the PDF drawing plan for Louisiana and Texas plans, and you will refer to the<strong> engineering plans</strong> for Mississippi and South Alabama plans.</p>

      <Note>Rat runners and strong backs will not be taken off in Florida, North Alabama, or Tennessee.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Rat Runners</h3>

      <p className="text-base leading-relaxed">Rat runners are continuous bracing members nailed perpendicular to the ceiling joists. They run the length of the joist span on each side and keep the joists aligned. The rat runner materials section will be auto calculated from the strong back quantities. <strong>No calculations are required.</strong></p>

      <h3 className="font-medium text-lg text-dsld-text">Strong Backs</h3>

      <p className="text-base leading-relaxed">Strong backs are L-shaped or T-shaped assemblies installed at mid-span of ceiling joists to prevent sagging. They are typically made from 2x6 or 2x8 lumber fastened vertically to a continuous horizontal member.<strong> Strong backs are not needed for porches or areas that are 3' or smaller.</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>LA/TX</strong></li>

      </ul>

      <p className="text-base leading-relaxed">Pull the <strong>Ceiling Framing </strong>construct into your AutoCAD drawing and use LINE in a distinctive color to trace everything circled in <ColorWord c="red">red</ColorWord> in the image below:</p>

      <CmsImage src="/images/cms/rat-runners-strong-backs--course_0.png" alt="Strong Backs – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Pull those lines off to the side.</li>

      </ul>

      <CmsImage src="/images/cms/rat-runners-strong-backs--course_1.png" alt="Strong Backs – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage </strong>of all lines traced.</li>

        <li>Round up, then place your number into the <strong>Strong Back Materials</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/rat-runners-strong-backs--course_2.png" alt="Strong Backs – example 3" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>MS/SAL</strong></li>

      </ul>

      <p className="text-base leading-relaxed">Reference engineering to determine where the strong backs are located.</p>

      <CmsImage src="/images/cms/rat-runners-strong-backs--course_3.png" alt="Strong Backs – example 4" />

      <p className="text-base leading-relaxed">The <strong>total liner footage</strong> of the lines can be taken off in 2 ways: 1) through <strong>PDFIMPORT</strong> in AutoCAD or 2) with the <strong>MEASURE</strong> tool in Foxit PDF Editor.</p>

      <CmsImage src="/images/cms/rat-runners-strong-backs--course_4.png" alt="Strong Backs – example 5" />
    </div>
  );
}
