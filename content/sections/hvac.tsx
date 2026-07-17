import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Hvac() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">HVAC</h2>

      <p className="text-base leading-relaxed">HVAC (Heating, Ventilation, and Air Conditioning) estimation records the system type and component counts from the mechanical plan. DSLD homes typically use central forced-air systems.</p>

      <h3 className="font-medium text-lg text-dsld-text">Condensing Units and Air Handling Units</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count how many units of each tonnage from the<strong> HVAC plan </strong>on the PDF.</li>

      </ul>

      <CmsImage src="/images/cms/hvac--course_0.png" alt="Condensing Units and Air Handling Units – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Place the total count into the appropriate cell of the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hvac--course_1.png" alt="Condensing Units and Air Handling Units – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Secondary Returns</h3>

      <p className="text-base leading-relaxed">Secondary returns pull stale air from bedrooms and open spaces back to the air handling unit.</p>

      <CmsImage src="/images/cms/hvac--course_2.png" alt="Secondary Returns – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Count how many returns from the<strong> HVAC plan </strong>on the PDF, <strong>excluding the master.</strong></li>

        <li>Place the total count into the appropriate cell of the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/hvac--course_3.png" alt="Secondary Returns – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Hood Vents</h3>

      <p className="text-base leading-relaxed">Look at the HVAC plan to show where the micro-hood in the kitchen is venting.</p>

      <CmsImage src="/images/cms/hvac--course_4.png" alt="Hood Vents – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Place <strong>1</strong> in the appropriate cell of the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section of the spreadsheet.</li>

      </ul>

      <p className="text-base leading-relaxed">For any two-story unit that does not use a dual unit, <strong>1</strong> zoning kit must be selected.</p>

      <CmsImage src="/images/cms/hvac--course_5.png" alt="Hood Vents – example 2" />

      <CmsImage src="/images/cms/hvac--course_6.png" alt="Hood Vents – example 3" />

      <Note>HVAC system sizing is determined by the mechanical engineer. Your job is to record the specified size and count the distribution components — do not attempt to resize the system.</Note>
    </div>
  );
}
