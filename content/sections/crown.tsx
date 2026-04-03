import ColorSwatch from "@/components/ColorSwatch";


export default function Crown() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Crown Molding</h2>

      <p className="text-sm leading-relaxed">
        Crown molding is decorative trim installed at the junction of walls and ceilings. Not all
        rooms receive crown molding &mdash; You will need to check the <strong>Finishes</strong> page
        in the PDF plan drawing for this section.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Where Crown Is Typically Installed</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Living rooms, dining rooms, kitchens, foyers, hallways, and master bedrooms are common locations.</li>
        <li>Bathrooms, closets, and utility rooms typically do not receive crown.</li>
        <li>Rooms with vaulted or tray ceilings may have special crown details &mdash; check the ceiling plan.</li>
        <li>Two rooms in an open layout may have a drop down that would need additional crown.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYLINE</strong> to trace a <ColorSwatch color="red" /> <strong>red line</strong> along the perimeter of the areas called out on the Finishes page of the PDF that will require crown molding.</li>
        <li>These lines will run through doorways and above cabinets.</li>
        <li>Draw a <strong>white 16x40 rectangle,</strong> then copy it over twice. You should have (3) 16x40 rectangles connected to each other.</li>
        <li>Copy over your crown lines into the rectangles, then <strong>explode them.</strong> (Be sure not to explode your white rectangles in this process.)</li>
        <li>Rotate all vertical lines to horizontal.</li>
        <li>Begin placing lines in the first rectangle one on top of the other. The goal is for the lines to make runs that do not exceed 16&apos;, or the width of the rectangle. Some lines will be long, some lines will be short. Because of this, you will be able to connect lines together to try to get as close to 16&apos; as possible.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/crown--docx_0.png" alt="Crown CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Crown CAD</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the <ColorSwatch color="red" /> red lines in each rectangle. (There will be instances where a singular line exceeds the 16&apos; threshold of one rectangle and continues into the next.)</li>
        <li>Place your count into the <strong>Trim</strong> section of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/crown--crown_0.png" alt="Crown XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Crown XL</p>
      </div>
    </div>
  );
}
