import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";
import ColorSwatch from "@/components/ColorSwatch";

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

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hips-ridges-valleys--docx_0.png" alt="Length on Pitch from Plans" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Length on Pitch from Plans</p>
      </div>

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

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hips-ridges-valleys--hips-ridges-valleys_0.png" alt="Total Ridges & Hips XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Total Ridges &amp; Hips XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">
        Hips/Ridges/Valleys 2x8
      </h3>

      <p className="text-sm leading-relaxed">
        Refer to the same call outs on the PDF drawing to count how many 2x8s
        are represented at each pitch length, then insert your count into the
        corresponding cell on the spreadsheet. This count should include hips, ridges, and valleys.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hips-ridges-valleys--hips-ridges-valleys_1.png" alt="Hips/Ridges/Valleys" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Hips/Ridges/Valleys</p>
      </div>

      <Note>
        The hips and valleys &quot;on pitch&quot; are already calculated in the callouts
        from the PDF drawing.
      </Note>

      <SpreadsheetRef section="Hips/Ridges/Valleys" cell="Total Linear Feet" />
      <SpreadsheetRef section="Hips/Ridges/Valleys" cell="2x8 Counts" />
    </div>
  );
}
