import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function RoofCheck() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Roof Check</h2>

      <p className="text-base leading-relaxed">When drawing roof lines, there are <strong>four different sketches</strong>. Three feeds into the estimating spreadsheet, and one is used specifically for checking roofline changes between plan iterations.</p>

      <p className="text-base leading-relaxed">Drawing Instructions</p>

      <p className="text-base leading-relaxed">Trace the key features of the roofline, which include <strong>ridges</strong>, <strong>hips</strong>, and <strong>valleys</strong>.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong><ColorWord c="red">Red</ColorWord></strong> = Ridge</li>

        <li><strong><ColorWord c="yellow">Yellow</ColorWord></strong> = Hip</li>

        <li><strong><ColorWord c="green">Green</ColorWord></strong> = Valley</li>

      </ul>

      <p className="text-base leading-relaxed">Taking this line drawing and transposing it over the parent roofline highlights any potential changes.</p>

      <CmsImage src="/images/cms/roof-check--course_0.png" alt="Roof Check – example 1" />

      <Note>It is critical that this is done first — you do not want to continue estimations if there is a <ColorWord c="red">red</ColorWord> flag regarding roofline changes or errors.</Note>
    </div>
  );
}
