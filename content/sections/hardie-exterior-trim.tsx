import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";
import ColorWord from "@/components/ColorWord";

export default function HardieExteriorTrim() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Hardie and Exterior Trim</h2>

      <Note>Hardie and exterior trim will only be taken off in Louisiana and Texas.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Soffit</h3>

      <p className="text-base leading-relaxed">Soffit is the horizontal surface that runs underneath the roof’s overhang. The overhang size determines whether <strong>6&quot;</strong>, <strong>12&quot;</strong>, or <strong>16&quot; soffit</strong> is used.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>Vented soffit</strong> is on the perimeter of the home.</li>

        <li>Gables, pitches, and dormers are <strong>non-vented</strong>.</li>

        <li>Porches will have a 16'' soffit in <strong>most</strong> cases, not all.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_0.png" alt="Soffit – example 1" />

      <p className="text-base leading-relaxed">Copy your drip edge sketch off to the side and adjust with the following colors:</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong><ColorWord c="orange">Orange</ColorWord></strong> - 12x12 Non-Vented Soffit (gables/dormers with brick cladding)</li>

        <li><strong><ColorWord c="red">Red</ColorWord></strong> - 12x12 Vented Soffit (where brick is located on the perimeter of the home, usually already drawn from your drip edge sketch)</li>

        <li><strong><ColorWord c="cyan">Cyan</ColorWord></strong> - 16x12 Non-Vented Soffit (gables/dormers with any other cladding besides brick)</li>

        <li><strong><ColorWord c="white">White</ColorWord></strong> - 16x12 Vented Soffit (where porches are located or the perimeter with any other cladding besides brick)</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_1.png" alt="Soffit – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of each run of the <strong>same soffit type</strong>.</li>

        <li>Multiply by 1.15.</li>

        <li>Divide by 12.</li>

        <li>Round up to the next whole number, then place the resulting count into its corresponding cell in the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_2.png" alt="Soffit – example 3" />

      <h3 className="font-medium text-lg text-dsld-text">Fascia</h3>

      <p className="text-base leading-relaxed">Fascia will run everywhere soffit is installed, both vented and non-vented. Fascia is the vertical board that covers the end of roof rafters. <strong>1x6x12 Cement Smooth Trim</strong> pieces are needed around the perimeter of the home.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use the <strong>total linear footage</strong> of the drip edge you just calculated.</li>

        <li>Multiply by 1.1.</li>

        <li>Divide by 12.</li>

        <li>Add 1 extra.</li>

        <li>Place the resulting count into the <strong>Real Material Soffit and Fascia</strong> section of the estimating spreadsheet.</li>

      </ul>

      <p className="text-base leading-relaxed">Example: 180 ft total drip edge → 180*1.1 / 12 = 15 + 1 = 18 pieces of 1x6x12 Cement Smooth Trim.</p>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_3.png" alt="Fascia – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Birdboxes</h3>

      <p className="text-base leading-relaxed">Birdboxes provide a solid, finished backing for trim and siding to terminate against. 4 boxes come from one piece of <strong>1x12x12 Cement Smooth Trim</strong>.</p>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_4.png" alt="Birdboxes – example 1" />

      <CmsImage src="/images/cms/hardie-exterior-trim--course_5.png" alt="Birdboxes – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count birdboxes from the elevation page of the PDF plan drawing.</li>

        <li>Divide by 4.</li>

        <li>Round up, then place the resulting count into the corresponding cell in the<strong> Real Material Soffit and Fascia </strong>section of the spreadsheet.</li>

      </ul>

      <p className="text-base leading-relaxed">Example: 6 birdboxes → 6 / 4 = 1.5 → 2 pieces</p>

      <h3 className="font-medium text-lg text-dsld-text">Board and Batten Flashing</h3>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_6.png" alt="Board and Batten Flashing – example 1" />

      <p className="text-base leading-relaxed">Board and Batten walls may require flashing.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of horizontal breaks in the sheets. (i.e. two sheets stacked on top of each other)</li>

        <li>Board and Batten is only sold in 8’, 9’, and 10’ sheets, so any plate height taller than that will require sheets to be stacked.</li>

        <li>Divide by 10.</li>

        <li>Round up to the next whole number, then place the resulting count here:</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_7.png" alt="Board and Batten Flashing – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Board and Batten Sheets</h3>

      <p className="text-base leading-relaxed">Board and Batten sheets are count items.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Copy over your Board and Batten polylines off to the side, excluding anything traced in <ColorWord c="yellow">yellow</ColorWord>.</li>

        <li>
          Repeat the process you did for the porches, draw <strong>4x8 boxes</strong> to fill in the board and batten areas you traced. Consider the waste factor that is left over from boxes that exceed the area of the traced sheets so that you are not overestimating.
          <CmsImage src="/images/cms/hardie-exterior-trim--course_8.png" alt="Board and Batten Sheets – example 1" />
        </li>

        <li>For <strong>8’</strong> plate heights, your count will go in the <strong>4x8 1/4 Non-Vented Smooth Cement Soffit</strong> cell.</li>

        <li>For <strong>9’ or 10’</strong> plate heights, place the count in the <strong>4x10 Smooth Hardie Panel</strong> cell.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_9.png" alt="Board and Batten Sheets – example 2" />

      <CmsImage src="/images/cms/hardie-exterior-trim--course_10.png" alt="Board and Batten Sheets – example 3" />

      <h3 className="font-medium text-lg text-dsld-text">Board and Batten Strips</h3>

      <p className="text-base leading-relaxed">Board and Batten strips also need to be accounted for.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Copy over your Board and Batten polylines off to the side once again, this time<strong> including doors </strong>but<strong> excluding windows or vents. </strong></li>

        <li>Hatch each polyline at <strong>16” O.C.</strong></li>

        <li>
          Explode and pull those lines out.
          <CmsImage src="/images/cms/hardie-exterior-trim--course_11.png" alt="Board and Batten Strips – example 1" />
        </li>

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage </strong>of the hatch lines.</li>

        <li>Multiply by 1.2.</li>

        <li>Divide by 12.</li>

        <li>Round up to the next whole number, then place your count here:</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_12.png" alt="Board and Batten Strips – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">5/4x4x12 Cement Smooth Trim</h3>

      <p className="text-base leading-relaxed">This is needed for windows, doors, vents, garages, corners, and beams.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          Use <strong>LINE</strong> in a color of your choice to trace along the perimeter of windows, doors, and vents once again. <strong>For the sides,</strong> trace inside of the trim. <strong>For the tops and bottoms,</strong> trace outside of the trim. <strong>For windows with 6” or less separation between them,</strong> treat the perimeter as <strong>one</strong> window and trace the separation between the two in a different color.
          <CmsImage src="/images/cms/hardie-exterior-trim--course_13.png" alt="5/4x4x12 Cement Smooth Trim – example 1" />
        </li>

        <li>Pull those lines out.</li>

        <li>Rotate your vertical lines to horizontal.</li>

        <li>
          Draw a <strong><ColorWord c="white">white</ColorWord> 12x15 rectangle</strong> and place your lines in the rectangle one on top of the other, equal to what you did for crown and shelving.
          <p className="mt-2 text-base leading-relaxed">The goal is the same: for the lines to make runs that do not exceed 12', or the width of the rectangle. You will be able to connect some lines together to try to get <strong>as close to 12' as possible.</strong> If you have more than one color, be sure to group your lines by color.</p>
          <CmsImage src="/images/cms/hardie-exterior-trim--course_14.png" alt="5/4x4x12 Cement Smooth Trim – example 2" />
        </li>

        <li>Count the lines in the rectangle.</li>

        <li>Add <strong>1</strong> for each inside corner.</li>

        <li>Add <strong>2</strong> for each outside corner.</li>

        <li>Place the total count in the following cells:</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_15.png" alt="5/4x4x12 Cement Smooth Trim – example 3" />

      <p className="text-base leading-relaxed">You will only insert a count in the 5/6x4x12 cell if you're dealing with windows that have less than 6'' of separation between them. The separation will be handled by the <strong>5/6x4x12 Cement Smooth Trim</strong>.</p>

      <Note>This only applies to where windows, doors, and vents are on lapped siding or board and batten cladding.</Note>

      <h3 className="font-medium text-lg text-dsld-text">6 1/4x12 Smooth Fiber Cement Siding</h3>

      <p className="text-base leading-relaxed">This is for<strong> lapped siding only.</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use the <strong>Total SF Lap Siding</strong> calculated previously.</li>

        <li>Multiply it by 1.1.</li>

        <li>Divide by the exposure, which is typically 5''.</li>

        <li>Round to the next whole number and enter into the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_16.png" alt="6 1/4x12 Smooth Fiber Cement Siding – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">1x4x12 Cement Primed Smooth</h3>

      <p className="text-base leading-relaxed"><strong>1x4x12 Cement Primed Smooth</strong> is used to connect the porch to the soffit where there is <strong>stucco</strong> or <strong>brick cladding</strong> <strong>only</strong>.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage of your porches and drip edge.</strong></li>

        <li><strong>Porches will only be counted where there is stucco or brick cladding.</strong> If the elevation shows any other type of cladding at the porches, <strong>do not include it in this count.</strong></li>

        <li>If the stucco has crown, it will not be counted.</li>

        <li>Multiply by 1.15.</li>

        <li>Divide by 12.</li>

        <li>Round to the next whole number and place the resulting total into the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_17.png" alt="1x4x12 Cement Primed Smooth – example 1" />

      <Note>Some cells may already have quantities in them from previous calculations. Do not delete those counts, simply add onto them.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Drop Beams - Non-Vented Soffit</h3>

      <p className="text-base leading-relaxed">The outside of the beam gets covered with <strong>12”x12’ Non-Vented Cement Soffit Smooth</strong> and the inside of the beam gets covered with <strong>16”x12’ Non-Vented Cement Soffit Smooth</strong>.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use the <strong>total linear footage</strong> you just calculated of the horizontal beams.</li>

        <li>Multiply by 1.1.</li>

        <li>Divide by 12.</li>

        <li>Round to the next whole number and add onto the totals in the following cells:</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_18.png" alt="Drop Beams - Non-Vented Soffit – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Drop Beams - Cement Smooth Trim</h3>

      <p className="text-base leading-relaxed">Hardie uses the <strong>5/4x4x12 Fiber Cement Smooth Trim</strong> on the front and back of beams.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Calculate the same way as described above.</li>

        <li>Add to the total that may already be present in the following cell:</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_19.png" alt="Drop Beams - Cement Smooth Trim – example 1" />

      <p className="text-base leading-relaxed">For the bottom of Hardie beams, we use <strong>6 1/4x12 Smooth Fiber Cement Siding</strong>.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use the <strong>total linear footage</strong> you calculated of the horizontal beams.</li>

        <li>Divide by 12.</li>

        <li>Round up, then add to the total that may already be present in the following cell.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_20.png" alt="Drop Beams - Cement Smooth Trim – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Vinyl Posts – Cement Smooth Trim</h3>

      <p className="text-base leading-relaxed">For the Hardie wrap around the post, cement smooth trim is needed.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>For <strong>6x6</strong> posts, <strong>2 pieces of 1x6x12</strong> and <strong>2 pieces of 1x8x12</strong> will cover <strong>one</strong> post.</li>

        <li>For <strong>8x8</strong> posts, <strong>2 pieces of 1x8x12</strong> and <strong>2 pieces of 1x12x12</strong> will cover <strong>one</strong> post.</li>

        <li>Enter the total count of pieces needed in its corresponding cell of the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_21.png" alt="Vinyl Posts – Cement Smooth Trim – example 1" />

      <p className="text-base leading-relaxed">Hardie post caps and bases need <strong>5/4 8x12 Fiber Cement Smooth Trim</strong>.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Each <strong>6x6</strong> post requires <strong>1</strong> piece.</li>

        <li><strong>8x8</strong> posts require calculations: 6’8” multiplied by the number of posts, then divided by 12 and rounded up to the next whole number</li>

        <li>Enter the total count of pieces needed in its corresponding cell of the <strong>Real Material Soffit and Fascia</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_22.png" alt="Vinyl Posts – Cement Smooth Trim – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Tapered Posts</h3>

      <p className="text-base leading-relaxed">Tapered posts have a gradual decrease in diameter from the top to the bottom, or vice versa.</p>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_23.png" alt="Tapered Posts – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>LINE </strong>to sketch from the ceiling to the brick base of <strong>1</strong> post.</li>

        <li>Use <strong>TLEN</strong> to get the <strong>linear footage</strong> of the line you just created.</li>

        <li><strong>If</strong> <strong>8' or less</strong>, multiply the height by 4.</li>

        <li>Multiply that total by the number of tapered posts.</li>

        <li>Divide by 4.</li>

        <li>Round up, then add to the total that may already be present.</li>

      </ul>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_24.png" alt="Tapered Posts – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>If the post measured over 8'</strong>, you would need to go into the parts lists and find the <strong>4x9</strong> or <strong>4x10 Non-Vented Smooth Cement Soffit </strong>to insert into the spreadsheet, then perform the same calculation. (Parts list explanation will be provided in the <strong>Beams</strong> section of this training course.)</li>

      </ul>

      <h3 className="font-medium text-lg text-dsld-text">Exterior Trim</h3>

      <p className="text-base leading-relaxed">Exterior trim quantities will be pulled directly from the information inputted from the previous section.</p>

      <CmsImage src="/images/cms/hardie-exterior-trim--course_25.png" alt="Exterior Trim – example 1" />

      <p className="text-base leading-relaxed">Notice how each cell has a description. Use the lines and polylines drawn in AutoCAD from previous calculations to fill in the corresponding cells that apply to your plan.</p>
    </div>
  );
}
