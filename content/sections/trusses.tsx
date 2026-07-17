import CmsImage from "@/components/CmsImage";

export default function Trusses() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Florida, North Alabama, and Tennessee Trusses</h2>

      <p className="text-base leading-relaxed">These regions utilize truss systems for roof framing. A truss is a rigid engineering structure made up of long, slender members connected at the ends. Because of this, <strong>through bracing</strong> and <strong>wind bracing</strong> are required to be taken off in these regions. You will use the layout page from Wilson Lumber to complete this section.</p>

      <h3 className="font-medium text-lg text-dsld-text">Through Bracing</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Copy up the roof polyline that you traced for the roof area previously.</li>

        <li>Refer to the engineering plans to look for any shaded boxes or outlined boxes with <strong>“PB”</strong> callouts in them.</li>

        <li>
          PB stands for piggyback.
          <CmsImage src="/images/cms/trusses--course_0.png" alt="Through Bracing – example 1" />
        </li>

        <li>
          Mimic these shapes using <strong>POLYLINE</strong> in AutoCAD to the best of your ability.
          <CmsImage src="/images/cms/trusses--course_1.png" alt="Through Bracing – example 2" />
        </li>

        <li>Move the shapes up to where your copied roof area polyline is.</li>

        <li>Hatch the copied roof area polyline at <strong>48’’ O.C.</strong></li>

        <li>
          Hatch the piggyback shapes at <strong>24’’ O.C.</strong>
          <CmsImage src="/images/cms/trusses--course_2.png" alt="Through Bracing – example 3" />
        </li>

        <li>Explode all polylines.</li>

        <li>Use <strong>TLEN</strong> to get the total linear footage of all polylines.</li>

        <li>Round up to the next hundredth, then insert into the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/trusses--course_3.png" alt="Through Bracing – example 4" />

      <h3 className="font-medium text-lg text-dsld-text">Wind Bracing</h3>

      <p className="text-base leading-relaxed">Wind bracing is only taken off on hips of the roof where rafters are spanning horizontally instead of vertically.</p>

      <CmsImage src="/images/cms/trusses--course_4.png" alt="Wind Bracing – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          Use <strong>POLYLINE</strong> to trace the hips in AutoCAD that have horizontal rafter spans.
          <CmsImage src="/images/cms/trusses--course_5.png" alt="Wind Bracing – example 2" />
        </li>

        <li>Move the shapes up to where your through bracing is.</li>

        <li>
          Hatch the polylines at <strong>24’’ O.C.</strong> and explode.
          <CmsImage src="/images/cms/trusses--course_6.png" alt="Wind Bracing – example 3" />
        </li>

        <li>Use <strong>TLEN</strong> to get the linear footage of the polylines.</li>

        <li>Round to the nearest 50, then enter into the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/trusses--course_7.png" alt="Wind Bracing – example 4" />

      <h3 className="font-medium text-lg text-dsld-text">North Alabama and Tennessee Plans</h3>

      <p className="text-base leading-relaxed">Step-ups are also taken off in these regions. Step ups are traced on porch interior walls and garage interior walls when there is a ceiling height change.</p>

      <CmsImage src="/images/cms/trusses--course_8.png" alt="North Alabama and Tennessee Plans – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Use <strong>TLEN</strong> to get the total linear footage of the lines traced.</li>

        <li>Round up, then enter into the spreadsheet.</li>

      </ul>

      <CmsImage src="/images/cms/trusses--course_9.png" alt="North Alabama and Tennessee Plans – example 2" />
    </div>
  );
}
