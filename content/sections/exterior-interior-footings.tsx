import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function ExteriorInteriorFootings() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Exterior and Interior Footings</h2>

      <p className="text-sm leading-relaxed">This is the final foundation estimate. It captures <strong>all footings — both exterior and interior</strong> — using color-coded lines to distinguish between the two types.</p>

      <h3 className="font-medium text-base text-dsld-text">Louisiana and Texas Plans</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>All footings marked <strong>I</strong> on the PDF drawing will be traced in <strong>yellow</strong> (interior footings).</li>

        <li>All other marked footings will be traced in <strong>red</strong> (exterior footings).</li>

      </ul>

      <p className="text-sm leading-relaxed">Where possible, one footing should never intersect another footing. A gap should always be between two separate footings to ensure every corner is accounted for without double-estimating.</p>

      <CmsImage src="/images/cms/exterior-interior-footings--course_0.png" alt="Louisiana and Texas Plans – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>total linear footage</strong> of the <strong>red</strong> and <strong>yellow</strong> lines, respectively.</li>

        <li>Round up the totals, then place the <strong>red</strong> quantities into the <strong>Exterior Footings </strong>cell and the <strong>yellow</strong> quantities into the<strong> Interior Footings</strong> cell under the Concrete header. .</li>

      </ul>

      <CmsImage src="/images/cms/exterior-interior-footings--course_1.png" alt="Louisiana and Texas Plans – example 2" />

      <h3 className="font-medium text-base text-dsld-text">Mississippi and South Alabama Plans</h3>

      <p className="text-sm leading-relaxed">Concrete footings are taken off based on third-party engineering plans from Bethel Engineering. The logic for drawing these footings in AutoCAD is the same as a Louisiana or Texas plan, however you will need to refer to engineering to determine which interior walls are load bearing for footings.</p>

      <CmsImage src="/images/cms/exterior-interior-footings--course_2.png" alt="Mississippi and South Alabama Plans – example 1" />

      <Note>There are usually fewer interior footings on MS/SAL plans.</Note>

      <p className="text-sm leading-relaxed">Mississippi and South Alabama plans require concrete footings to be broken down further than Louisiana and Texas plans. This is what an MS/SAL concrete footing estimate looks like in the spreadsheet:</p>

      <CmsImage src="/images/cms/exterior-interior-footings--course_3.png" alt="Mississippi and South Alabama Plans – example 2" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li><strong>Garage/porch step footing</strong> = Interior garage/porch walls</li>

        <li><strong>Garage door open</strong> = Garage header</li>

        <li><strong>Interior footing</strong> = Interior load bearing walls</li>

        <li><strong>Exterior stucco/siding footing</strong> = Exterior walls with stucco or siding cladding</li>

        <li><strong>Exterior brick footing</strong> = Exterior walls with brick cladding</li>

        <li><strong>2x2 square footings</strong> = Raw count of any posts present on front or back porch</li>

        <li><strong>Porch column footing</strong> = Perimeter of any columns present on front or back porch</li>

      </ul>

      <p className="text-sm leading-relaxed">As mentioned before, your lines will be executed the same as Louisiana and Texas, but the color of your lines will match the cells in your MS/SAL spreadsheet. Your CAD lines should look like this:</p>

      <CmsImage src="/images/cms/exterior-interior-footings--course_4.png" alt="Mississippi and South Alabama Plans – example 3" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Once your lines are drawn, get the <strong>total linear footage</strong> of the lines by color and insert the quantities into their respective cells in the spreadsheet.</li>

      </ul>

      <h3 className="font-medium text-base text-dsld-text">Florida, North Alabama, and Tennessee Plans</h3>

      <p className="text-sm leading-relaxed">Concrete footings in Florida, North Alabama, and Tennessee are taken off using third-party engineering plans from Wilson Lumber. As mentioned above, the logic for drawing the CAD lines is the same across all regions. You will use engineering to determine which interior walls are load bearing for footings.</p>

      <CmsImage src="/images/cms/exterior-interior-footings--course_5.png" alt="Florida, North Alabama, and Tennessee Plans – example 1" />

      <Note>FL/NAL/TN plans have the least number of interior footings.</Note>

      <p className="text-sm leading-relaxed">North Alabama and Tennessee require no extra steps once the interior load bearing walls are determined.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>
          Use <strong>red</strong> lines for exterior footings and <strong>yellow</strong> lines for interior footings, get the <strong>total linear footage</strong>, then input the quantities into their respective cells in the spreadsheet.
          <CmsImage src="/images/cms/exterior-interior-footings--course_6.png" alt="Florida, North Alabama, and Tennessee Plans – example 2" />
          <p className="mt-2 leading-relaxed">Florida breaks concrete footings down similar to Mississippi and North Alabama.</p>
          <CmsImage src="/images/cms/exterior-interior-footings--course_7.png" alt="Florida, North Alabama, and Tennessee Plans – example 3" />
        </li>

        <li><strong>Exterior</strong> = Exterior walls</li>

        <li><strong>Exterior porch area</strong> = Exterior porch walls</li>

        <li><strong>Wall to porch step</strong> = Interior porch walls</li>

        <li><strong>Interior footing</strong> = Interior load bearing walls</li>

        <li><strong>Shear wall and garage step</strong> = Interior garage walls</li>

        <li>Get the <strong>total linear footage</strong> of your lines by color and insert them into their corresponding cell in the spreadsheet.</li>

      </ul>

      <p className="text-sm leading-relaxed">Your lines in AutoCAD for Florida, North Alabama, and Tennessee will be executed the same, but color-coded differently.</p>

      <CmsImage src="/images/cms/exterior-interior-footings--course_8.png" alt="Florida, North Alabama, and Tennessee Plans – example 4" />
    </div>
  );
}
