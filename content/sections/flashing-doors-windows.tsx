import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function FlashingDoorsWindows() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Galvanized Steel Flashing</h2>

      <p className="text-base leading-relaxed">Galvanized steel flashing protects the home from water infiltration at critical points.</p>

      <Note>Galvanized steel flashing is not taken off in Florida, North Alabama, or Tennessee.</Note>

      <h3 className="font-medium text-lg text-dsld-text">5/8&quot; – Doors and Windows</h3>

      <p className="text-base leading-relaxed">5/8&quot; galvanized steel flashing is used for all window and door flashing.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Get the <strong>total linear footage</strong> of the doors traced in <strong><ColorWord c="yellow">yellow</ColorWord></strong>.</li>

        <li>Divide by 10.</li>

        <li>Round up to the next whole number.</li>

        <li>Count the windows.</li>

        <li><strong>Two</strong> windows can be covered by <strong>one</strong> piece.</li>

        <li>Divide by 2.</li>

        <li>Round up to the next whole number.</li>

        <li>Add both counts together and enter into the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/flashing-doors-windows--course_0.png" alt="5/8&quot; – Doors and Windows – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">1&quot; – Water Tables</h3>

      <p className="text-base leading-relaxed">1&quot; galvanized steel flashing is used for <strong>water tables only.</strong></p>

      <CmsImage src="/images/cms/flashing-doors-windows--course_1.png" alt="1&quot; – Water Tables – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Measure the <strong>total linear footage</strong> of the water tables.</li>

        <li>Divide by 10.</li>

        <li>Round up to the next whole number and enter into the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/flashing-doors-windows--course_2.png" alt="1&quot; – Water Tables – example 2" />
    </div>
  );
}
