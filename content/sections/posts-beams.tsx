import CmsImage from "@/components/CmsImage";
export default function PostsBeams() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Posts &amp; Beams</h2>

      <p className="text-sm leading-relaxed">
        Posts and beams are structural and decorative elements found on porches, covered entries,
        and load-bearing locations.
      </p>

      {/* ---- Hardie Wrapped Drop Beams ---- */}
      <h3 className="font-medium text-base text-dsld-text">Hardie Wrapped Drop Beams</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>LINE</strong> to measure the length of each horizontal beam on the front and back porches. Be sure to measure these beams where they are shown on each elevation. These are usually called out on the elevations.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_0.png" alt="Dropped Beams PDF" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>TLEN</strong> to get the total linear footage of each line traced.</li>
        <li>Round to the next whole number, then enter into the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_1.png" alt="Lf of Dropped Beams XL" />

      <p className="text-sm leading-relaxed">
        The outside of the beam gets covered with <strong>12&quot;x12&apos; Non-Vented Cement Soffit Smooth</strong> and
        the inside of the beam gets covered with <strong>16&quot;x12&apos; Cement Soffit Smooth</strong>.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the total linear footage you just calculated of the horizontal beams.</li>
        <li>Multiply by 1.1.</li>
        <li>Divide by 12.</li>
        <li>Round to the next whole number and add onto the totals in the following cells:</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_10.png" alt="12x12 & 16x12 soffit XL" />

      <p className="text-sm leading-relaxed">
        Hardie uses the <strong>5/4x4x12 Fiber Cement Smooth Trim</strong> on the front and back of beams.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Calculate the same way as described above.</li>
        <li>Add to the total that may already be present in the following cell:</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_11.png" alt="5/4x4x12 XL" />

      <p className="text-sm leading-relaxed">
        For the bottom of Hardie beams, we use <strong>6 1/4x12 Smooth Fiber Cement Siding</strong>.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the total linear footage you calculated of the horizontal beams.</li>
        <li>Divide by 12.</li>
        <li>Add to the total that may already be present in the following cell.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_2.png" alt="6 1/4x12 XL" />

      {/* ---- Vinyl/Hardie Posts ---- */}
      <h3 className="font-medium text-base text-dsld-text">Vinyl/Hardie Posts</h3>

      <p className="text-sm leading-relaxed">
        These posts are usually seen on front and back porches, and will be called out on the elevations.
        Be careful when identifying these posts to not mistake them for cypress posts.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>LINE</strong> to measure the length of each vinyl post on the plan. Pay close attention to each elevation so that you are not measuring the same post twice.</li>
        <li>Use <strong>TLEN</strong> to get the total linear footage of each line traced.</li>
        <li>Round to the next whole number, then enter into the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_3.png" alt="Lf of Posts XL" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Just like the calculations for cypress posts, note the size of each vinyl post called out on the plans.</li>
        <li>Count how many posts of each size you will need. Round up if within 2 inches. (e.g. 7&apos;11&quot; posts will need a 10&apos; LAM posts and 7&apos;10&quot; posts will need 8&apos; LAM posts)</li>
        <li>Enter each count into its corresponding cell in the <strong>Framing Accessories/Cornice</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_4.png" alt="Framing Acc XL" />

      <p className="text-sm leading-relaxed">
        For the Hardie wrap around the post, cement smooth trim is needed.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>For <strong>6x6 posts</strong>, 2 pieces of 1x6x12 and 2 pieces of 1x8x12 will cover one post.</li>
        <li>For <strong>8x8 posts</strong>, 2 pieces of 1x8x12 and 2 pieces of 1x12x12 will cover one post.</li>
        <li>Enter the total count of pieces needed in its corresponding cell of the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_5.png" alt="1x6x12 and 1x8x12 XL" />

      <p className="text-sm leading-relaxed">
        Hardie post caps and bases need <strong>5/4 8x12 Fiber Cement Smooth Trim</strong>.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Each 6x6 post requires 1 piece.</li>
        <li>8x8 posts require calculations: 6&apos;8&quot; multiplied by the number of posts, then divided by 12 and rounded up to the next whole number.</li>
        <li>Enter the total count of pieces needed in its corresponding cell of the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_9.png" alt="5/4 8x12 XL" />

      <p className="text-sm leading-relaxed">
        <strong>1x4 nailers</strong> are needed for vinyl/hardie posts.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the total linear footage you calculated of the vinyl posts.</li>
        <li>Round up, then add to the total that is already present.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_6.png" alt="1x4 porches" />

      {/* ---- Tapered Posts ---- */}
      <h3 className="font-medium text-base text-dsld-text">Tapered Posts</h3>

      <p className="text-sm leading-relaxed">
        Tapered posts have a gradual decrease in diameter from the top to the bottom, or vice versa.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use <strong>LINE</strong> to sketch from the ceiling to the brick base of 1 post.</li>
        <li>Use <strong>TLEN</strong> to get the linear footage of the line you just created.</li>
        <li>If 8&apos; or less, multiply the height by 4.</li>
        <li>Multiply that total by the number of tapered posts.</li>
        <li>Divide by 4.</li>
        <li>Round up, then add to the total that may already be present.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_7.png" alt="4x8 Non-vented smooth cement XL" />

      <p className="text-sm leading-relaxed">
        If the post measured over 8&apos;, you would need to go into the parts lists and find the
        4x9 or 4x10 Non-Vented Smooth Cement Soffit to insert into the spreadsheet, then perform
        the same calculation. (Parts list explanation will be provided in the <strong>Beams</strong> section
        of this training course.)
      </p>

      {/* ---- Cypress Posts ---- */}
      <h3 className="font-medium text-base text-dsld-text">Cypress Posts</h3>

      <p className="text-sm leading-relaxed">
        Cypress posts are exterior structural and decorative posts used on porches, covered entries,
        and carports. They are counted from the Elevations of the PDF and verified from the floor plan.
      </p>

      <CmsImage src="/images/cms/posts-beams--docx_1.png" alt="Cypress Post PDF" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count every cypress post called out on the elevations. Include the front and rear porches, side entries, and carports.</li>
        <li>Place the total count in the following sections:</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--posts-beams_8.png" alt="Cypress Posts Trim XL" />
      <CmsImage src="/images/cms/posts-beams--docx_2.png" alt="Cypress Posts Bid Rates XL" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Note the size of each post called out on the plans (e.g. 6x6, 8x8).</li>
        <li>Count how many posts of each size you will need and enter each count in its corresponding cell:</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--docx_3.png" alt="Cypress Decorative XL" />

      <h3 className="font-medium text-base text-dsld-text">Cypress Post Trim</h3>
      <p className="text-sm leading-relaxed">
        If a cypress post has decorative trim around the top and bottom, we will use <strong>1x8x8 Cypress Trim</strong>.
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>One piece will cover <strong>1</strong> post top and bottom.</li>
        <li>Place your count in the <strong>1x8x8 Cypress Trim</strong> cell of the section shown in the previous image.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Cypress Post Base</h3>
      <p className="text-sm leading-relaxed">
        Follow the same count logic for post bases.
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Place each count based on their size in the <strong>Framing Accessories/Cornice</strong> section of the spreadsheet.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Cypress Beams</h3>
      <p className="text-sm leading-relaxed">
        If a cypress beam is called out on the elevation, find the appropriate size. This may require
        going to the parts lists, which will be discussed further in the <strong>Beams</strong> section
        of this training course as mentioned above.
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count how many of each size will be needed.</li>
        <li>Enter into the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/posts-beams--docx_6.png" alt="Cypress Beams on Porches XL" />
    </div>
  );
}
