import CmsImage from "@/components/CmsImage";

export default function Mirrors() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Mirrors</h2>

      <p className="text-sm leading-relaxed">Mirror estimation is straightforward — count the number of mirrors shown on the plan and record the size of each one. Mirrors are typically located above bathroom vanities.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Place each count based on size in its corresponding cell of the <strong>Mirrors and Shower Doors</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/mirrors--course_0.png" alt="Mirrors – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>LINE</strong> to trace around the perimeter of each mirror.</li>

        <li>Use <strong>TLEN</strong> to get the<strong> total linear footage </strong>of the perimeters.</li>

        <li>Place the total linear footage into the appropriate cell of the <strong>Framed Mirrors</strong> section of the spreadsheet.</li>

        <li>Put <strong>1</strong> for the one-time installation fee.</li>

      </ul>

      <CmsImage src="/images/cms/mirrors--course_1.png" alt="Mirrors – example 2" />
    </div>
  );
}
