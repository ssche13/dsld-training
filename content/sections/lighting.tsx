import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Lighting() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Lighting</h2>

      <p className="text-sm leading-relaxed">Lighting estimation is based on the <strong>electrical plan</strong>, which shows the location and type of every light fixture in the house. Count each fixture type and place each total into its respective cell of the <strong>Lighting</strong> section of the spreadsheet.</p>

      <h3 className="font-medium text-base text-dsld-text">Base Lighting Package</h3>

      <p className="text-sm leading-relaxed">Count each fixture type and place each total into its respective cell of the <strong>Lighting</strong> section of the spreadsheet.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Each fixture type has a unique symbol on the plan (recessed, surface mount, pendant, etc.).</li>

        <li>Smoke/CO detectors will be counted.</li>

        <li>Exterior fixtures will be counted.</li>

        <li>Down rods <strong>only</strong> go on ceiling fan fixtures, where call outs indicate which size.</li>

        <li>9' ceilings do not get down rods.</li>

        <li>The attic is given <strong>2</strong> lights.</li>

      </ul>

      <CmsImage src="/images/cms/lighting--course_0.png" alt="Base Lighting Package – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Fixture Types</h3>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Disc Light - referred to as <strong>Disc Light - White</strong> in our spreadsheet</li>

        <li>Recessed Can - referred to as <strong>Interior Flood with LED Bulb</strong> in our spreadsheet</li>

        <li>Wall Sconce - referred to as <strong>1LT Wall Sconce</strong> in our spreadsheet</li>

        <li>Hanging Light - referred to as a <strong>5LT Chandelier</strong> in our spreadsheet</li>

        <li>Mushroom Surface Mount - referred to as <strong>12’’ LED Chip Light </strong>in our spreadsheet</li>

        <li>Pendant Light – referred to as a <strong>1LT Foyer Light</strong> in our spreadsheet</li>

        <li>Pendant lights above kitchen islands will be the same</li>

        <li>Vanity Lighting - referred to as <strong>3LT Vanity</strong> and <strong>4LT Vanity</strong> in our spreadsheet</li>

        <li>Ceiling Fan - referred to as <strong>5 Blade Contemporary MB Interior Ceiling Fan w/ Bulbs</strong> in our spreadsheet</li>

        <li>Exterior Hanging - referred to as <strong>Hanging Outdoor Light</strong> in our spreadsheet</li>

        <li>Exterior Surface Mount - referred to as <strong>Disc Light - Matte Black</strong> in our spreadsheet.</li>

        <li>Exterior Flood - referred to as <strong>Flood Light Kit</strong> in our spreadsheet</li>

      </ul>

      <h3 className="font-medium text-base text-dsld-text">Under Cabinet Lighting Option</h3>

      <p className="text-sm leading-relaxed">The <strong>cabinet elevations</strong> from the PDF will need to be used for this section.</p>

      <Note>Under cabinet lighting is not taken off in North Alabama or Tennessee.</Note>

      <CmsImage src="/images/cms/lighting--course_1.png" alt="Under Cabinet Lighting Option – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>The numbers circled will be the numbers you use to determine what size light will be purchased at each location.</li>

        <li>Use math. W36 can have a 24’’ and a 12’’ undermount light. Follow this logic for your calculations.</li>

        <li>Place the count of each cabinet based on size in its respective cell of the <strong>Under Cabinet Light Option</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/lighting--course_2.png" alt="Under Cabinet Lighting Option – example 2" />

      <h3 className="font-medium text-base text-dsld-text">Bathroom Vent Lighting</h3>

      <p className="text-sm leading-relaxed">These counts go into their own section.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Count each from the bathrooms in the electrical plan in the PDF.</li>

        <li>Place total counts into the spreadsheet, which is to the right of the <strong>Bid Rates</strong> section.</li>

      </ul>

      <CmsImage src="/images/cms/lighting--course_3.png" alt="Bathroom Vent Lighting – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Electrical Labor</h3>

      <p className="text-sm leading-relaxed">This is a <strong>built-in cost</strong> on standard homes, so there is nothing for you to input into the spreadsheet. For artist series homes, you must manually enter in the labor costs.</p>

      <ul className="list-disc pl-6 space-y-2 text-sm">

        <li>Always count <strong>1</strong>.</li>

        <li>Place into the appropriate cell of the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the spreadsheet based on living square footage.</li>

      </ul>

      <CmsImage src="/images/cms/lighting--course_4.png" alt="Electrical Labor – example 1" />
    </div>
  );
}
