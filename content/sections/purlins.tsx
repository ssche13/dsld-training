import Note from "@/components/callouts/Note";

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

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/purlins--docx_0.png" alt="Purlins PDF" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Purlins PDF</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">How to Count</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count each purlin run from the roof framing plan on the PDF.</li>
        <li>Note the size and length of each purlin as called out on the plans.</li>
        <li>Place the total counts based on size into their respective cells of the spreadsheet.</li>
      </ul>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/purlins--docx_1.png" alt="Purlins XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Purlins XL</p>
      </div>

      <Note>
        Purlins are only used in stick-frame construction (Louisiana, Mississippi, and South Alabama).
        If your plan uses trusses, purlins are not applicable.
      </Note>
    </div>
  );
}
