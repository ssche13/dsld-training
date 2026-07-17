import CmsImage from "@/components/CmsImage";

export default function Plumbing() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Plumbing</h2>

      <p className="text-base leading-relaxed">Plumbing estimation involves counting all plumbing fixtures shown on the floor plan. Each fixture type is tracked separately in the spreadsheet.</p>

      <h3 className="font-medium text-lg text-dsld-text">Tubs, Showers, and Tub-Showers</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count each in the<strong> floor plan</strong> of the PDF.</li>

        <li>A <strong>32x60</strong> callout on the plan is a <strong>30x60</strong> in our spreadsheet.</li>

        <li>Place the appropriate count of each into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/plumbing--course_0.png" alt="Tubs, Showers, and Tub-Showers – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Toilets</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count each in the<strong> floor plan</strong> of the PDF.</li>

        <li>Place the appropriate count into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/plumbing--course_1.png" alt="Toilets – example 1" />

      <h3 className="font-medium text-lg text-dsld-text">Vanity Sinks</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count all vanities in the floor plan.</li>

        <li>Kitchen sinks are already pre-built into the takeoff spreadsheet.</li>

        <li>Place the appropriate count into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/plumbing--course_2.png" alt="Vanity Sinks – example 1" />
    </div>
  );
}
