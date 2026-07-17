import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function Brick() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Brick</h2>

      <p className="text-base leading-relaxed">Brick is the <strong>most common</strong> exterior cladding that you will identify on elevation drawings.</p>

      <h3 className="font-medium text-lg text-dsld-text">Brick Area</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          Use <strong>POLYLINE</strong> in <strong><ColorWord c="blue">blue</ColorWord></strong> to trace where brick rowlock, brick soldier course, and brick water tables are present.
          <CmsImage src="/images/cms/brick--course_0.png" alt="Brick Area – example 1" />
          <CmsImage src="/images/cms/brick--course_1.png" alt="Brick Area – example 2" />
        </li>

        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage</strong> of all <strong><ColorWord c="red">red</ColorWord></strong> polylines indicative of brick.</li>

        <li>Add<strong> 3sqft</strong> per window (only on brick cladding).</li>

        <li>Add the <strong>total linear footage</strong> of the <strong><ColorWord c="blue">blue</ColorWord></strong> lines indicative of brick rowlock, soldier course, or water table.</li>

        <li>Use <strong>POLYAREA</strong> to subtract the total square footage of all doors, windows, louvered vents, and garage doors from the total square footage of the brick cladding areas.</li>

        <li>Round up, then place the resulting total into the <ColorWord c="white">white</ColorWord> cell of the <strong>Exterior Brick</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/brick--course_2.png" alt="Brick Area – example 3" />

      <h3 className="font-medium text-lg text-dsld-text">North Alabama and Tennessee Plans</h3>

      <p className="text-base leading-relaxed">These regions require one extra step for calculating brick. The logic for brick area is the same as all other regions and will go in the following cell:</p>

      <CmsImage src="/images/cms/brick--course_3.png" alt="North Alabama and Tennessee Plans – example 1" />

      <p className="text-base leading-relaxed">In North Alabama and Tennessee, the base where brick meets the foundation at the<strong> front</strong> of the home is also taken off.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>LINE</strong> to trace where brick meets the concrete base of the house.</li>

        <li>If the front porch shows brick cladding, trace the perimeter of the porch as well.</li>

      </ul>

      <CmsImage src="/images/cms/brick--course_4.png" alt="North Alabama and Tennessee Plans – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the lines you traced.</li>

        <li>Place the resulting quantity into the following cell of the spreadsheet:</li>

      </ul>

      <CmsImage src="/images/cms/brick--course_5.png" alt="North Alabama and Tennessee Plans – example 3" />

      <h3 className="font-medium text-lg text-dsld-text">Brick Lintels</h3>

      <p className="text-base leading-relaxed">Having to cut bricks around windows requires us to consider the extra exterior finishes of brick as well.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Identify any door, garage door, louvered vent, or window present in the elevation on brick cladding.</li>

        <li>Use the schedules in the PDF plan drawing or callouts on the elevations to determine the width.</li>

        <li>If the separation between two windows is 6'' or less, count as <strong>1</strong> window.</li>

        <li>Convert the width to linear inches and add 6’’.</li>

        <li>The resulting total will be the brick lintel size for that door, garage door, vent, or window.</li>

        <li>Repeat these steps for each opening present in the elevation on brick cladding.</li>

        <li>Place the count of each lintel size into its corresponding cell.</li>

      </ul>

      <CmsImage src="/images/cms/brick--course_6.png" alt="Brick Lintels – example 1" />
    </div>
  );
}
