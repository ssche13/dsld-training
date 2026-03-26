import SpreadsheetRef from "@/components/SpreadsheetRef";
import Tip from "@/components/callouts/Tip";


export default function FlashingStdGalvanized() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Standard Galvanized Flashing (Correction #15)
      </h2>

      <p className="text-sm leading-relaxed">
        Standard Galvanized Flashing — labeled{" "}
        <strong>20x50 STD GALV FLASHING</strong> in the estimating
        spreadsheet — is used to line <strong>roof valleys</strong>. Each
        piece is 20&Prime; wide and 50&Prime; (approximately 4.17&prime;)
        long. Because every valley requires flashing on{" "}
        <strong>both sides</strong>, you need <strong>two pieces per
        valley length</strong> covered.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/image8.png" alt="Shingles and Flashing spreadsheet section" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Shingles &amp; Flashing spreadsheet section</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">
        Calculation Steps
      </h3>

      <ol className="list-decimal pl-6 space-y-2 text-sm">
        <li>
          <strong>Measure</strong> the total linear feet of all roof
          valleys from the roof plan in AutoCAD.
        </li>
        <li>
          <strong>Divide</strong> the total linear feet by{" "}
          <strong>50</strong> (each piece covers roughly 50&Prime; of
          valley length).
        </li>
        <li>
          <strong>Multiply</strong> the result by <strong>2</strong>{" "}
          because each valley needs a piece on each side.
        </li>
        <li>
          <strong>Round up</strong> to the next whole number — you cannot
          order a fraction of a piece.
        </li>
      </ol>

      <h3 className="font-medium text-base text-dsld-text">Worked Example</h3>

      <div className="bg-gray-50 border rounded-md p-4 text-sm space-y-2">
        <p>
          <strong>Given:</strong> 3 valleys, each 20&prime; long.
        </p>
        <p>
          <strong>Step 1:</strong> Total linear feet = 3 &times; 20 ={" "}
          <strong>60&prime;</strong>
        </p>
        <p>
          <strong>Step 2:</strong> 60 &divide; 50 = <strong>1.2</strong>
        </p>
        <p>
          <strong>Step 3:</strong> 1.2 &times; 2 = <strong>2.4</strong>
        </p>
        <p>
          <strong>Step 4:</strong> Round up &rarr; <strong>3 pieces</strong>
        </p>
      </div>

      <Tip>
        Simplified formula: total valley lnft &divide; 50 &times; 2, then
        round up to the nearest whole number.
      </Tip>

      <SpreadsheetRef section="Flashing" cell="Std. Galvanized Flashing" />
    </div>
  );
}
