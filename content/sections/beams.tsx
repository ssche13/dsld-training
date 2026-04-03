import CmsImage from "@/components/CmsImage";
export default function Beams() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Load-Bearing Beams</h2>

      <p className="text-sm leading-relaxed">
        Beam estimation covers all structural beams in the plan. Accurate measurement requires
        careful reading of the <strong>ceiling framing plan</strong> on the PDF.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Under-Beams Studs</h3>

      <CmsImage src="/images/cms/beams--docx_0.png" alt="Under-Beams Studs PDF" />
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          From the ceiling framing plan on the PDF, count where beam ends fall on{" "}
          <strong>both</strong> sides.
        </li>
        <li>
          Exclude when a beam lands on another beam, in the middle of a doorway or cased opening, or
          on a corner.
        </li>
        <li>Determine the height of the beam by the ceiling height of the room it is in.</li>
        <li>
          Place total counts for <strong>each beam end at each plate height</strong> into the{" "}
          <strong>2x4 under beams</strong> section of the spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/beams--docx_1.png" alt="Under stud beams XL" />

      <h3 className="font-medium text-base text-dsld-text">Beams</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Count each beam from the ceiling framing plan on the PDF.</li>
        <li>
          Any that call for doubles, count for <strong>2</strong> instead of 1.
        </li>
        <li>
          Floating beams are indicated by &quot;<strong>F.B.</strong>&quot; at the end of the beam
          callout.
        </li>
        <li>
          Attics receive <strong>1 2x12x10</strong>.
        </li>
        <li>
          Place the count into the <strong>Beams</strong> section of the spreadsheet.
        </li>
      </ul>

      <CmsImage src="/images/cms/beams--docx_2.png" alt="Beams XL" />

      <p className="text-sm leading-relaxed">
        Beams often need to be added from the parts list as placeholders in the spreadsheet.
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>
          Go to the <strong>Master Parts List</strong> sheet within the Excel workbook.
        </li>
        <li>
          Find the part number and place it in the part number section of the spreadsheet — the next
          cell will auto-populate.
        </li>
      </ul>

      <CmsImage src="/images/cms/beams--docx_3.png" alt="Parts list XL" />

      <p className="text-sm leading-relaxed">
        Refer to this section from other modules if you need help navigating items from the parts
        list.
      </p>
    </div>
  );
}
