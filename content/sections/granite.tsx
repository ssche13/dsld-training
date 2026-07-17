import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function Granite() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Granite</h2>

      <p className="text-base leading-relaxed">Granite countertop estimation is based on the total square footage of countertop surface area. Measurements are taken from the <strong>interior construct</strong> in AutoCAD. You can also refer to the floor plan in the PDF plan drawing for assistance.</p>

      <h3 className="font-medium text-lg text-dsld-text">AutoCAD Setup</h3>

      <p className="text-base leading-relaxed">Use <strong>POLYLINE</strong> to trace color-coded lines along the perimeter of each counter or vanity top.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Trace through dashed lines. If there are no dashed lines present, you will need to trace out <strong>1 1/2in</strong> from the cabinet.</li>

      </ul>

      <CmsImage src="/images/cms/granite--course_0.png" alt="AutoCAD Setup – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong><ColorWord c="red">Red</ColorWord></strong> = Kitchen countertops or miscellaneous areas like laundry rooms and mudrooms</li>

        <li><strong><ColorWord c="yellow">Yellow</ColorWord></strong> = Bathroom vanity tops</li>

        <li><strong><ColorWord c="magenta">Magenta</ColorWord></strong> = Specialty granite like outdoor kitchens</li>

      </ul>

      <Note>Include sinks and exclude appliances like refrigerators and stoves.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Calculation</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Copy your polylines off to the side and keep a set on the plan.</li>

        <li>Use <strong>POLYAREA</strong> to get the square footage of the <strong><ColorWord c="red">red</ColorWord></strong> boxes.</li>

        <li>Round to the nearest hundredth, then enter the resulting total into the<strong> SFT of Kitchen Countertop</strong> section of the spreadsheet.</li>

        <li>Do the same for the <strong><ColorWord c="yellow">yellow</ColorWord></strong> boxes and enter the resulting total into the <strong>SFT of Vanity Top </strong>section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/granite--course_1.png" alt="Calculation – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>With the polylines still left on the plan, <strong>explode those lines.</strong></li>

        <li>Remove all lines that are <strong>not</strong> touching a wall.</li>

        <li>Pull out the remaining lines and use <strong>TLEN</strong> to get the linear footage.</li>

        <li>Convert to <strong>linear inches. </strong></li>

      </ul>

      <CmsImage src="/images/cms/granite--course_2.png" alt="Calculation – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Place <strong>total linear inches</strong> of the <strong><ColorWord c="red">red</ColorWord> </strong>lines in the<strong> Kitchen 4” splash </strong>section of the spreadsheet.</li>

        <li>Place <strong>total linear inches</strong> of the <strong><ColorWord c="yellow">yellow</ColorWord></strong> lines in the <strong>Vanity 4” splash</strong> section of the spreadsheet.</li>

      </ul>
    </div>
  );
}
