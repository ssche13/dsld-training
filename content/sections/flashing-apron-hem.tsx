import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function FlashingApronHem() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Galvanized Apron &amp; Hem Flashing
      </h2>

      {/* Apron Flashing */}
      <h3 className="font-medium text-base text-dsld-text">
        Apron Flashing
      </h3>

      <p className="text-sm leading-relaxed">
        Apron Flashing is used where the <strong>roof meets siding</strong> and
        the angle opens past 90 degrees to follow the roof pitch. It directs
        water away from the wall-to-roof transition. You will find apron
        flashing runs on the <strong>PDF elevation drawings</strong> wherever
        the roof plane meets a wall at a pitch.
      </p>

      <ImagePlaceholder label="Example of where Apron flashing is located in PDF drawing" />

      <ol className="list-decimal pl-6 space-y-2 text-sm">
        <li>
          <strong>Identify</strong> every roof-to-wall transition on the
          elevation drawings where the angle opens past 90&deg;.
        </li>
        <li>
          <strong>Measure</strong> the total linear feet of all those runs.
        </li>
        <li>
          <strong>Divide</strong> by <strong>10</strong> (each piece is
          10&prime; long).
        </li>
        <li>
          <strong>Round up</strong> to the next whole number.
        </li>
      </ol>

      <SpreadsheetRef section="Flashing" cell="Apron Flashing" />

      {/* Hem Angle Flashing */}
      <h3 className="font-medium text-base text-dsld-text">
        Hem Angle Flashing
      </h3>

      <p className="text-sm leading-relaxed">
        Hem Angle Flashing is used where the{" "}
        <strong>
          roof meets siding at a 90-degree angle
        </strong>
        . Unlike apron flashing (which opens past 90&deg; for the roof pitch),
        hem angle maintains a straight 90&deg; bend. Look for hem angle
        locations on the <strong>PDF detail or elevation drawings</strong>.
      </p>

      <ImagePlaceholder label="Example of where Hem Angle flashing is located in PDF drawing" />

      <ol className="list-decimal pl-6 space-y-2 text-sm">
        <li>
          <strong>Identify</strong> every exterior wall run that requires a
          hem angle from the detail or elevation drawings.
        </li>
        <li>
          <strong>Measure</strong> the total linear feet of all hem angle
          runs.
        </li>
        <li>
          <strong>Divide</strong> by <strong>10</strong> (each piece is
          10&prime; long).
        </li>
        <li>
          <strong>Round up</strong> to the next whole number.
        </li>
      </ol>

      <p className="text-sm leading-relaxed bg-gray-50 border rounded-md p-4">
        <strong>Practical example — Dormer:</strong> On a dormer, the front
        wall typically uses <strong>apron flashing</strong> (the angle opens
        past 90&deg; to follow the roof pitch), the sides use{" "}
        <strong>hem angle flashing</strong> (the roof meets the side walls at
        90&deg;), and the valleys use the{" "}
        <strong>50&prime; standard galvanized flashing</strong>.
      </p>

      <Note>
        Apron Flashing and Hem Angle are both sold in 10-foot sections. Always
        round up after dividing — partial pieces cannot be ordered.
      </Note>

      <SpreadsheetRef section="Flashing" cell="Hem Angle" />
    </div>
  );
}
