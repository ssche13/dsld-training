import CmsImage from "@/components/CmsImage";

export default function HeaderCalculator() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Header Calculator</h2>

      <h3 className="font-medium text-base text-dsld-text">Louisiana and Texas Plans</h3>

      <p className="text-sm leading-relaxed">The header calculator is already included in the spreadsheet for use.</p>

      <CmsImage src="/images/cms/header-calculator--course_0.png" alt="Louisiana and Texas Plans – example 1" />

      <p className="text-sm leading-relaxed">Using the floor plan from the PDF, count how many doors, windows, and cased openings are present by width.</p>

      <p className="text-sm leading-relaxed">Insert each count into their corresponding cells.</p>

      <h3 className="font-medium text-base text-dsld-text">Mississippi and South Alabama Plans</h3>

      <p className="text-sm leading-relaxed">You will use the engineering plans to determine which walls are load bearing and non-load bearing. Count the doors, windows, and cased openings on each type of wall and insert into the spreadsheet.</p>

      <CmsImage src="/images/cms/header-calculator--course_1.png" alt="Mississippi and South Alabama Plans – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Florida, North Alabama, and Tennessee Plans</h3>

      <p className="text-sm leading-relaxed">You will use the header calculator created by Mr. Steven. The file will be made available to you whenever you need it. Follow the instructions in the calculator for your inputs.</p>

      <CmsImage src="/images/cms/header-calculator--course_2.png" alt="Florida, North Alabama, and Tennessee Plans – example 1" />

      <p className="text-sm leading-relaxed">Insert the <strong>TOTAL WITH WASTE</strong> quantity into the spreadsheet.</p>

      <CmsImage src="/images/cms/header-calculator--course_3.png" alt="Florida, North Alabama, and Tennessee Plans – example 2" />
    </div>
  );
}
