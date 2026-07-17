import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Osb() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">OSB</h2>

      <p className="text-base leading-relaxed">OSB is used as wall sheathing on exterior walls, as gable-end sheathing, and interior walls that touch exterior walls.</p>

      <h3 className="font-medium text-lg text-dsld-text">Exterior Wall Sheathing</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYLINE</strong> to trace along the exterior wall perimeter on top of the floor plan in a color of your choice, skipping garage door openings and porches.</li>

        <li>Include all <strong>outcroppings</strong> in your trace. Be sure to trace these lines in a <strong>separate color</strong> than what you used for the perimeter<strong>. </strong></li>

        <li>Outcropping: Any exterior wall projection that extends beyond the main building footprint, such as bay windows, fireplace chases, or cantilevered bump-outs. <strong>These must be included in your OSB measurement.</strong></li>

      </ul>

      <CmsImage src="/images/cms/osb--course_0.png" alt="Exterior Wall Sheathing – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of each run of matching plate heights and add them together.</li>

        <li>Multiply by 1.07.</li>

        <li>Divide by 4.</li>

        <li>Round up, then place the resulting count based on plate height into the <strong>Wall Sheathing</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/osb--course_1.png" alt="Exterior Wall Sheathing – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Zero Lot Line Walls</h3>

      <p className="text-base leading-relaxed"><strong>5/8x4x9 OSB</strong> must be used where these walls appear. <strong>Rare occasion</strong>,but should be noted.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Identify all zero lot line walls. A common indication is a wall that has no roof overhang.</li>

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of all zero lot line walls.</li>

        <li>Divide by 4.</li>

        <li>Place the resulting total into the <strong>Zero Lot Line Exterior Firerock</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/osb--course_2.png" alt="Zero Lot Line Walls – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Roof Decking and Felt</h3>

      <Note>OSB for roofing is auto-calculated in Florida and South Alabama.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          <strong>LA/TX</strong>
          <p className="mt-2 text-base leading-relaxed">7/16x4x8 OSB has <strong>2</strong> cells under this section in the spreadsheet.</p>
        </li>

        <li>One is for the catwalk used for attic spaces, where <strong>4</strong> is counted as a standard.</li>

        <li>This quantity is doubled if there is more than one attic access space.</li>

      </ul>

      <CmsImage src="/images/cms/osb--course_3.png" alt="Roof Decking and Felt – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          One is used to protect windows in the case of inclement weather or other edge cases with boards. This quantity will be equal to the raw count of windows present on the plan.
          <CmsImage src="/images/cms/osb--course_4.png" alt="Roof Decking and Felt – example 2" />
        </li>

        <li>
          <strong>MS</strong>
          <p className="mt-2 text-base leading-relaxed"><strong>15/32x4x8 OSB</strong> is used instead of 7/16x4x8 for the catwalk.</p>
          <CmsImage src="/images/cms/osb--course_5.png" alt="Roof Decking and Felt – example 3" />
          <p className="mt-2 text-base leading-relaxed">7/16x4x8 OSB is still used to protect windows.</p>
          <CmsImage src="/images/cms/osb--course_6.png" alt="Roof Decking and Felt – example 4" />
        </li>

        <li><strong>NAL/TN</strong></li>

      </ul>

      <p className="text-base leading-relaxed">The catwalk quantity is auto-calculated in these regions, so only the protection against windows will be entered.</p>

      <CmsImage src="/images/cms/osb--course_7.png" alt="Roof Decking and Felt – example 5" />
    </div>
  );
}
