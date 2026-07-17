import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function Shelving() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Shelving</h2>

      <p className="text-base leading-relaxed">Shelving includes wood shelving installed in closets, pantries, and laundry rooms. It is important that you use the <strong>Closet Elevations</strong> on the<strong> Finishes</strong> page of the PDF plan drawing for this section.</p>

      <p className="text-base leading-relaxed">Estimation</p>

      <CmsImage src="/images/cms/shelving--course_0.png" alt="Shelving – example 1" />

      <p className="text-base leading-relaxed">Color-coded lines are used to depict the different shelf types:</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong><ColorWord c="red">Red</ColorWord></strong> = Shelf</li>

        <li><strong><ColorWord c="cyan">Cyan</ColorWord> </strong>= Rod</li>

        <li><strong><ColorWord c="green">Green</ColorWord></strong> = Shelf Support</li>

      </ul>

      <p className="text-base leading-relaxed">Use the closet elevations to aid in drawing your color-coded lines.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>LINE</strong> to trace shelving using the different colors indicated above to represent their respective shelf components.</li>

        <li>Count the number of shelf tiers <strong>if multiple levels are indicated.</strong> Wherever there are multiple shelves/rods called out in the closet elevations, the shelving sketch in AutoCAD should be copied over to match the count in the PDF.</li>

        <li>Once you have finished drawing the shelving and copying the appropriate quantities, keep one set unedited and copy over another set to the side.</li>

      </ul>

      <Note>If there are 5 shelves called out on the plans in the pantry, the shelving sketch for the pantry in CAD should be copied 4 times to total 5 shelves.</Note>

      <CmsImage src="/images/cms/shelving--course_1.png" alt="Shelving – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Draw a <strong><ColorWord c="white">white</ColorWord> 16x40 rectangle.</strong></li>

        <li>Repeat the process you did for crown.</li>

        <li>Group each color together to minimize confusion.</li>

      </ul>

      <CmsImage src="/images/cms/shelving--course_2.png" alt="Shelving – example 3" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count the <strong><ColorWord c="green">green</ColorWord></strong> lines and place them here:</li>

      </ul>

      <CmsImage src="/images/cms/shelving--course_3.png" alt="Shelving – example 4" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count the <strong><ColorWord c="red">red</ColorWord> </strong>lines and place them here:</li>

      </ul>

      <CmsImage src="/images/cms/shelving--course_4.png" alt="Shelving – example 5" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count the <strong><ColorWord c="cyan">cyan</ColorWord></strong> lines and place them here:</li>

      </ul>

      <CmsImage src="/images/cms/shelving--course_5.png" alt="Shelving – example 6" />

      <h3 className="font-medium text-lg text-dsld-text">Two-Story Homes</h3>

      <p className="text-base leading-relaxed">Add a standard count of <strong>3</strong> to the 1x12x16 MDF quantity for all two-story homes.</p>
    </div>
  );
}
