import CmsImage from "@/components/CmsImage";
export default function Plumbing() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Plumbing</h2>

      <p className="text-sm leading-relaxed">
        Plumbing estimation involves counting all plumbing fixtures on the floor plan. Each fixture
        type is tracked separately in the spreadsheet.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Tubs, Showers, and Tub-Showers</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Count each in the <strong>floor plan</strong> of the PDF.
        </li>
        <li>
          A <strong>32x60</strong> callout on the plan is a <strong>30x60</strong> in the
          spreadsheet.
        </li>
        <li>
          Place the count into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the
          spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/plumbing--docx_0.png" alt="Tub Shower TubShower XL" />

      <h3 className="font-medium text-base text-dsld-text">Toilets</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Count each in the <strong>floor plan</strong> of the PDF.
        </li>
        <li>
          Place the count into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the
          spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/plumbing--docx_1.png" alt="Toilets XL" />

      <h3 className="font-medium text-base text-dsld-text">Vanity Sinks</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count all vanities in the floor plan.</li>
        <li>Kitchen sinks are already pre-built into the takeoff spreadsheet.</li>
        <li>
          Place the count into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the
          spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/plumbing--docx_2.png" alt="Vanity Sinks Plumb XL" />
    </div>
  );
}
