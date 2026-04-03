import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ColorSwatch from "@/components/ColorSwatch";
import CmsImage from "@/components/CmsImage";

export default function HipsRidgesValleys() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Hips, Ridges &amp; Valleys
      </h2>

      <p className="text-sm leading-relaxed">
        Trace all hips, ridges, and valleys on the roof plan using
        <strong> different colors</strong> so each type is easy to identify:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          <ColorSwatch color="red" /> <strong>Red</strong> = Ridge
        </li>
        <li>
          <ColorSwatch color="yellow" /> <strong>Yellow</strong> = Hip
        </li>
        <li>
          <ColorSwatch color="green" /> <strong>Green</strong> = Valley
        </li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">
        Reading the Roof Plan Page
      </h3>

      <p className="text-sm leading-relaxed">
        On the <strong>Roof Plan page</strong> of the PDF, numbers inside
        circles represent the length of that run. If a number has{" "}
        <strong>two circles</strong> around it, you need{" "}
        <strong>two pieces</strong> of that size.
      </p>

      <CmsImage src="/images/cms/hips-ridges-valleys--docx_0.png" alt="Length on Pitch from Plans" />

      <h3 className="font-medium text-base text-dsld-text">
        Starter Shingles — Hip Calculation
      </h3>

      <p className="text-sm leading-relaxed">
        Refer to the call outs on the PDF drawing representing <strong>the lengths of the hips on pitch</strong>.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Add all hip call outs together, doubling if the call out(s) is circled twice.</li>
        <li>Add the sum of all hip call outs to the total linear feet of ridges.</li>
        <li>Round up, then place your number into the <strong>Total Ridges and Hips</strong> cell of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/hips-ridges-valleys--hips-ridges-valleys_0.png" alt="Total Ridges & Hips XL" />

      <h3 className="font-medium text-base text-dsld-text">
        Hips/Ridges/Valleys 2x8
      </h3>

      <p className="text-sm leading-relaxed">
        Refer to the same call outs on the PDF drawing to count how many 2x8s
        are represented at each pitch length, then insert your count into the
        corresponding cell on the spreadsheet. This count should include hips, ridges, and valleys.
      </p>

      <CmsImage src="/images/cms/hips-ridges-valleys--hips-ridges-valleys_1.png" alt="Hips/Ridges/Valleys" />

      <Note>
        The hips and valleys &quot;on pitch&quot; are already calculated in the callouts
        from the PDF drawing.
      </Note>

      <SpreadsheetRef section="Hips/Ridges/Valleys" cell="Total Linear Feet" />
      <SpreadsheetRef section="Hips/Ridges/Valleys" cell="2x8 Counts" />
    </div>
  );
}
