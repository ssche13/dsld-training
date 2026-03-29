import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function AtticStairs() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Attic Stairs</h2>

      <p className="text-sm leading-relaxed">
        Attic stairs (also called attic access or pull-down stairs) provide access to the attic
        space. They are counted from the <strong>floor plan</strong> and typically appear as a dashed
        rectangle labeled with the attic stair callout.
      </p>

      <ImagePlaceholder label="Attic Stairs PDF" />

      <h3 className="font-medium text-base text-dsld-text">Locating Attic Stairs</h3>

      <p className="text-sm leading-relaxed">
        Go to the floor plan in the PDF drawing.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Look for a callout that will usually indicate &quot;attic access&quot;.</li>
        <li><strong>For 9&apos; and 10&apos; garage ceilings</strong> — put the count of attic stairs called out on the plan in the Attic Stair — Fire rated 25-1/2x54x10&apos; Metal.</li>
        <li><strong>For 8&apos; garage ceilings</strong> — put the count of attic stairs called out on the plan in the Attic Stair — Fire rated 25-1/2x54x8&apos;9&quot; Metal.</li>
      </ul>

      <ImagePlaceholder label="Attic Stairs XL" />

      <Note>
        Most plans have one attic stair, but larger homes or homes with detached garages may
        have two or more. Always verify the count against the floor plan.
      </Note>

      <p className="text-sm leading-relaxed">
        For plans calling for the attic stairs, when the attic access is in an air-conditioned space,
        Attic Ladder Insulator is also required. You will count 1 for each ladder stair access in the
        plan and input it here:
      </p>

      <ImagePlaceholder label="Attic Stairs Bid Rates XL" />

      <SpreadsheetRef section="Trim" cell="Attic Stairs" />
    </div>
  );
}
