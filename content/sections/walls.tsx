import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Walls() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Walls</h2>

      <p className="text-sm leading-relaxed">Wall measurements are one of the <strong>most detailed parts</strong> of the estimate. You will trace both interior and exterior walls in AutoCAD to calculate the total linear footage quantities that feed into framing, sheetrock, and other trades. In Louisiana and Texas, you will refer to the ceiling framing layout in the PDF plan drawing for help with this section. <strong>For all other regions, the engineering plans will take precedence as your reference.</strong></p>

      <h3 className="font-medium text-base text-dsld-text">Regular Walls &amp; Knee Walls</h3>

      <p className="text-sm leading-relaxed">Regular walls are standard full-height walls. Knee walls are shorter walls — commonly found in attic spaces, bonus rooms, and at kitchen bars. Knee walls are also used to step up walls to catch beams or ceiling joists. Both must be measured accurately because they affect framing lumber and sheetrock quantities.</p>

      <h3 className="font-medium text-base text-dsld-text">Identifying Wall Heights and Types</h3>

      <p className="text-sm leading-relaxed">There will be common scenarios where you will trace a wall that has rooms on either side of it at different ceiling heights. <strong>Pay attention to all ceiling height callouts.</strong></p>

      <p className="text-sm leading-relaxed">Keep these important notes in mind. We will use a wall that has a 10' room and a 9' room on either side of it as an example:</p>

      <ol className="list-decimal pl-6 space-y-2 text-sm">

        <li>If ceiling joists from <strong>both the 10' room and 9' room</strong> land on that wall, a <strong>knee wall</strong> would be needed to make up the difference between the two ceiling heights. In this case, the regular wall would be measured at 9’ and the knee wall would be measured at <strong>1'</strong>.</li>

        <li>If ceiling joists from<strong> only the 9’ room </strong>land on that wall, a<strong> knee wall </strong>would be needed to close any gaps that would be present in the 10’ room on the other side. In this case, the regular wall would be measured at <strong>9’ </strong>and the knee wall would be measured at <strong>1’.</strong></li>

        <li>If ceiling joists from <strong>only the 10’ room </strong>land on that wall, you will go with the higher ceiling height of the two. In this case, your wall would be measured at<strong> 10’.</strong></li>

        <li>If there are <strong>no ceiling joists</strong> landing on the wall from either room, you will go with the higher ceiling height of the two. In this case, your wall would be measured at <strong>10’</strong>.</li>

      </ol>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          <strong>LA/TX</strong>
          <CmsImage src="/images/cms/walls--course_0.png" alt="Identifying Wall Heights and Types – example 1" />
        </li>

        <li>
          <strong>MS/SAL</strong>
          <CmsImage src="/images/cms/walls--course_1.png" alt="Identifying Wall Heights and Types – example 2" />
        </li>

        <li><strong>FL/NAL/TN</strong></li>

      </ul>

      <p className="text-sm leading-relaxed">These regions utilize truss framing, so <strong>knee walls will not be taken off.</strong> Instead, truss s<strong>tep-ups</strong> are used to make up the difference between ceiling heights. Because of this, you will check engineering to determine where the trusses are spanning. You will <strong>always</strong> go with the higher ceiling height if there are rooms with trusses landing on either side of a wall at different heights.</p>

      <CmsImage src="/images/cms/walls--course_2.png" alt="Identifying Wall Heights and Types – example 3" />

      <Note>If there is a tray ceiling present, always honor the actual ceiling height of the room.</Note>

      <h3 className="font-medium text-base text-dsld-text">Identifying Wall Sizes</h3>

      <p className="text-sm leading-relaxed">Our standard walls are 2x4 but there will be 2x6 walls present on every plan you take off as well. They usually appear in bathrooms and laundry rooms, but there are edge cases where they may be called out in other areas of the home. There are also other cases where the 2x6 walls are visibly drawn and not indicated. Hence, it is important to pay close attention to the PDF plan drawing or engineering plans when calculating wall takeoff quantities.</p>

      <h3 className="font-medium text-base text-dsld-text">Calculation</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>LINE</strong> to trace each wall in the corresponding color that it is represented by on the spreadsheet, for regular walls and knee walls (where applicable).</li>

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage </strong>for your regular walls based on the corresponding ceiling height.</li>

      </ul>

      <CmsImage src="/images/cms/walls--course_3.png" alt="Calculation – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Pull your knee walls out so that they are separate from your regular walls.</li>

        <li>Run through all door frames <strong>except</strong> for garage doors and large cased openings.</li>

        <li>Pay attention to ceiling height callouts in each room and <strong>do not</strong> double-count walls that are shared between rooms.</li>

      </ul>

      <CmsImage src="/images/cms/walls--course_4.png" alt="Calculation – example 2" />

      <p className="text-sm leading-relaxed">Knee walls have 2 separate places in the spreadsheet. The total linear footage for <strong>knee walls in kitchen bars</strong> will go here:</p>

      <CmsImage src="/images/cms/walls--course_5.png" alt="Calculation – example 3" />

      <p className="text-sm leading-relaxed">The total linear footage for <strong>knee walls to make up differences in regular walls</strong> will go here:</p>

      <CmsImage src="/images/cms/walls--course_6.png" alt="Calculation – example 4" />

      <h3 className="font-medium text-base text-dsld-text">Two-Story Homes</h3>

      <p className="text-sm leading-relaxed">Random lumber is needed where stairs are present. For this step, you will use the stair section in the PDF plan drawing <strong>for all regions</strong>.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Trace the outline of the stair section in a color of your choice.</li>

        <li>Hatch at 16’’ O.C. and explode.</li>

        <li>Get the <strong>total linear footage</strong> of all lines present, then insert into the following cells in the Wall Takeoff section of the spreadsheet:</li>

      </ul>

      <CmsImage src="/images/cms/walls--course_7.png" alt="Two-Story Homes – example 1" />
    </div>
  );
}
