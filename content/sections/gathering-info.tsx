import Note from "@/components/callouts/Note";
import Tip from "@/components/callouts/Tip";
import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import CmsImage from "@/components/CmsImage";

export default function GatheringInfo() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Gathering Information</h2>

      <p className="text-sm leading-relaxed">
        Before you begin estimating, you need to set up both AutoCAD and the estimating spreadsheet.
        This section walks through pulling the right drawings and preparing your workspace.
      </p>

      <h3 className="font-medium text-base text-dsld-text">AutoCAD Setup</h3>
      <ol className="list-decimal pl-6 space-y-1 text-sm">
        <li>Select &apos;Open a project&apos; in AutoCAD. AutoCAD&apos;s Project Browser window should pop up, and you will click the following icon: <CmsImage src="/images/cms/gathering-info--docx_0.png" alt="Project Browser Folder" /></li>
        <li>Navigate as follows: Desktop &gt; AutoCAD Architecture-Projects &gt; 01 AutoCAD Projects.</li>
        <li>Refer to the PDF plan drawing for the Plan Family name in the title section, then find that corresponding name in the 01 AutoCAD Projects folder. <strong><u>NOTE:</u></strong> Plan family names will not always match the name of the plan name itself. <CmsImage src="/images/cms/gathering-info--docx_1.png" alt="Plan Family" /></li>
        <li>Navigate as follows: Plan Family Name &gt; Plan Family Name (yes, again) &gt; Plan Family Project link. Select the project link and open the file. <CmsImage src="/images/cms/gathering-info--docx_2.png" alt="Plan Family Project Link" /></li>
        <li>Close the Project Browser and Project Files windows to allow AutoCAD to load the constructs into the project you&apos;re working on. <strong><u>NOTE:</u></strong> You may get a pop-up that asks you about re-pathing your project. <u>Always click re-path later.</u></li>
        <li>Once the project is opened, there may or may not be a current takeoff construct within the project. The name of the takeoff also may be different than the plan name you are working on, but it is all the same. If a takeoff construct is already there, simply click into that construct and begin pulling in the constructs mentioned below. If there isn&apos;t a takeoff construct already created, move onto step 7.</li>
        <li>Add a new construct to your project. <ImagePlaceholder label="New Construct" /></li>
        <li>Name the construct.</li>
        <li>Add the standard DSLD drawing template by clicking the ellipses next to the drawing template file name. Navigate as follows: Desktop &gt; AutoCAD Architecture-Projects &gt; AutoCAD Architecture-STUFF &gt; AutoCAD Architecture &gt; Templates &gt; NEW DSLD Drawing Template.</li>
        <li>Close the window, then open your new construct to begin pulling in the constructs mentioned below.</li>
      </ol>

      <h3 className="font-medium text-base text-dsld-text">Constructs to Pull In:</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Cabinets</li>
        <li>Elevations</li>
        <li>Exterior Walls</li>
        <li>Interior Walls</li>
        <li>Flooring</li>
        <li>Foundation</li>
        <li>Optional Fireplace</li>
        <li>Roof Framing</li>
        <li>Roof Parent</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Estimating Spreadsheet</h3>
      <p className="text-sm leading-relaxed">
        Open the estimating spreadsheet from the Shared-Admin Drive.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Navigate as follows: <strong>Shared Admin &gt; Estimating &gt; Worksheets &gt; New &gt; Z spreadsheets currently being used</strong></li>
        <li>Find the blank spreadsheet in correspondence with the state your plans will be built in.</li>
        <li>Use <strong>Save As</strong> and name the file using the standard plan name format so it can be identified later.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Elevation Correlations</h3>
      <p className="text-sm leading-relaxed">
        Elevation letters map across plan variants. Use this table to match elevations correctly:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li><strong>A / G / S</strong></li>
        <li><strong>B / H / T</strong></li>
        <li><strong>C / I / U</strong></li>
        <li><strong>D / J / V</strong></li>
        <li><strong>E / K / W</strong></li>
        <li><strong>F / L / X</strong></li>
      </ul>

      <Tip>
        Always double-check which elevation letter you are working with before pulling drawings.
        Using the wrong elevation will invalidate the entire estimate.
      </Tip>
    </div>
  );
}
