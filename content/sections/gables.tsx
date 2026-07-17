import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Gables() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Gables</h2>

      <p className="text-base leading-relaxed">A gable is the triangular section of a wall at the end of a pitched roof. Gable takeoffs feed into the wall section as well as the OSB section of the spreadsheet.</p>

      <h3 className="font-medium text-lg text-dsld-text">Random Lumber for Gables</h3>

      <p className="text-base leading-relaxed">Trace all gables using the <strong>Elevations</strong> construct in AutoCAD using <strong>POLYLINE</strong>.</p>

      <CmsImage src="/images/cms/gables--course_0.png" alt="Random Lumber for Gables – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Pull your gables up to where your OSB takeoff is, then copy another set down.</li>

        <li>Place <strong>16'' hatch lines O.C. </strong>in one set of gables<strong>.</strong></li>

        <li><strong>Explode</strong> the set of gables you just hatched.</li>

        <li>Copy the <strong>top plate lines</strong> directly above to represent your double top plate.</li>

      </ul>

      <CmsImage src="/images/cms/gables--course_1.png" alt="Random Lumber for Gables – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the gable(s), hatch lines, and double top plate together.</li>

        <li>Multiply by 1.1.</li>

        <li>Divide by 30.</li>

        <li>Round up, then place the resulting count under the <strong>Random Lengths</strong> header of the <strong>Wall Takeoffs</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/gables--course_2.png" alt="Random Lumber for Gables – example 3" />

      <Note>Make sure you explode the hatch lines before measuring. If you skip the explode step, the individual line lengths will not be accessible for your linear footage calculation.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Wall Sheathing for Gables</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYAREA</strong> to calculate the <strong>total square footage </strong>of the other set of gables.</li>

        <li>Divide by 32.</li>

        <li>Multiply by 1.1</li>

        <li>Round to the next whole number.</li>

        <li>Add 1 for each garage.</li>

        <li>Place the resulting total into the <strong>Extra Areas</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/gables--course_3.png" alt="Wall Sheathing for Gables – example 1" />
    </div>
  );
}
