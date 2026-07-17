import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function CasedOpenings() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Cased Openings</h2>

      <p className="text-sm leading-relaxed">Cased openings are interior openings that do not have a door installed. Instead, the opening is trimmed (cased) with door casing material on both sides. These are common for pass-throughs between rooms, hallway transitions, and closet openings without doors.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use the <strong>door schedule</strong> from the Floor Plan page of the PDF to identify all cased openings.</li>

        <li>Count how many of each cased opening type, then place each count into its corresponding cell in the <strong>Interior Doors and Trim</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/cased-openings--course_0.png" alt="Cased Openings – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Cased openings over 6 Feet</h3>

      <p className="text-sm leading-relaxed">Sizes over 6' will need to be field built.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count how many cased openings are over 6'</li>

        <li>Each will need 3 pieces, so multiply that count by 3.</li>

        <li>Place the resulting total into the <strong>1x8x16 Primed PJ Pine</strong> cell in the <strong>Trim</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/cased-openings--course_1.png" alt="Cased openings over 6 Feet – example 1" />

      <Note>Do not confuse cased openings with doorways. If a door is scheduled for an opening, it is not a cased opening — it belongs in the doors section of the estimate.</Note>
    </div>
  );
}
