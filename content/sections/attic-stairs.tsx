import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function AtticStairs() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Attic Stairs</h2>

      <p className="text-sm leading-relaxed">Attic stairs (also called attic access or pull-down stairs) provide access to the attic space. They are counted from the <strong>floor plan</strong> and typically appear as a dashed rectangle labeled with the attic stair callout.</p>

      <CmsImage src="/images/cms/attic-stairs--course_0.png" alt="Attic Stairs – example 1" />

      <p className="text-sm leading-relaxed"><strong>Locating Attic Stairs</strong></p>

      <p className="text-sm leading-relaxed">Go to the floor plan in the PDF drawing.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Look for a callout that will usually indicate &quot;attic access&quot;.</li>

        <li>For<strong> 9’ </strong>and<strong> 10’ </strong>garage ceilings – put the count of attic stairs called out on the plan in the <strong>Attic Stair – Fire rated 25-1/2x54x10’ Metal.</strong></li>

        <li>For<strong> 8’ </strong>garage ceilings – put the count of attic stairs called out on the plan in the <strong>Attic Stair – Fire rated 25-1/2x54x8’9” Metal. </strong></li>

      </ul>

      <CmsImage src="/images/cms/attic-stairs--course_1.png" alt="Attic Stairs – example 2" />

      <Note>Most plans have one attic stair, but larger homes or homes with detached garages may have two or more. Always verify the count against the floor plan.</Note>

      <p className="text-sm leading-relaxed">For plans calling for the attic stairs in air-conditioned spaces, an <strong>Attic Ladder Insulator</strong> and is required when the attic access is in an air-conditioned space.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>You will count <strong>1</strong> for each ladder stair access in the plan and input it here:</li>

      </ul>

      <CmsImage src="/images/cms/attic-stairs--course_2.png" alt="Attic Stairs – example 3" />
    </div>
  );
}
