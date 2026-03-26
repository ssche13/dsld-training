import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function FlashingApronHem() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Galvanized Apron &amp; Hem Flashing (Correction #16)
      </h2>

      {/* Gutter Apron Flashing */}
      <h3 className="font-medium text-base text-dsld-text">
        Gutter Apron Flashing
      </h3>

      <p className="text-sm leading-relaxed">
        Gutter Apron Flashing is a pre-bent metal strip installed along the{" "}
        <strong>eave edge of the roof where it meets the gutter</strong>. Its
        purpose is to direct water runoff from the roof deck into the gutter
        trough, preventing water from running behind the gutter and damaging
        the fascia board. You will find gutter apron runs on the{" "}
        <strong>PDF elevation drawings</strong> wherever gutters are called
        out.
      </p>

      <ImagePlaceholder label="Example of where Gutter Apron flashing is located in PDF drawing" />

      <ol className="list-decimal pl-6 space-y-2 text-sm">
        <li>
          <strong>Identify</strong> every eave run on the elevation drawings
          where gutters are shown.
        </li>
        <li>
          <strong>Measure</strong> the total linear feet of all those eave
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

      <SpreadsheetRef section="Flashing" cell="Gutter Apron" />

      {/* Hem Angle Flashing */}
      <h3 className="font-medium text-base text-dsld-text">
        Hem Angle Flashing
      </h3>

      <p className="text-sm leading-relaxed">
        Hem Angle Flashing is installed at the{" "}
        <strong>
          bottom edge of exterior wall cladding where the siding meets the
          foundation or slab
        </strong>
        . It acts as a drip edge to keep water from wicking up behind the
        cladding. Look for hem angle locations on the{" "}
        <strong>PDF detail or elevation drawings</strong>.
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

      <Note>
        Gutter Apron and Hem Angle are both sold in 10-foot sections. Always
        round up after dividing — partial pieces cannot be ordered.
      </Note>

      <SpreadsheetRef section="Flashing" cell="Hem Angle" />
    </div>
  );
}
