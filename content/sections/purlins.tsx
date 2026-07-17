import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Purlins() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Purlins</h2>

      <p className="text-base leading-relaxed">Purlins are horizontal structural members that support roof or wall panels and transfer loads to the main structural frame. Refer to the <strong>roof framing plan</strong> to complete this section.</p>

      <Note>Purlins are not taken off in Florida, North Alabama, or Tennessee.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          <strong>LA/TX</strong>
          <CmsImage src="/images/cms/purlins--course_0.png" alt="Purlins – example 1" />
        </li>

        <li><strong>MS/SAL</strong></li>

      </ul>

      <CmsImage src="/images/cms/purlins--course_1.png" alt="Purlins – example 2" />

      <p className="text-base leading-relaxed">Purlins are represented differently in these regions, and the purlin sizes will not be called out on the engineering plans. You will need to use <strong>MEASURE</strong> in Foxit PDF Editor to get the lengths of each purlin.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Raw counts of each purlin size will go into its corresponding cell of the <strong>Purlins</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/purlins--course_2.png" alt="Purlins – example 3" />
    </div>
  );
}
