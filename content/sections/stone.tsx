import CmsImage from "@/components/CmsImage";

export default function Stone() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Stone</h2>

      <p className="text-sm leading-relaxed">Stone is a less common cladding type we use, but they still require calculations whenever they appear on a plan.</p>

      <h3 className="font-medium text-base text-dsld-text">Stone Area</h3>

      <p className="text-sm leading-relaxed">Real stone is calculated just like brick, lapped siding, and board and batten. Fake stone is calculated like stucco.</p>

      <CmsImage src="/images/cms/stone--course_0.png" alt="Stone Area – example 1" />

      <h3 className="font-medium text-base text-dsld-text">Miscellaneous Stone</h3>

      <p className="text-sm leading-relaxed">If there is a stone column or cap present, count from the elevations page and insert here:</p>

      <CmsImage src="/images/cms/stone--course_1.png" alt="Miscellaneous Stone – example 1" />

      <CmsImage src="/images/cms/stone--course_2.png" alt="Miscellaneous Stone – example 2" />
    </div>
  );
}
