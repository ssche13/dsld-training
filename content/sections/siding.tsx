import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function Siding() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Siding</h2>

      <p className="text-sm leading-relaxed">
        Lapped Siding and Board and Batten will be in the same section on the spreadsheet.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>POLYAREA</strong> to get the <strong>total square footage</strong> of all polylines indicative of lapped siding.</li>
        <li>Subtract out doors, windows, vents, and garage doors.</li>
        <li>Do the same for Board and Batten (if applicable).</li>
        <li>Place the resulting totals here:</li>
      </ul>

      <ImagePlaceholder label="Siding XL" />

      <h3 className="font-medium text-base text-dsld-text">Board and Batten</h3>

      <p className="text-sm leading-relaxed">
        Board and Batten walls may require flashing.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get the <strong>total linear footage</strong> of horizontal breaks in the sheets (i.e. two sheets stacked on top of each other). <strong><u>NOTE:</u></strong> Board and Batten is only sold in 8&apos;, 9&apos;, and 10&apos; sheets, so any plate height taller than that will require sheets to be stacked.</li>
        <li>Divide by 10.</li>
        <li>Round up to the next whole number, then place the resulting count here:</li>
      </ul>

      <ImagePlaceholder label="Flashing 5/8 XL" />

      <p className="text-sm leading-relaxed">
        Board and Batten sheets are count items.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Copy over your Board and Batten areas off to the side, excluding anything traced in yellow.</li>
        <li>Similar to what you did for the porches, draw 4x8 boxes using <strong>POLYLINE</strong> to fill in the board and batten areas you traced. Consider the waste factor that is left over from boxes that exceed the area of the traced sheets so that you are not over-estimating.</li>
        <li>For <strong>8&apos;</strong> plate heights, your count will go in the <strong>4x8 1/4 Non-Vented Smooth Cement Soffit</strong> cell.</li>
        <li>For <strong>9&apos; or 10&apos;</strong> plate heights, place the count in the <strong>4x10 Smooth Hardie Panel</strong> cell.</li>
      </ul>

      <ImagePlaceholder label="4x10 hardie XL" />
      <ImagePlaceholder label="4x8 1/4 soffit XL" />

      <p className="text-sm leading-relaxed">
        Board and Batten strips also need to be accounted for.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Copy over your Board and Batten areas off to the side once again, <strong>this time including doors but excluding windows or vents.</strong></li>
        <li>Hatch each area at <strong>16&quot; O.C.</strong></li>
        <li>Explode and pull those lines out.</li>
        <li>Get the <strong>total linear footage</strong> of the hatch lines.</li>
        <li>Multiply by 1.2.</li>
        <li>Divide by 12.</li>
        <li>Round up to the next whole number, then place your count here:</li>
      </ul>

      <ImagePlaceholder label="1x2x12 Trim XL" />

      <h3 className="font-medium text-base text-dsld-text">5/4x4x12 Cement Smooth Trim</h3>
      <p className="text-sm leading-relaxed">
        This is needed for windows, doors, vents, garages, corners, and beams.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>LINE</strong> in a color of your choice to trace along the perimeter of windows, doors, and vents once again. <strong>For the sides,</strong> trace <u>inside</u> of the trim. <strong>For the tops and bottoms,</strong> trace <u>outside</u> of the trim. <strong>For windows with less than 6&quot; of separation between them,</strong> treat the perimeter as <strong>one</strong> window and trace the separation between the two in a <u>different color</u>.</li>
        <li>Pull those lines out.</li>
        <li>Rotate your vertical lines to horizontal.</li>
        <li>Draw a <strong>white 12x15 rectangle</strong> and place your lines in the rectangle one on top of the other, equal to what you did for crown and shelving. The goal is the same: for the lines to make runs that do not exceed 12&apos;, or the width of the rectangle. You will be able to connect some lines together to try to get as close to 12&apos; as possible. <strong>If you have more than one color,</strong> be sure to group your lines by color.</li>
        <li>Count the lines in the rectangle.</li>
        <li>Add 1 for each inside corner.</li>
        <li>Add 2 for each outside corner.</li>
        <li>Place the total count in the following cells:</li>
      </ul>

      <ImagePlaceholder label="5/4x4x12 XL" />
      <ImagePlaceholder label="5/6x4x12 XL" />

      <p className="text-sm leading-relaxed">
        You will only insert a count in the 5/6x4x12 cell if you&apos;re dealing with windows that have less than 6&quot; of separation between them. The separation will be handled by the <strong>5/6x4x12 Cement Smooth Trim</strong>.
      </p>

      <h3 className="font-medium text-base text-dsld-text">6 1/4x12 Smooth Fiber Cement Siding</h3>

      <p className="text-sm leading-relaxed">
        This is for <strong>lapped siding only.</strong>
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the <strong>Total SF Lap Siding</strong> calculated previously.</li>
        <li>Multiply it by 1.1.</li>
        <li>Divide by the exposure, which is typically 5&quot;.</li>
        <li>Round to the next whole number and enter into the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="6 1/4x12 XL" />

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/manual-notes/imagee.png" alt="Soffit, Fascia and Cement Trim spreadsheet section" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Soffit &amp; Fascia / Cement Trim spreadsheet section</p>
      </div>

      <Note>
        Some cells may already have quantities in them from previous calculations. Do not delete those counts, simply add onto them.
      </Note>
    </div>
  );
}
