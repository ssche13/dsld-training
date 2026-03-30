import ColorSwatch from "@/components/ColorSwatch";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Tip from "@/components/callouts/Tip";
import Note from "@/components/callouts/Note";

export default function Granite() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Granite Countertops</h2>

      <p className="text-sm leading-relaxed">
        Granite countertop estimation is based on the total square footage of countertop surface area.
        Measurements are taken from the <strong>interior construct</strong> in AutoCAD. You can also
        refer to the floorplan in the PDF plan drawing for assistance.
      </p>

      <h3 className="font-medium text-base text-dsld-text">How to Measure</h3>
      <p className="text-sm leading-relaxed">
        Use <strong>POLYLINE</strong> to trace color-coded lines along the perimeter of each counter or vanity top.
      </p>

      <ImagePlaceholder label="Granite CAD" />

      <h3 className="font-medium text-base text-dsld-text">What to Include</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="red" /> <strong>Red</strong> = Kitchen countertops or miscellaneous areas like laundry rooms and mudrooms</li>
        <li><ColorSwatch color="yellow" /> <strong>Yellow</strong> = Bathroom vanity tops</li>
        <li><ColorSwatch color="magenta" /> <strong>Magenta</strong> = Specialty granite like outdoor kitchens</li>
      </ul>

      <Tip>
        Include sinks, exclude appliances like refrigerators and stoves.
      </Tip>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Copy your polylines off to the side and keep a set on the plan.</li>
        <li>Use <strong>POLYAREA</strong> to get the square footage of the <ColorSwatch color="red" /> red boxes.</li>
        <li>Round up, then enter the resulting total into the <strong>SFT of Kitchen Countertop</strong> section of the spreadsheet.</li>
        <li>Do the same for the <ColorSwatch color="yellow" /> yellow boxes and enter the resulting total into the <strong>SFT of Vanity Top</strong> section of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Granite XL" />

      <h3 className="font-medium text-base text-dsld-text">Backsplash Measurement</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>With the polylines still left on the plan, <strong>explode those lines.</strong></li>
        <li>Remove all lines that are <strong>not</strong> touching a wall.</li>
        <li>Pull out the remaining lines and get the linear footage.</li>
        <li>Convert to <strong>linear inches.</strong></li>
      </ul>

      <ImagePlaceholder label="Backsplash CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Place total linear inches of the <ColorSwatch color="red" /> red lines in the <strong>Kitchen 4&quot; splash</strong> section of the spreadsheet.</li>
        <li>Place total linear inches of the <ColorSwatch color="yellow" /> yellow lines in the <strong>Vanity 4&quot; splash</strong> section of the spreadsheet.</li>
      </ul>
    </div>
  );
}
