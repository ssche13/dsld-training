import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Hvac() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">HVAC</h2>

      <p className="text-sm leading-relaxed">
        HVAC estimation records the system type and component counts from the mechanical plan. DSLD
        uses central forced-air systems.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Condensing Units</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Count units of each tonnage from the <strong>HVAC plan</strong> on the PDF.
        </li>
      </ul>

      <CmsImage src="/images/cms/hvac--docx_0.png" alt="HVAC PDF" />
      <CmsImage src="/images/cms/hvac--docx_1.png" alt="HVAC PDF" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Place the total count into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong>{" "}
          section.
        </li>
      </ul>

      <CmsImage src="/images/cms/hvac--docx_2.png" alt="HVAC Tonnage XL" />

      <h3 className="font-medium text-base text-dsld-text">Secondary Returns</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Found in all bedrooms except the master, plus any enclosed office with a door.
        </li>
        <li>
          Count returns from the <strong>HVAC plan</strong>, excluding the master.
        </li>
        <li>
          Place into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong> section.
        </li>
      </ul>

      <CmsImage src="/images/cms/hvac--docx_3.png" alt="Return HVAC XL" />

      <h3 className="font-medium text-base text-dsld-text">Hood Vents</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Look at the HVAC plan for micro-hood kitchen venting.</li>
      </ul>

      <CmsImage src="/images/cms/hvac--docx_4.png" alt="Micro Hood PDF" />

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Place <strong>1</strong> in the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong>{" "}
          section.
        </li>
      </ul>

      <CmsImage src="/images/cms/hvac--docx_5.png" alt="Micro Hood XL" />

      <h3 className="font-medium text-base text-dsld-text">Zoning Kit</h3>

      <p className="text-sm leading-relaxed">
        For a two-story home without a dual unit, enter <strong>1</strong> zoning kit.
      </p>

      <CmsImage src="/images/cms/hvac--docx_6.png" alt="HVAC zoning XL" />

      <Note>
        HVAC system sizing is determined by the mechanical engineer. Record the specified size and
        count distribution components &mdash; do not attempt to resize the system.
      </Note>
    </div>
  );
}
