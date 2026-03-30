import ColorSwatch from "@/components/ColorSwatch";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function Shelving() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Shelving</h2>

      <p className="text-sm leading-relaxed">
        Shelving includes wire shelving and wood shelving installed in closets, pantries, and laundry
        rooms. It is important that you use the <strong>Closet Elevations</strong> on the{" "}
        <strong>Finishes</strong> page of the PDF plan drawing for this section.
      </p>

      <ImagePlaceholder label="Closet Elevations PDF" />

      <h3 className="font-medium text-base text-dsld-text">Types of Shelving</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>Wire shelving</strong> &mdash; Standard in most closets. Measured by linear feet of shelf and rod.</li>
        <li><strong>Wood shelving</strong> &mdash; Used in pantries and linen closets. Measured by linear feet per shelf tier.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>
      <p className="text-sm leading-relaxed">
        Color-coded lines are used to depict the different shelf types:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><ColorSwatch color="red" /> <strong>Red</strong> = Shelf</li>
        <li><ColorSwatch color="cyan" /> <strong>Cyan</strong> = Rod</li>
        <li><ColorSwatch color="green" /> <strong>Green</strong> = Shelf Support</li>
      </ul>

      <p className="text-sm leading-relaxed">
        Use the closet elevations to aid in drawing your color-coded lines.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>LINE</strong> to trace shelving using the different colors indicated above to represent their respective shelf components.</li>
        <li>Count the number of shelf tiers <strong>if multiple levels are indicated.</strong> Wherever there are multiple shelves/rods called out in the closet elevations, the shelving sketch in AutoCAD should be copied over to match the count in the PDF.</li>
      </ul>

      <Note>
        Example: If there are 5 shelves in the Pantry, the shelving sketch for the pantry in CAD should be copied 4 times to total 5 shelves.
      </Note>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Once you have finished drawing the shelving and copying the appropriate quantities, keep one set unedited and copy over another set to the side.</li>
      </ul>

      <ImagePlaceholder label="Shelving CAD" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Draw a <strong>white 16x40 rectangle.</strong></li>
        <li>Repeat the process you did for crown.</li>
        <li>Group each color together to minimize confusion.</li>
      </ul>

      <ImagePlaceholder label="Shelving count cad" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the green lines and place them here:</li>
      </ul>

      <ImagePlaceholder label="Shelf Support Count XL" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the red lines and place them here:</li>
      </ul>

      <ImagePlaceholder label="Shelf count XL" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the blue lines and place them here:</li>
      </ul>

      <ImagePlaceholder label="Rod Count XL" />
    </div>
  );
}
