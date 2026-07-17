import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function Crown() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Crown</h2>

      <p className="text-base leading-relaxed">Crown molding is decorative trim installed at the junction of walls and ceilings. Not all rooms receive crown molding — You will need to check the <strong>Finishes</strong> page in the PDF plan drawing for this section.</p>

      <h3 className="font-medium text-lg text-dsld-text">Where Crown Is Typically Installed</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Living rooms, dining rooms, kitchens, foyers, hallways, and master bedrooms are common locations.</li>

        <li>Bathrooms, closets, and utility rooms typically do not receive crown.</li>

        <li>Rooms with vaulted or tray ceilings may have special crown details — check the ceiling plan.</li>

        <li>Two rooms in an open layout may have a drop down that would need additional crown.</li>

      </ul>

      <h3 className="font-medium text-lg text-dsld-text">Calculation</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>POLYLINE</strong> to trace a <strong><ColorWord c="red">red</ColorWord> </strong>line along the perimeter of the areas called out on the <strong>Finishes</strong> page of the PDF that will require crown molding.</li>

        <li>These lines will run through doorways and above cabinets.</li>

        <li>Draw a <strong><ColorWord c="white">white</ColorWord> 16x40 rectangle</strong>, then copy it over twice. You should have <strong>(3)</strong> 16x40 rectangles connected to each other.</li>

        <li>Copy over your crown lines into the rectangles, then explode them. <strong>Be sure not to explode your <ColorWord c="white">white</ColorWord> rectangles in this process.</strong></li>

        <li>Rotate all vertical lines to horizontal.</li>

        <li>Begin placing lines in the first rectangle one on top of the other. The goal is for the lines to make runs that do not exceed 16', or the width of the rectangle. Some lines will be long; some lines will be short. Because of this, you will be able to connect lines together to try to get <strong>as close to 16' as possible.</strong></li>

      </ul>

      <CmsImage src="/images/cms/crown--course_0.png" alt="Calculation – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count the <strong><ColorWord c="red">red</ColorWord></strong> lines in each rectangle. <strong>There will be instances where a singular line exceeds the 16' threshold of one rectangle and continues into the next.</strong></li>

        <li>Place your count into the <strong>Trim</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/crown--course_1.png" alt="Calculation – example 2" />
    </div>
  );
}
