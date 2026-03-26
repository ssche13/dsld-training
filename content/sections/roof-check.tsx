import Note from "@/components/callouts/Note";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";

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

      <p className="text-sm leading-relaxed">
        Taking this line drawing and transposing it over the parent roofline highlights any
        potential changes.
      </p>

      <Note>
        It is critical that this is done first — you do not want to continue estimations if there
        is a red flag regarding roofline changes or errors.
      </Note>

      <ImagePlaceholder label="Roof check line drawing showing ridges, hips, and valleys" />
    </div>
  );
}
