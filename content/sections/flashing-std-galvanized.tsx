import SpreadsheetRef from "@/components/SpreadsheetRef";


export default function FlashingStdGalvanized() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Standard Galvanized Flashing
      </h2>

      <p className="text-sm leading-relaxed">
        Standard Galvanized Flashing is used to line <strong>roof valleys</strong>.
        Each piece is <strong>50 feet long</strong>. The goal is to make solid runs
        per valley — you want continuous coverage without seams where possible.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image8.png" alt="Shingles and Flashing spreadsheet section" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Shingles &amp; Flashing spreadsheet section</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">
        Counting Method
      </h3>

      <ol className="list-decimal pl-6 space-y-2 text-sm">
        <li>
          <strong>Measure</strong> each valley run from the roof plan in AutoCAD.
        </li>
        <li>
          <strong>Determine pieces per valley:</strong> If a valley run is under
          50&prime;, it needs <strong>1 piece</strong>. If over 50&prime;, it needs{" "}
          <strong>2 pieces</strong>.
        </li>
        <li>
          <strong>Combine shorter valleys:</strong> If two shorter valleys together
          total 50&prime; or less, they can share a single piece of flashing.
        </li>
      </ol>

      <h3 className="font-medium text-base text-dsld-text">Worked Example</h3>

      <div className="bg-gray-50 border rounded-md p-4 text-sm space-y-2">
        <p>
          <strong>Given:</strong> 4 valleys — A (22&prime;), B (23&prime;), C (26&prime;), D (25&prime;).
        </p>
        <p>
          <strong>Valley A + Valley B:</strong> 22 + 23 = 45&prime; — these can share{" "}
          <strong>1 piece</strong> (under 50&prime;).
        </p>
        <p>
          <strong>Valley C + Valley D:</strong> 26 + 25 = 51&prime; — these{" "}
          <strong>cannot</strong> share one piece (over 50&prime;), so they need{" "}
          <strong>2 pieces</strong>.
        </p>
        <p>
          <strong>Grand total: 3 pieces</strong> of standard galvanized flashing.
        </p>
      </div>

      <SpreadsheetRef section="Flashing" cell="Std. Galvanized Flashing" />
    </div>
  );
}
