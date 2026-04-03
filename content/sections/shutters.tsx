import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function Shutters() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Shutters</h2>

      <p className="text-sm leading-relaxed">
        Shutters are decorative exterior elements mounted on either side of windows. Not all windows
        receive shutters &mdash; check the elevations carefully to determine which windows have them.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Counting Shutters</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Review each elevation page for windows with shutters.</li>
        <li>Count the total number of <strong>pairs</strong> of shutters (each window with shutters gets one pair).</li>
        <li>Note the size of each shutter &mdash; shutter height matches the window height.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Entering into the Spreadsheet</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Place the total count into the corresponding cell of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Shutters XL" />

      <Note>
        Shutters are only on windows that are called out on the elevations. Do not assume all windows receive shutters.
      </Note>
    </div>
  );
}
