import Note from "@/components/callouts/Note";

export default function Rafters() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Rafters</h2>

      <p className="text-sm leading-relaxed">
        Rafters are the sloped framing members that form the roof structure. Count common rafters, hip
        rafters, valley rafters, and jack rafters from the <strong>roof plan</strong>.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Types of Rafters</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>Common rafters</strong> — Run from the ridge to the wall plate at the standard spacing.</li>
        <li><strong>Hip rafters</strong> — Diagonal members at hip corners of the roof.</li>
        <li><strong>Valley rafters</strong> — Diagonal members where two roof planes meet in a valley.</li>
        <li><strong>Jack rafters</strong> — Shortened rafters that frame from a hip or valley to the plate.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">How to Count</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use the roof plan from the PDF to count each rafter type <strong>by number.</strong> Those
          numbers indicate the 2x6 length of each rafter.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/rafters--docx_0.png" alt="Rafters PDF" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Rafters PDF</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Be careful not to include any pitch numbers into your count.</li>
        <li>
          Place each count into the <strong>Rafters</strong> section of the spreadsheet based on length.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/rafters--docx_1.png" alt="Rafters XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Rafters XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">
        Pitch Multiplier Table
      </h3>

      <p className="text-sm leading-relaxed">
        This is a reference chart for calculating lengths on pitch. The multiplier is already in the
        spreadsheet under the <strong>Main Roof Shingles - SqFt on FLAT</strong> section. It is only
        needed in rare occasions since lengths on the plans are already on pitch, but it is important
        to know.
      </p>

      <div className="overflow-x-auto">
        <table className="border-collapse border text-sm w-full">
          <thead>
            <tr className="bg-dsld-teal/10">
              <th className="border px-4 py-2 text-left font-semibold">
                Pitch
              </th>
              <th className="border px-4 py-2 text-left font-semibold">
                Multiplier
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["4/12", "1.054"],
              ["5/12", "1.083"],
              ["6/12", "1.118"],
              ["7/12", "1.158"],
              ["8/12", "1.202"],
              ["9/12", "1.250"],
              ["10/12", "1.302"],
              ["12/12", "1.414"],
            ].map(([pitch, multiplier], i) => (
              <tr
                key={pitch}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{pitch}</td>
                <td className="border px-4 py-2">{multiplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Worked Example</h3>

      <div className="bg-gray-50 border rounded-md p-4 text-sm space-y-2">
        <p>
          <strong>Given:</strong> 14 ft horizontal run on an 8/12 pitch roof.
        </p>
        <p>
          <strong>Step 1:</strong> Find the multiplier for 8/12 pitch &rarr;{" "}
          <strong>1.202</strong>
        </p>
        <p>
          <strong>Step 2:</strong> 14 ft &times; 1.202 ={" "}
          <strong>16.83 ft</strong> (true sloped length)
        </p>
        <p>
          <strong>Result:</strong> Use <strong>16.83 ft</strong> (not the 14 ft
          horizontal measurement) when sizing lumber for this run.
        </p>
      </div>
    </div>
  );
}
