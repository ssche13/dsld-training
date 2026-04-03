import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";
import ColorSwatch from "@/components/ColorSwatch";

export default function Bracing() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Bracing</h2>

      <p className="text-sm leading-relaxed">
        Bracing provides lateral stability. It is only calculated in places that{" "}
        <strong>do not use trusses:</strong> Louisiana, Mississippi, and South Alabama.
        Bracing requires <strong>multiple steps</strong> and utilizes the{" "}
        <strong>roof framing layout</strong> in the PDF.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Setting up AutoCAD</h3>

      <p className="text-sm leading-relaxed">
        Your bracing calculations will be done <strong>underneath</strong> the elevations.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Copy the roof plan, interior walls, exterior walls, and roof framing layout down to the work area.</li>
        <li>Copy the roof framing layout once more, off to the side.</li>
        <li>Copy the elevation into the work area <strong>four</strong> times.</li>
        <li>
          Use <strong>X-CLIP</strong> to crop each copied elevation to show each side per copy
          (left, right, rear, front).
        </li>
        <li>
          Use <strong>X-LINE</strong> to place an infinite line at each corner of the copied down
          roof lines in a distinct color. This creates guidelines for the elevations.
        </li>
        <li>
          Adjust the position of each elevation to <strong>each side</strong> of the CAD floor plan
          copied down.
        </li>
        <li>Rear elevation goes on <strong>top</strong>, rotated upside down.</li>
        <li>Front elevation goes on the <strong>bottom</strong>.</li>
        <li>
          Left and Right elevations go on their respective sides, rotated so the{" "}
          <strong>front side of the house is facing down</strong>.
        </li>
        <li>
          Snap the roofline of each elevation to the x-line on its respective side, getting close to
          the floor plan without overlaps. Each elevation should fit perfectly between the x-lines on
          each side.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_0.png" alt="Bracing Setup CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bracing Setup CAD</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>

      <p className="text-sm leading-relaxed">
        If you zoom into the roof framing layout, you will see circles with an &apos;X&apos;. Address
        these separately: circles <strong>with a tail</strong> and circles{" "}
        <strong>with no tail</strong>.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_1.png" alt="Circles Bracing PDF" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Circles Bracing PDF</p>
      </div>

      <p className="text-sm leading-relaxed">
        Also notice lines running through the circles, indicated as <strong>purlins</strong>.
      </p>

      <ImagePlaceholder label="Purlins PDF" />

      <p className="text-sm leading-relaxed">
        To begin, estimate using circles that fall on purlins first. Choose any straight run of
        purlins to start.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          <strong>Horizontal</strong> runs are measured using <strong>front and rear</strong>{" "}
          elevations.
        </li>
        <li>
          <strong>Vertical</strong> runs are measured using <strong>left and right</strong>{" "}
          elevations.
        </li>
        <li>Find the circle in the selected run with the longest tail.</li>
        <li>
          If the tail runs <strong>perpendicular</strong> to the selected run, move to the next step.
          If it is <strong>at an angle</strong>, further steps are needed:
          <ol className="list-decimal pl-6 space-y-1 mt-1">
            <li>
              Use <strong>LINE</strong> to trace from the endpoint of the tail to the midpoint of the
              circle (middle of the &apos;X&apos;).
            </li>
            <li>Rotate the line to be perpendicular to the selected run, then continue.</li>
          </ol>
        </li>
        <li>
          If the purlin run is <strong>horizontal</strong>, place a{" "}
          <strong>vertical x-line</strong> at the endpoint. If <strong>vertical</strong>, place a{" "}
          <strong>horizontal x-line</strong> at the endpoint.
        </li>
        <li>Place another x-line at the midpoint of the circle.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_2.png" alt="Bracing 1st Step CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bracing 1st Step CAD</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use <strong>LINE</strong> to draw from where one x-line intersects the roofline to where
          the other x-line intersects the specified plate/ceiling height the selected purlin run
          lands on.
        </li>
        <li>
          Line segments should run in the <strong>opposite direction of the roof line</strong>.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_3.png" alt="Bracing 2nd step CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bracing 2nd step CAD</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use <strong>TLEN</strong> to get the <strong>linear footage</strong> of the line.
        </li>
        <li>
          Round up, then use <strong>mTEXT</strong> to record the linear footage next to{" "}
          <strong>each circle on the selected purlin run</strong> on the roof framing layout copy.
        </li>
        <li>
          Repeat the entire process for <strong>each straight purlin</strong> run on the roof
          framing plans.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_4.png" alt="Bracing 3rd Step CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bracing 3rd Step CAD</p>
      </div>

      <p className="text-sm leading-relaxed">
        Color coding for recorded linear footage:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="yellow" /> <strong>Yellow</strong> &mdash; 8&apos; and below</li>
        <li><strong>White</strong> &mdash; 10&apos;</li>
        <li><ColorSwatch color="red" /> <strong>Red</strong> &mdash; 12&apos;</li>
        <li><ColorSwatch color="orange" /> <strong>Orange</strong> &mdash; 14&apos;</li>
        <li><ColorSwatch color="green" /> <strong>Green</strong> &mdash; 16&apos;</li>
        <li><ColorSwatch color="purple" /> <strong>Purple</strong> &mdash; 18&apos;</li>
        <li><ColorSwatch color="cyan" /> <strong>Cyan</strong> &mdash; 20&apos;</li>
      </ul>

      <Note>
        Always round up to the next available length (if applicable). If a line measures
        8 1/2&apos;, go with 10&apos;. This step is not necessary for lengths equal to or less than
        8&apos;.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">
        Individual Circles Not on Purlins &mdash; No Tail
      </h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Can be measured using <strong>any</strong> elevation &mdash; discern which would be most
          efficient.
        </li>
        <li>Place a vertical or horizontal x-line at the midpoint of the circle.</li>
        <li>
          Use <strong>LINE</strong> to trace from the roofline intersect to the plate height
          intersect on the elevation.
        </li>
        <li>
          Use <strong>TLEN</strong> for linear footage.
        </li>
        <li>
          Use <strong>mTEXT</strong> to record the measurement in the appropriate color.
        </li>
        <li>Repeat for each individual circle without a tail.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_5.png" alt="Bracing 4th step CAD — No Tail" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bracing 4th step CAD — No Tail</p>
      </div>
      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_6.png" alt="Bracing 4th step CAD — With Tail" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bracing 4th step CAD — With Tail</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">
        Individual Circles with Tail Not on Purlins
      </h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Place an x-line at the midpoint of the circle and the endpoint of the tail.</li>
        <li>Add the 2 extra steps for circles with tails at an angle.</li>
        <li>Discern which elevation is most efficient.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Spreadsheet Entry</h3>

      <p className="text-sm leading-relaxed">
        Once all measurements are recorded, you are ready for spreadsheet entry:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          <strong>For lengths 8&apos; or less</strong>, add together each length for the total linear
          footage of 2x4x16&apos;s.
        </li>
        <li>
          <strong>For lengths over 8&apos;</strong>, count each length{" "}
          <strong>individually</strong>.
        </li>
        <li>
          Place each total into the corresponding cell of the <strong>Roof Bracing</strong> section.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/bracing--docx_7.png" alt="Bracing XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Bracing XL</p>
      </div>
    </div>
  );
}
