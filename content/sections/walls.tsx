import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Walls() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Walls</h2>

      <p className="text-sm leading-relaxed">
        Wall measurements are one of the most critical parts of the estimate.
        You will trace both interior and exterior walls in AutoCAD to calculate
        total linear footage for framing, sheetrock, and other trades. It is important
        that you utilize the <strong>Ceiling Framing Layout</strong> from the PDF plan
        drawing for this section as well.
      </p>

      <h3 className="font-medium text-base text-dsld-text">
        Regular Walls &amp; Knee Walls
      </h3>

      <p className="text-sm leading-relaxed">
        Regular walls are standard full-height walls. Knee walls are shorter
        walls &mdash; commonly found in attic spaces, bonus rooms, and at kitchen
        bars. Knee walls are also used to step up walls to catch beams or ceiling joists.
        Both must be measured accurately because they affect framing
        lumber and sheetrock quantities.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use <strong>LINE</strong> to trace each wall in the corresponding color that
          it is represented by on the spreadsheet, for regular walls and knee walls.
        </li>
        <li>
          Use <strong>TLEN</strong> to put the total linear footage for your regular walls
          here based on the corresponding ceiling height:
        </li>
      </ul>

      <CmsImage src="/images/cms/walls--walls_0.png" alt="Regular Wall Takeoffs" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Pull your knee walls out so that they are separate from your regular walls.</li>
      </ul>

      <p className="text-sm leading-relaxed">
        There will be common scenarios where you will trace a wall that has rooms on either side of it
        at different ceiling heights. Pay attention to ceiling heights from the floor plan and where
        the ceiling joists are landing. It is important that you use the <strong>Ceiling Framing Layout</strong> from
        the PDF to keep these 3 important notes in mind. We&apos;ll use a 10&apos; room and a 9&apos; room
        on either side of a wall you&apos;re measuring as an example:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-sm">
        <li>
          If ceiling joists from both the 10&apos; room and 9&apos; room land on the same wall,
          a <strong>knee wall</strong> would be needed to make up the difference between the two
          ceiling heights. In this case, the knee wall would be 1&apos;. (e.g. In a case where there
          is an 11&apos; room instead of a 10&apos; room, the knee wall would be 2&apos;.)
        </li>
        <li>
          If only the ceiling joists from the 10&apos; room land on the wall, you will go with
          the <strong>higher height</strong> of the two rooms. In this case, your wall would be
          measured at 10&apos;.
        </li>
        <li>
          If only the ceiling joists from the 9&apos; room land on the wall, you will go with
          the <strong>lower height</strong> of the two rooms. In this case, your wall would be
          measured at 9&apos;.
        </li>
      </ol>

      <CmsImage src="/images/cms/walls--docx_0.png" alt="Walls CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Run through all door frames except for garage doors and large cased openings.</li>
        <li>Pay attention to ceiling height callouts in each room.</li>
        <li>Do not double-count walls that are shared between rooms.</li>
      </ul>

      <Note>
        In rooms where there are tray ceilings, always honor the actual ceiling height.
        Ignore the height called out for the tray ceiling.
      </Note>

      <p className="text-sm leading-relaxed">
        Knee walls have 2 separate places in the spreadsheet. The total linear footage
        for knee walls in kitchen bars will go here:
      </p>

      <CmsImage src="/images/cms/walls--walls_1.png" alt="Knee Walls Kitchen" />

      <p className="text-sm leading-relaxed">
        The total linear footage for knee walls to make up differences in regular walls will go here:
      </p>

      <CmsImage src="/images/cms/walls--walls_2.png" alt="Knee Walls for Diff" />
    </div>
  );
}
