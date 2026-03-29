import Note from "@/components/callouts/Note";
import Tip from "@/components/callouts/Tip";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import ColorSwatch from "@/components/ColorSwatch";
import SpreadsheetRef from "@/components/SpreadsheetRef";

export default function ExteriorFloatingForming() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Exterior and Floating Forming</h2>

      <p className="text-sm leading-relaxed">
        This section measures two forming values: the <strong>exterior forming perimeter</strong> and
        the <strong>floating (interior) forming</strong>.
      </p>

      <h3 className="font-semibold text-base text-dsld-teal">Exterior Forming</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use the <strong>PolyLine</strong> feature to trace a <ColorSwatch color="red" />{" "}
          <strong>red line</strong> along the <strong>outside perimeter</strong> of the foundation
          plan.
        </li>
        <li>
          <strong>Include</strong> the exterior outline of porches.
        </li>
        <li>
          <strong>Include</strong> the garage opening.
        </li>
        <li>
          Use the <strong>total linear feet</strong> of the <ColorSwatch color="red" /> red lines to
          fill out the <strong>Exterior Forming</strong> cell under the Concrete header.
        </li>
      </ul>

      <h3 className="font-semibold text-base text-dsld-teal">Floating Forming</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Use the <strong>PolyLine</strong> feature to trace <ColorSwatch color="yellow" />{" "}
          <strong>yellow lines</strong> along <strong>interior walls</strong>.
        </li>
        <li>
          <strong>Include</strong> walls off porches.
        </li>
        <li>
          <strong>Include</strong> walls that border the garage and interior of the home.
        </li>
        <li>
          Use the <strong>total linear feet</strong> of the <ColorSwatch color="yellow" /> yellow
          lines to fill out the <strong>Floating Forming</strong> cell under the Concrete header.
        </li>
      </ul>

      <ImagePlaceholder label="Exterior and Floating Forming CAD" />

      <Tip>
        Remember: red is for the full outside perimeter (including porches and the garage opening),
        while yellow captures every interior wall segment.
      </Tip>

      <ImagePlaceholder label="Exterior and Floating Forming XL" />

      <SpreadsheetRef section="Concrete" cell="Exterior Forming" />
      <SpreadsheetRef section="Concrete" cell="Floating Forming" />
    </div>
  );
}
