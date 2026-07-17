import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function CeilingJoists() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Ceiling Joists</h2>

      <p className="text-base leading-relaxed">Ceiling joists span between bearing walls to support the ceiling sheetrock below and, in some cases, attic storage loads above.</p>

      <Note>Ceiling joists are not taken off in Florida, North Alabama, or Tennessee.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>LA/TX</strong></li>

      </ul>

      <p className="text-base leading-relaxed">Count the ceiling joists from ceiling framing plan on the PDF.</p>

      <CmsImage src="/images/cms/ceiling-joists--course_0.png" alt="Ceiling Joists – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Place the total counts based on size into their respective cells of the <strong>Ceiling Joists</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/ceiling-joists--course_1.png" alt="Ceiling Joists – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>MS/SAL</strong></li>

      </ul>

      <p className="text-base leading-relaxed">Ceiling joists callouts in the engineering plans will not have the lengths in them. You will use the <strong>MEASURE</strong> tool in Foxit PDF Editor to measure the length of a ceiling joist span, then count how many times they appear.</p>

      <CmsImage src="/images/cms/ceiling-joists--course_2.png" alt="Ceiling Joists – example 3" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Place the total counts based on size into their respective cells of the <strong>Ceiling Joists</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/ceiling-joists--course_3.png" alt="Ceiling Joists – example 4" />

      <h3 className="font-medium text-lg text-dsld-text">Floor Joists</h3>

      <p className="text-base leading-relaxed">Floor joists will only appear in <strong>two-story homes.</strong></p>

      <Note>Floor joists will not be taken off in North Alabama or Tennessee and will be auto calculated in Florida.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use the <strong>engineered floor joists</strong> page on the PDF plan drawing, where the beam types, sizes, and quantities are given.</li>

        <li>Place each count into its respective cell of the <strong>Floor Joist Package</strong> section of the spreadsheet.</li>

        <li>Use the parts list to fill in placeholders.</li>

      </ul>

      <CmsImage src="/images/cms/ceiling-joists--course_4.png" alt="Floor Joists – example 1" />

      <CmsImage src="/images/cms/ceiling-joists--course_5.png" alt="Floor Joists – example 2" />
    </div>
  );
}
