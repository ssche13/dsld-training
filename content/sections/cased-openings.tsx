import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";


export default function CasedOpenings() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Cased Openings</h2>

      <p className="text-sm leading-relaxed">
        Cased openings are interior openings that do not have a door installed. Instead, the opening
        is trimmed (cased) with door casing material on both sides. These are common for pass-throughs
        between rooms, hallway transitions, and closet openings without doors.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the door schedule from the <strong>Floor Plan</strong> page of the PDF to identify all cased openings.</li>
        <li>Count how many of each cased opening type, then place each count into its corresponding cell in the <strong>Interior Doors and Trim</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/cased-openings--cased-openings_0.png" alt="Interior doors XL" />

      <h3 className="font-medium text-base text-dsld-text">Cased Openings Over 6&apos;</h3>
      <p className="text-sm leading-relaxed">
        Sizes over 6&apos; will need to be field built.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count how many cased openings are over 6&apos;.</li>
        <li>Each will need 3 pieces, so multiply that count by 3.</li>
        <li>Place the resulting total into the <strong>1x8x16 Primed PJ Pine</strong> cell in the <strong>Trim</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/cased-openings--cased-openings_1.png" alt="Cased openings 6 XL" />

      <Note>
        Do not confuse cased openings with doorways. If a door is scheduled for an opening, it is not
        a cased opening &mdash; it belongs in the doors section of the estimate.
      </Note>
    </div>
  );
}
