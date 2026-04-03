import SpreadsheetRef from "@/components/SpreadsheetRef";
import Note from "@/components/callouts/Note";

export default function CollarTies() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Collar Ties</h2>

      <p className="text-sm leading-relaxed">
        To calculate collar ties, you will use both the plan drawing PDF and AutoCAD.
      </p>

      <p className="text-sm leading-relaxed">
        Wherever there are ridges, count every other rafter.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/collar-ties--docx_0.png" alt="Collar Ties — count every other rafter" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Collar Ties — count every other rafter</p>
      </div>

      <p className="text-sm leading-relaxed">
        In AutoCAD, use <strong>LINE</strong> and <strong>TLEN</strong> to measure the linear length from the top of the roof to the plate height where the rafter lands.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/collar-ties--docx_1.png" alt="Collar Ties — AutoCAD measurement" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Collar Ties — AutoCAD measurement</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">8/12 Pitch Ridges</h3>
      <p className="text-sm leading-relaxed">
        For ridges at an <strong>8/12 pitch</strong>, calculations are simple: multiply your count of every other rafter by the linear length of lines drawn in AutoCAD.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Other Pitch Ridges</h3>
      <p className="text-sm leading-relaxed">
        For ridges at any other pitch, a construction calculator will be needed for the following calculation:
      </p>
      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Use <strong>LINE</strong> and <strong>TLEN</strong> to get the linear length of the rafter in AutoCAD as you did before.</li>
        <li>Divide by 3.</li>
        <li>Select <strong>Rise</strong> on your construction calculator.</li>
        <li>Convert your linear length to inches outside of the calculator.</li>
        <li>Put that measurement into the calculator.</li>
        <li>Select <strong>Pitch</strong> on your construction calculator.</li>
        <li>Select <strong>Run</strong> on your construction calculator.</li>
        <li>Multiply by 2.</li>
        <li>Use the resulting total to multiply against the counts of every other rafter.</li>
      </ol>

      <p className="text-sm leading-relaxed">
        Add together all totals for each ridge/rafter calculation and place into the Bracing section of the spreadsheet:
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/collar-ties--docx_2.png" alt="Collar Ties XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Collar Ties XL</p>
      </div>

      <SpreadsheetRef section="Bracing" cell="Collar Ties" />
    </div>
  );
}
