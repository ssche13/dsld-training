import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function Hangers() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Hangers</h2>

      <p className="text-base leading-relaxed">Hangers are structural connectors used to support and secure ceiling joists and beams. You will use the <strong>ceiling framing plan</strong> from the PDF for this section. It will be helpful to take notes and tallies during this section as well.</p>

      <h3 className="font-medium text-lg text-dsld-text">Hangers for Beams</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use the ceiling framing plan to identify any beam with<strong> ‘F.B.’ </strong>in its callout. This indicates that it is a<strong> floating beam</strong>, thus it will not be counted. <strong>Cross those out.</strong></li>

        <li>
          Porches will also be excluded.
          <CmsImage src="/images/cms/hangers--course_0.png" alt="Hangers for Beams – example 1" />
        </li>

        <li>For every other beam, identify where the beam intersects another beam. For every intersection, a hanger is needed.</li>

        <li>
          Pay attention to the callouts for the beams. Your count will correspond with <strong>the beam that is intersecting</strong>, not the beam that is being intersected.
          <CmsImage src="/images/cms/hangers--course_1.png" alt="Hangers for Beams – example 2" />
        </li>

        <li>Count each intersection.</li>

        <li>Place each count based on beam type and size in its corresponding cell under the <strong>Hangers and Misc</strong> section of the estimating spreadsheet. Look for Mitek.</li>

      </ul>

      <CmsImage src="/images/cms/hangers--course_2.png" alt="Hangers for Beams – example 3" />

      <h3 className="font-medium text-lg text-dsld-text">Hangers for Ceiling Joists</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Continue to exclude floating beams and porches from your count.</li>

        <li>Identify where ceiling joists land on non-floating beams <strong>perpendicularly</strong>, intersecting the beam.</li>

        <li>
          Count each intersection. If ceiling joists land perpendicularly from both sides of the beam, <strong>count each joist from both sides.</strong>
          <CmsImage src="/images/cms/hangers--course_3.png" alt="Hangers for Ceiling Joists – example 1" />
        </li>

        <li>Pay attention to the ceiling joist callouts in the areas you are counting from. Your counts will correspond with the <strong>specified ceiling joist size of that area.</strong></li>

        <li>Place each count based on ceiling joist size into its corresponding cell under the <strong>Hangers and Misc</strong> section of the estimating spreadsheet. Look for Mitek.</li>

      </ul>

      <CmsImage src="/images/cms/hangers--course_4.png" alt="Hangers for Ceiling Joists – example 2" />

      <Note>The Parts List will need to be utilized if there is a beam or hanger that is not already in the spreadsheet under the Hangers and Misc section.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Home Wrap</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage </strong>of all of the elevations you traced, including <ColorWord c="yellow">yellow</ColorWord> areas. Stucco and synthetic stone areas are wrapped twice, so those areas should be doubled.</li>

        <li>Divide by 1350.</li>

        <li>Place the resulting total into the <strong>Hangers and Misc </strong>section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hangers--course_5.png" alt="Home Wrap – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Poly <ColorWord c="black">Black</ColorWord></h3>

      <p className="text-base leading-relaxed">6MIL Poly <ColorWord c="black">Black</ColorWord> is needed anywhere were brick connects to the concrete foundation.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>LINE</strong> and <strong>TLEN</strong> to get the total linear footage of where brick connects to the foundation.</li>

        <li>Divide by 300.</li>

        <li>Round up, then place the resulting total into the <strong>Hangers and Misc</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hangers--course_6.png" alt="Poly Black – example 1" />
    </div>
  );
}
