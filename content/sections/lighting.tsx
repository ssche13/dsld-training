import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Lighting() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Lighting</h2>

      <p className="text-sm leading-relaxed">
        Lighting estimation is based on the <strong>electrical plan</strong>, which shows the
        location and type of every light fixture. Count each type and place totals into the{" "}
        <strong>Lighting</strong> section.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Base Lighting</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count each fixture type into the <strong>Lighting</strong> section.</li>
        <li>Each fixture type has a unique symbol (recessed, surface mount, pendant, etc.).</li>
        <li>Smoke/CO detectors will be counted.</li>
        <li>Exterior fixtures will be counted.</li>
        <li>
          Down rods <strong>only</strong> go on ceiling fan fixtures, where call outs indicate size.
        </li>
        <li>9&apos; ceilings do not get down rods.</li>
        <li>
          The attic is given <strong>2</strong> lights.
        </li>
      </ul>

      <CmsImage src="/images/cms/lighting--docx_0.png" alt="Lighting XL" />

      <h3 className="font-medium text-base text-dsld-text">Fixture Types</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>2x4 Fluorescent Fixture &rarr; <strong>Garage Wrap includes LED Bulbs</strong></li>
        <li>Recessed Can &rarr; <strong>Interior Flood with LED Bulb</strong></li>
        <li>Wall Sconce &rarr; <strong>1LT Wall Sconce</strong></li>
        <li>Hanging Light &rarr; <strong>5LT Chandelier</strong></li>
        <li>
          Mushroom Surface Mount &rarr; <strong>13&apos;&apos; Flush Mount</strong> for hallways,
          drop zones, above countertops; <strong>15&apos;&apos; Flush Mount</strong> for utility
          rooms, offices, bedrooms, over desks
        </li>
        <li>Pendant Light &rarr; <strong>Disc Light - White</strong></li>
        <li>Vanity Lighting &rarr; <strong>3LT Vanity</strong> and <strong>4LT Vanity</strong></li>
        <li>
          Ceiling Fan &rarr;{" "}
          <strong>5 Blade Contemporary MB Interior Ceiling Fan w/ Bulbs</strong>
        </li>
        <li>Exterior Hanging &rarr; <strong>Hanging Outdoor Light</strong></li>
        <li>Exterior Surface Mount &rarr; <strong>Disc Light - Matte Black</strong></li>
        <li>Exterior Flood &rarr; <strong>Flood Light Kit</strong></li>
        <li>Pendant in foyer &rarr; <strong>1LT Foyer Light</strong></li>
        <li>Recessed cans over showers &rarr; <strong>Shower Trim - LED Recessed</strong></li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Under Cabinet Lighting Option</h3>

      <p className="text-sm leading-relaxed">
        Cabinet elevations from the PDF are needed for this section.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>12&apos;&apos; lights in turns.</li>
        <li>18&apos;&apos; lights in regular cabinets.</li>
        <li>24&apos;&apos; lights in cabinets longer than 26&apos;&apos;.</li>
        <li>
          Double check by deducting 2&apos;&apos; from each cabinet width. Lighting only fits under
          cabinets 2&apos;&apos; larger or more.
        </li>
        <li>
          Place the count by size in the <strong>Under Cabinet Light Option</strong> section.
        </li>
      </ul>

      <CmsImage src="/images/cms/lighting--docx_1.png" alt="Under Cabinet XL" />

      <h3 className="font-medium text-base text-dsld-text">Bathroom Vent Lighting</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count bathroom vents from the electrical plan in the PDF.</li>
        <li>
          Place into the <strong>HV</strong> section, to the right of the{" "}
          <strong>Bid Rates</strong> section.
        </li>
      </ul>

      <CmsImage src="/images/cms/lighting--docx_2.png" alt="Bathroom Vents XL" />

      <h3 className="font-medium text-base text-dsld-text">Electrical Labor</h3>

      <p className="text-sm leading-relaxed">
        Electrical labor is a built-in cost on standard homes. For artist series, manually enter
        labor costs.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Always count <strong>1</strong>.
        </li>
        <li>
          Place into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section based on living
          square footage.
        </li>
        <li>
          Artist series will get <strong>2</strong> (for trim nails, not labor &mdash; trim nails is
          actually in the paint section).
        </li>
      </ul>

      <CmsImage src="/images/cms/lighting--docx_3.png" alt="Electrical Labor XL" />
    </div>
  );
}
