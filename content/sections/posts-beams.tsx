import SpreadsheetRef from "@/components/SpreadsheetRef";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function PostsBeams() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Posts &amp; Beams</h2>

      <p className="text-sm leading-relaxed">
        Posts and beams are structural and decorative elements found on porches, covered entries, and
        load-bearing locations.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Hardie Wrapped Drop Beams</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Get total linear footage of horizontal beams on front and back porches that are not cypress. These are usually called out on the elevations.</li>
      </ul>

      <ImagePlaceholder label="Dropped Beams PDF" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Enter into the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Lf of Dropped Beams XL" />

      <p className="text-sm leading-relaxed">
        The outside of the beam gets covered with 12&quot;x12&apos; Non-Vented Cement Soffit Smooth and
        the inside of the beam gets covered with 16&quot;x12&apos; Cement Soffit Smooth.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the total linear footage you just calculated of the horizontal beams, multiply by 1.1, then divide by 12.</li>
        <li>Round to the next whole number and enter into the spreadsheet in the following cells:</li>
      </ul>

      <ImagePlaceholder label="12x12 & 16x12 soffit" />

      <p className="text-sm leading-relaxed">
        Hardie uses the 5/4x4x12 Fiber Cement Smooth Trim on the front and back of beams.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Calculate the same way as described above.</li>
        <li>Add to the total that may already be present.</li>
      </ul>

      <ImagePlaceholder label="5/4x4x12 XL" />

      <p className="text-sm leading-relaxed">
        For the bottom of Hardie beams, we use 6 1/4x12 Smooth Fiber Cement Siding.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the total linear footage you calculated of the horizontal beams, then divide by 12.</li>
        <li>Add to the total that may already be present.</li>
      </ul>

      <ImagePlaceholder label="6 1/4x12 XL" />

      <h3 className="font-medium text-base text-dsld-text">Vinyl Posts</h3>

      <p className="text-sm leading-relaxed">
        Vinyl posts are usually seen on front and back porches, and will be called out on the
        elevations. Be careful when identifying these posts to not mistake them for cypress posts.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>LINE</strong> to measure the length of each vinyl post on the plan. Pay close attention to each elevation so that you are not measuring the same post twice.</li>
        <li>Get the total linear footage of each line drawn.</li>
        <li>Round to the next whole number then enter into the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Lf of Posts XL" />

      <p className="text-sm leading-relaxed">
        Just like what you did for the cypress posts, note the size of each vinyl post called on the
        plans.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count how many posts of each size you will need and enter each count in its corresponding cell.</li>
        <li>Round up if within 2 inches. (e.g. 7&apos;11&quot; posts will need a 10&apos; LAM posts and 7&apos;10&quot; posts will need 8&apos; LAM posts)</li>
      </ul>

      <ImagePlaceholder label="Framing Acc XL" />

      <p className="text-sm leading-relaxed">
        For the Hardie wrap around the post, cement smooth trim is needed.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For 6x6 posts, 2 pieces of 1x6x12 and 2 pieces of 1x8x12 will cover one post.</li>
        <li>For 8x8 posts, 2 pieces of 1x8x12 and 2 pieces of 1x12x12 will cover one post.</li>
        <li>Add the total count of pieces needed in its corresponding cell.</li>
      </ul>

      <ImagePlaceholder label="1x6x12 and 1x8x12 XL" />

      <p className="text-sm leading-relaxed">
        Hardie post caps and bases need 5/4 8x12 Fiber Cement Smooth Trim.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Each 6x6 post requires 1 piece.</li>
        <li>8x8 posts require calculations: 6&apos;8&quot; multiplied by the number of posts, then divided by 12 and rounded up to the next whole number.</li>
        <li>Add the total count of pieces needed in its corresponding cell.</li>
      </ul>

      <ImagePlaceholder label="5/4 8x12 XL" />

      <p className="text-sm leading-relaxed">
        1x4 nailers are needed for vinyl posts.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the total linear footage you calculated of the vinyl posts.</li>
        <li>Round up and add to the total that may already be present.</li>
      </ul>

      <ImagePlaceholder label="1x4 porches" />

      <h3 className="font-medium text-base text-dsld-text">Tapered Posts</h3>

      <h3 className="font-medium text-base text-dsld-text">Cypress Beams</h3>

      <p className="text-sm leading-relaxed">
        If a cypress beam is called out on the elevation, find the appropriate size. This may require
        going to the parts lists, which will be discussed further in the Beams section of this
        training course.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count how many of each size will be needed.</li>
        <li>Enter into the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Cypress Beams on Porches XL" />

      <SpreadsheetRef section="Posts & Beams" cell="Post Count" />
      <SpreadsheetRef section="Posts & Beams" cell="Beam Ends" />
    </div>
  );
}
