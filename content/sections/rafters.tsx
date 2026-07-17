import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function Rafters() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Rafters</h2>

      <p className="text-base leading-relaxed">Rafters are the sloped framing members that form the roof structure. Estimation includes counting common rafters, hip rafters, valley rafters, and jack rafters as shown on the <strong>roof plan.</strong></p>

      <Note>Rafters are not taken off in Florida, North Alabama, or Tennessee.</Note>

      <h3 className="font-medium text-lg text-dsld-text">Louisiana and Texas Plans</h3>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>
          Use the roof plan from the PDF to count each rafter type <strong>by number.</strong> Those numbers indicate the 2x6 length of each rafter. Be careful not to include any pitch numbers into your count.
          <CmsImage src="/images/cms/rafters--course_0.png" alt="Louisiana and Texas Plans – example 1" />
        </li>

        <li>Place each count into the <strong>Rafters</strong> section of the spreadsheet based on length.</li>

      </ul>

      <CmsImage src="/images/cms/rafters--course_1.png" alt="Louisiana and Texas Plans – example 2" />

      <h3 className="font-medium text-lg text-dsld-text">Mississippi and South Alabama Plans</h3>

      <p className="text-base leading-relaxed">You will follow the same logic for counting rafters, except you will use the engineering plans as your reference.</p>

      <CmsImage src="/images/cms/rafters--course_2.png" alt="Mississippi and South Alabama Plans – example 1" />

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>Place each count into the <strong>Rafters</strong> section of the spreadsheet based on length.</li>

      </ul>

      <CmsImage src="/images/cms/rafters--course_3.png" alt="Mississippi and South Alabama Plans – example 2" />
    </div>
  );
}
