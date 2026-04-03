import ColorSwatch from "@/components/ColorSwatch";

import Note from "@/components/callouts/Note";

export default function Shelving() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Shelving</h2>

      <p className="text-sm leading-relaxed">
        Shelving includes wood shelving installed in closets, pantries, and laundry
        rooms. It is important that you use the <strong>Closet Elevations</strong> on the{" "}
        <strong>Finishes</strong> page of the PDF plan drawing for this section.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/shelving--docx_0.png" alt="Closet Elevations PDF" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Closet Elevations PDF</p>
      </div>

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
        <li>Count the number of shelf tiers if multiple levels are indicated. Wherever there are multiple shelves/rods called out in the closet elevations, the shelving sketch in AutoCAD should be copied over to match the count in the PDF.</li>
      </ul>

      <Note>
        If there are 5 shelves called out on the plans in the pantry, the shelving sketch for the pantry
        in CAD should be copied 4 times to total 5 shelves.
      </Note>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Once you have finished drawing the shelving and copying the appropriate quantities, keep one set unedited and copy over another set to the side.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/shelving--docx_1.png" alt="Shelving CAD" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Shelving CAD</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Draw a <strong>white 16x40 rectangle.</strong></li>
        <li>Repeat the process you did for crown.</li>
        <li>Group each color together to minimize confusion.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/shelving--docx_2.png" alt="Shelving count cad" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Shelving count cad</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the <ColorSwatch color="green" /> green lines and place them here:</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/shelving--shelving_0.png" alt="Shelf Support Count XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Shelf Support Count XL</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the <ColorSwatch color="red" /> red lines and place them here:</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/shelving--shelving_1.png" alt="Shelf count XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Shelf count XL</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count the <ColorSwatch color="cyan" /> cyan lines and place them here:</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/shelving--shelving_2.png" alt="Rod Count XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Rod Count XL</p>
      </div>
    </div>
  );
}
