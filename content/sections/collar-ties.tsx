import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function CollarTies() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Collar Ties</h2>

      <p className="text-sm leading-relaxed">Collar ties are used to connect opposing rafters and to prevent separation of the roof at the ridge. You will use the roof plan to <strong>count every other rafter where there are ridges</strong>.</p>

      <Note>Collar ties are not taken off in Florida, North Alabama, or Tennessee.</Note>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          <strong>LA/TX</strong>
          <CmsImage src="/images/cms/collar-ties--course_0.png" alt="Collar Ties – example 1" />
        </li>

        <li>
          <strong>MS/SAL</strong>
          <CmsImage src="/images/cms/collar-ties--course_1.png" alt="Collar Ties – example 2" />
          <p className="mt-2 leading-relaxed">In AutoCAD, use <strong>LINE</strong> and <strong>TLEN</strong> to measure the linear length from the top of the roof to the plate height where the rafter lands.</p>
          <CmsImage src="/images/cms/collar-ties--course_2.png" alt="Collar Ties – example 3" />
        </li>

        <li>For ridges at an <strong>8’’ </strong>pitch, calculations are simple: <strong>multiply the raw count of every other rafter by the linear length of line drawn in AutoCAD.</strong></li>

        <li>For ridges at any other pitch, your construction calculator will be needed for the following calculation:</li>

      </ul>

      <ol className="list-decimal pl-6 space-y-2 text-sm">

        <li>Use <strong>LINE</strong> and <strong>TLEN</strong> to get the linear footage of the span from the top of the roof to the plate height where the rafter lands.</li>

        <li>Divide by 3.</li>

        <li>Select <strong>Rise</strong> on your construction calculator.</li>

        <li>Insert the pitch in inches.</li>

        <li>Select <strong>Pitch </strong>on your construction calculator.</li>

        <li>Select <strong>Run </strong>on your construction calculator.</li>

        <li>Multiply by 2.</li>

        <li>Use the resulting total to multiply against the raw counts of every other rafter.</li>

      </ol>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Add together all totals for each ridge/rafter calculation and place into <strong>Bracing </strong>section of the spreadsheet here:</li>

      </ul>

      <CmsImage src="/images/cms/collar-ties--course_3.png" alt="Collar Ties – example 4" />
    </div>
  );
}
