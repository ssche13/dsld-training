import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Purlins() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Purlins</h2>

      <p className="text-sm leading-relaxed">
        Purlins are horizontal members that run perpendicular to the rafters, providing additional
        support to the roof structure. They are visible on the <strong>roof framing layout</strong> in
        the PDF as lines running through the bracing circles.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Identifying Purlins</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Locate the purlins on the roof framing layout — they appear as lines running through the bracing circles with an &apos;X&apos;.</li>
        <li>Purlins run in straight lines and connect multiple bracing points.</li>
        <li>They are separate from the bracing calculation but are identified during the same process.</li>
      </ul>

      <CmsImage src="/images/cms/purlins--docx_0.png" alt="Purlins PDF" />

      <h3 className="font-medium text-base text-dsld-text">How to Count</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count each purlin run from the roof framing plan on the PDF.</li>
        <li>Note the size and length of each purlin as called out on the plans.</li>
        <li>Place the total counts based on size into their respective cells of the spreadsheet.</li>
      </ul>

      <CmsImage src="/images/cms/purlins--docx_1.png" alt="Purlins XL" />

      <Note>
        Purlins are only used in stick-frame construction (Louisiana, Mississippi, and South Alabama).
        If your plan uses trusses, purlins are not applicable.
      </Note>
    </div>
  );
}
