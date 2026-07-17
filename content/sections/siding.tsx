import CmsImage from "@/components/CmsImage";

export default function Siding() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Siding/Hardie/Board and Batten</h2>

      <p className="text-base leading-relaxed"><strong>Lapped siding</strong>, <strong>board and batten</strong>, and <strong>cedar shakes</strong> will be in the same section of the spreadsheet.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage</strong> of all polylines indicative of lapped siding, board and batten, or shake siding.</li>

        <li>Subtract the <strong>POLYAREA</strong> of any doors, windows, vents, and garage doors present.</li>

        <li>Place the resulting totals into their respective cells here:</li>

      </ul>

      <CmsImage src="/images/cms/siding--course_0.png" alt="Siding, Hardie &amp; Board and Batten – example 1" />
    </div>
  );
}
