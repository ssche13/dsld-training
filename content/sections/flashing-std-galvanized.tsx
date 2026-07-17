import Note from "@/components/callouts/Note";
import CmsImage from "@/components/CmsImage";

export default function FlashingStdGalvanized() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Standard Galvanized Flashing</h2>

      <p className="text-base leading-relaxed">Standard Galvanized Flashing is used to line roof valleys. Note in the Hips, Ridges, &amp; Valleys section where you identified the length numbers in circles.</p>

      <Note>Standard galvanized flashing will not be taken off in Florida, North Alabama, or Tennessee.</Note>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>For <strong>Louisiana and Texas</strong> plans, use the <strong>PDF plan drawing</strong> for your valley lengths on pitch.</li>

        <li>For <strong>Mississippi and South Alabama</strong> plans, use the <strong>engineering plans</strong> for your valley lengths on pitch.</li>

        <li>
          Each standard galvanized piece is <strong>20″ wide</strong> and <strong>50' long</strong>. Tally how many valley runs you can add together to be <strong>equal to or less than</strong> 50'.
          <p className="mt-2 text-base leading-relaxed">Example: A 25' valley + another 25' valley would need 1 piece, totaling 50'. A 26' valley + a 25' valley would need 2 pieces. You can use the cutoff from these valleys to find a valley that can be added without exceeding 50'.</p>
        </li>

        <li>Place the resulting count in the appropriate cell of <strong>Standard Shingles and Flashing</strong> section of the respective estimating sheet.</li>

      </ul>

      <CmsImage src="/images/cms/flashing-std-galvanized--course_0.png" alt="Standard Galvanized Flashing – example 1" />

      <CmsImage src="/images/cms/flashing-std-galvanized--course_1.png" alt="Standard Galvanized Flashing – example 2" />
    </div>
  );
}
