import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Bracing() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Bracing</h2>

      <p className="text-sm leading-relaxed">Bracing provides lateral stability for the wall and roof framing system. This section requires <strong>multiple steps </strong>and utilizes the references from the previous section. First, you will set up AutoCAD, then you will begin your calculations. Your bracing calculations will be done <strong>underneath</strong> the elevations.</p>

      <Note>Bracing is not taken off in Florida, North Alabama, or Tennessee.</Note>

      <h3 className="font-medium text-base text-dsld-text">Louisiana and Texas Plans</h3>

      <ol className="list-decimal pl-6 space-y-2 text-sm">

        <li>
          Copy the interior walls, exterior walls, roof framing, and roof parent down to your work area.
          <CmsImage src="/images/cms/bracing--course_0.png" alt="Louisiana and Texas Plans – example 1" />
        </li>

        <li>
          Copy the roof framing layout once more, off to the side.
          <CmsImage src="/images/cms/bracing--course_1.png" alt="Louisiana and Texas Plans – example 2" />
        </li>

        <li>
          Copy the elevation into your work area <strong>four</strong> times.
          <CmsImage src="/images/cms/bracing--course_2.png" alt="Louisiana and Texas Plans – example 3" />
        </li>

        <li>
          Use <strong>X-CLIP</strong> to crop each copied elevation to show each side per copy. (e.g. left, right, rear, front)
          <CmsImage src="/images/cms/bracing--course_3.png" alt="Louisiana and Texas Plans – example 4" />
        </li>

        <li>
          Use <strong>X-LINE</strong> to place an infinite line at each corner of your copied down roof lines in a distinct color of your choice. This creates guidelines for the elevations you just coped.
          <CmsImage src="/images/cms/bracing--course_4.png" alt="Louisiana and Texas Plans – example 5" />
        </li>

        <li>Move each elevation to <strong>their respective sides</strong> of the floor plan.</li>

        <li>Rear elevation goes on <strong>top</strong>, rotated upside down.</li>

        <li>Front elevation goes on the <strong>bottom</strong>.</li>

        <li>Left and right elevations go on their respective sides and are rotated so that the <strong>front side of the house is facing down.</strong></li>

      </ol>

      <CmsImage src="/images/cms/bracing--course_5.png" alt="Louisiana and Texas Plans – example 6" />

      <p className="text-sm leading-relaxed">If you zoom into the roof framing layout in AutoCAD or the PDF, you will see circles with an 'X' in them. We address these separately as follows: circles <strong>with a tail</strong> and circles <strong>with no tail</strong>.</p>

      <CmsImage src="/images/cms/bracing--course_6.png" alt="Louisiana and Texas Plans – example 7" />

      <p className="text-sm leading-relaxed">You will also notice lines running through some of these circles, indicated as <strong>purlins.</strong></p>

      <p className="text-sm leading-relaxed">To begin, we will estimate using the circles that fall on purlins first.</p>

      <ol className="list-decimal pl-6 space-y-2 text-sm">

        <li>Choose any straight run of purlins to start.</li>

        <li><strong>Horizontal</strong> runs will be measured using the <strong>front and rear</strong> elevations.</li>

        <li><strong>Vertical</strong> runs will be measured using <strong>left and right</strong> elevations.</li>

        <li>Find the circle in your selected run with the longest tail that you can identify.</li>

        <li>If the tail runs <strong>perpendicular</strong> to the selected run of purlins, you can move onto the next step. If the tail runs <strong>at an angle</strong>, further steps are needed.</li>

        <li>Use <strong>LINE</strong> to trace from the endpoint of the tail to the midpoint of the circle (middle of the 'X').</li>

        <li>Rotate the line to be perpendicular to the selected run of purlins, then continue on.</li>

      </ol>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>If the purlin run is <strong>horizontal</strong>, you will place a <strong>vertical x-line</strong> at the endpoint. If the purlin run is <strong>vertical</strong>, you will place a <strong>horizontal x-line</strong> at the endpoint.</li>

        <li>Place another x-line at the midpoint of the circle, following the previous prompt.</li>

        <li>You should now have something that looks like this:</li>

      </ul>

      <CmsImage src="/images/cms/bracing--course_7.png" alt="Louisiana and Texas Plans – example 8" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>LINE</strong> to draw from where one x-line intersects the roofline, to where the other x-line intersects the specified plate/ceiling height the selected purlin run lands on.</li>

        <li>Your line segments should be at points that allow the line to run in the <strong>opposite direction of the roof line,</strong> like this:</li>

      </ul>

      <CmsImage src="/images/cms/bracing--course_8.png" alt="Louisiana and Texas Plans – example 9" />

      <Note>Notice how there is a white line at the bottom point instead of the usual pink dashed line that indicates the plate height. There will be scenarios where you will have to add a line for the specified plate height of the elevation you’re working on yourself.</Note>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Use <strong>TLEN</strong> to get the <strong>linear footage</strong> of the line.</li>

        <li>Round up, then use <strong>mTEXT</strong> to record the linear footage next to <strong>each circle on the selected purlin run </strong>on the roof framing layout you copied off to the side.</li>

        <li>You will repeat this entire process for<strong> each straight purlin</strong> run you see on the roof framing plans.</li>

      </ul>

      <CmsImage src="/images/cms/bracing--course_9.png" alt="Louisiana and Texas Plans – example 10" />

      <p className="text-sm leading-relaxed">The linear footage you will record next to each circle will be <strong>color-coded</strong> as follows to match the spreadsheet:</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li><strong>Yellow</strong> - 8' and below</li>

        <li><strong>White</strong> - 10'</li>

        <li><strong>Red</strong> - 12'</li>

        <li><strong>Orange</strong> - 14'</li>

        <li><strong>Green</strong> - 16'</li>

        <li><strong>Purple</strong> - 18'</li>

        <li><strong>Cyan</strong> - 20'</li>

      </ul>

      <Note>Always round up to the next available length (if applicable). If a line measures 8 1/2', go with the 10' length. This step is not necessary for lengths equal to or less than 8'.</Note>

      <p className="text-sm leading-relaxed">Let's move onto <strong>individual circles that do not fall on any purlins,</strong> starting with circles with no tail.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>These circles can be measured using <strong>any</strong> elevation but discern which elevation would be most efficient.</li>

        <li>Place a vertical or horizontal x-line (depending on which elevation you use) in the midpoint of the circle.</li>

        <li>Use <strong>LINE</strong> to trace that line from the roof line intersect to the plate height intersect on the elevation.</li>

        <li>Use <strong>TLEN</strong> to get the<strong> linear footage </strong>of the freshly traced line.</li>

        <li>Use <strong>mTEXT</strong> to record your measurement next to the corresponding circle off to the side in the appropriate color.</li>

        <li>Repeat for each individual circle without a tail.</li>

      </ul>

      <CmsImage src="/images/cms/bracing--course_10.png" alt="Louisiana and Texas Plans – example 11" />

      <p className="text-sm leading-relaxed">You will use similar steps for individual circles with a tail that do not fall on purlins.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Place an x-line at the midpoint of the circle and the endpoint of the tail.</li>

        <li>Add the <strong>2 extra steps</strong> mentioned earlier for circles with tails that run at an angle instead of perpendicular.</li>

        <li>Continue to discern which elevation would be most efficient for your measurement.</li>

      </ul>

      <p className="text-sm leading-relaxed">Once you have recorded a measurement for each brace onto your roof framing layout copy, you are ready to start entering into the spreadsheet.</p>

      <CmsImage src="/images/cms/bracing--course_11.png" alt="Louisiana and Texas Plans – example 12" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li><strong>For lengths 8' or less,</strong> add together each length for the <strong>total linear footage</strong> of 2x4x16's.</li>

        <li><strong>For lengths over 8',</strong> count each length <strong>individually.</strong></li>

        <li>Place each total into its corresponding cell of the <strong>Roof Bracing</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/bracing--course_12.png" alt="Louisiana and Texas Plans – example 13" />

      <h3 className="font-medium text-base text-dsld-text">Mississippi and South Alabama Plans</h3>

      <p className="text-sm leading-relaxed">The set-up and estimation logic will be the same as Louisiana and Texas, but you will use <strong>PDFIMPORT</strong> to insert the roof framing page from Bethel Engineering for accurate calculations. <strong>Be sure to download the engineering plans to your computer before you begin setting up AutoCAD.</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Type in <strong>PDFIMPORT</strong> and hit enter.</li>

        <li>Type in<strong> F</strong> and hit enter. A pop-up window to select a PDF file will show on your screen.</li>

        <li>
          Select the engineering plans that you are using and click open.
          <CmsImage src="/images/cms/bracing--course_13.png" alt="Mississippi and South Alabama Plans – example 1" />
        </li>

        <li>
          Select the page that has the roof framing layout and set the scale to <strong>48</strong>, then click <strong>OK</strong>.
          <CmsImage src="/images/cms/bracing--course_14.png" alt="Mississippi and South Alabama Plans – example 2" />
        </li>

        <li>
          The PDF is now imported into your CAD space. Delete unnecessary elements from the PDF to show only the roof framing layout.
          <CmsImage src="/images/cms/bracing--course_15.png" alt="Mississippi and South Alabama Plans – example 3" />
        </li>

        <li>Set up your CAD space and begin estimating.</li>

      </ul>

      <CmsImage src="/images/cms/bracing--course_16.png" alt="Mississippi and South Alabama Plans – example 4" />
    </div>
  );
}
