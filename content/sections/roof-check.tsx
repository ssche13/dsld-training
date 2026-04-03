import Note from "@/components/callouts/Note";
import ColorSwatch from "@/components/ColorSwatch";
import CmsImage from "@/components/CmsImage";

export default function RoofCheck() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Roof Check</h2>

      <p className="text-sm leading-relaxed">
        When drawing roof lines, there are <strong>four different sketches</strong>. Three feed into
        the estimating spreadsheet, and one is used specifically for checking roofline changes
        between plan iterations.
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Drawing Instructions</h3>

      <p className="text-sm leading-relaxed">
        <strong>Trace the key features of the roofline.</strong>
      </p>

      <p className="text-sm leading-relaxed">
        Key features include <strong>ridges</strong>, <strong>hips</strong>, and{" "}
        <strong>valleys</strong>.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="red" /> <strong>Red</strong> = Ridge</li>
        <li><ColorSwatch color="yellow" /> <strong>Yellow</strong> = Hip</li>
        <li><ColorSwatch color="green" /> <strong>Green</strong> = Valley</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Taking this line drawing and transposing it over the parent roofline highlights any
        potential changes.
      </p>

      <CmsImage src="/images/cms/roof-check--docx_0.png" alt="Roof Check" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/roof-plan.jpg" alt="Roof plan showing ridges, hips, and valleys" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Roof plan — trace ridges, hips, and valleys</p>
      </div>

      <Note>
        It is critical that this is done first — you do not want to continue estimations if there
        is a red flag regarding roofline changes or errors.
      </Note>
    </div>
  );
}
