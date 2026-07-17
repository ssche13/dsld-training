import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function GatheringInfo() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Gathering the Information</h2>

      <p className="text-base leading-relaxed">Before you begin estimating, you need to set up both AutoCAD and the estimating spreadsheet. This section walks through preparing your workspace.</p>

      <h3 className="font-medium text-lg text-dsld-text">AutoCAD Setup</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          Select 'Open a project' in AutoCAD. AutoCAD's Project Browser window should pop up, and you will click the following icon:
          <CmsImage src="/images/cms/gathering-info--course_0.png" alt="AutoCAD Setup – example 1" />
          <CmsImage src="/images/cms/gathering-info--course_1.png" alt="AutoCAD Setup – example 2" />
        </li>

        <li>Navigate as follows: <strong>Desktop &gt; AutoCAD Architecture-Projects &gt; 01 AutoCAD Projects.</strong></li>

        <li>
          Refer to the PDF plan drawing for the Plan Family name in the title section, then find that corresponding name in the 01 AutoCAD Projects folder. <strong>Note that plan family names will not always match the name of the plans themselves.</strong>
          <CmsImage src="/images/cms/gathering-info--course_2.png" alt="AutoCAD Setup – example 3" />
        </li>

        <li>Navigate as follows: <strong>Plan Family Name &gt; Plan Family Name (yes, again) &gt; Plan Family Project link</strong>.</li>

        <li>
          Select the project link and open the file.
          <CmsImage src="/images/cms/gathering-info--course_3.png" alt="AutoCAD Setup – example 4" />
        </li>

        <li>Close the Project Browser and Project Files windows to allow AutoCAD to load the constructs into the project you're working on.</li>

        <li>You may get a pop-up that asks you about re-pathing your project. <strong>Always</strong> <strong>click re-path now to ensure that you are taking off the most recent version of the plan.</strong></li>

        <li>Once the project is opened, there may or may not be a current takeoff construct within the project. The name of the takeoff construct also may be different than the plan name you are working on, but it is all under the same family.</li>

        <li>If a takeoff construct is already there, simply click into that construct and begin pulling in the constructs mentioned below. If there isn't a takeoff construct already created, move onto the next step.</li>

        <li>
          Add a new construct to your project.
          <CmsImage src="/images/cms/gathering-info--course_4.png" alt="AutoCAD Setup – example 5" />
        </li>

        <li>Name the construct. (Ex. “Gabrielli III Takeoff”)</li>

        <li>Add the standard DSLD drawing template by clicking the ellipses next to the drawing template file name.</li>

        <li>Navigate as follows: <strong>Desktop &gt; AutoCAD Architecture-Projects &gt; AutoCAD Architecture-STUFF &gt; AutoCAD Architecture &gt; Templates &gt; NEW DSLD Drawing Template.</strong></li>

        <li>Close the window, then open your new construct to begin pulling in the constructs below.</li>

      </ul>

      <p className="text-base leading-relaxed"><strong>Constructs to Pull In:</strong></p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Cabinets</li>

        <li>Ceiling Framing (only for rat runners and strong backs)</li>

        <li>Elevations</li>

        <li>Exterior Walls</li>

        <li>Interior Walls</li>

        <li>Flooring</li>

        <li>Foundation</li>

        <li>Optional Fireplace</li>

        <li>Roof Framing</li>

        <li>Roof Parent</li>

        <li>Stair Section (in two-story homes)</li>

      </ul>

      <h3 className="font-medium text-lg text-dsld-text">Estimating Spreadsheet</h3>

      <p className="text-base leading-relaxed">Open the estimating spreadsheet from the Shared Admin Drive.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Navigate as follows: <strong>Shared Admin &gt; Estimating &gt; Worksheets &gt; New &gt; Z spreadsheets currently being used</strong></li>

        <li>Find the blank spreadsheet in correspondence with the region your plans will be built in.</li>

        <li>Use <strong>Save As</strong> and name the file using the standard plan name format so it can be identified later.</li>

      </ul>

      <CmsImage src="/images/cms/gathering-info--course_5.png" alt="Estimating Spreadsheet – example 1" />

      <p className="text-base leading-relaxed"><strong>Elevation Correlations</strong></p>

      <p className="text-base leading-relaxed">Elevation letters map across plan variants. Use this table to match elevations correctly:</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li><strong>A / G / S</strong></li>

        <li><strong>B / H / T</strong></li>

        <li><strong>C / I / U</strong></li>

        <li><strong>D / J / V</strong></li>

        <li><strong>E / K / W</strong></li>

        <li><strong>F / L / X</strong></li>

      </ul>

      <Note>Always double-check which elevation letter you are working with before you begin your takeoff. Using the wrong elevation will invalidate the entire estimate.</Note>
    </div>
  );
}
