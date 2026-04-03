import Note from "@/components/callouts/Note";

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

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hvac--docx_0.png" alt="HVAC PDF" className="w-full rounded" />
        <img src="/images/cms/hvac--docx_1.png" alt="HVAC PDF" className="mt-2 w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">HVAC PDF</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Place the total count into the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong>{" "}
          section.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hvac--docx_2.png" alt="HVAC Tonnage XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">HVAC Tonnage XL</p>
      </div>

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

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hvac--docx_3.png" alt="Return HVAC XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Return HVAC XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Hood Vents</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Look at the HVAC plan for micro-hood kitchen venting.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hvac--docx_4.png" alt="Micro Hood PDF" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Micro Hood PDF</p>
      </div>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Place <strong>1</strong> in the <strong>Plumbing, Elec. &amp; HVAC Top Out</strong>{" "}
          section.
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hvac--docx_5.png" alt="Micro Hood XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Micro Hood XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Zoning Kit</h3>

      <p className="text-sm leading-relaxed">
        For a two-story home without a dual unit, enter <strong>1</strong> zoning kit.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/hvac--docx_6.png" alt="HVAC zoning XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">HVAC zoning XL</p>
      </div>

      <Note>
        HVAC system sizing is determined by the mechanical engineer. Record the specified size and
        count distribution components &mdash; do not attempt to resize the system.
      </Note>
    </div>
  );
}
