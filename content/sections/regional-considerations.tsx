import Note from "@/components/callouts/Note";

export default function RegionalConsiderations() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Regional Considerations</h2>

      <Note>
        Always check the regional requirements for your assigned area before starting an estimate.
        Construction methods and code requirements vary significantly between regions.
      </Note>

      <h3 className="font-medium text-base text-dsld-text">Stick &amp; Frame vs. Truss Frame</h3>
      <p className="text-sm leading-relaxed">
        DSLD uses two primary roof framing methods. <strong>Stick &amp; Frame</strong> construction
        uses individual rafters, ridge boards, and ceiling joists built on-site. <strong>Truss
        Frame</strong> construction uses pre-engineered trusses delivered to the site and set in
        place. The framing method affects how you estimate rafters, ceiling joists, and bracing.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Florida</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Florida homes must meet wind zone requirements — check the plan for the specific wind speed rating.</li>
        <li>Hurricane straps and additional bracing are required in high-wind zones.</li>
        <li>Some Florida plans use pier and piling foundations instead of slab-on-grade.</li>
        <li>Impact-rated windows may be required depending on the wind zone.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">Houston</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Houston-area plans typically use slab-on-grade foundations with post-tension cables.</li>
        <li>Soil conditions may require deeper footings or additional foundation reinforcement.</li>
        <li>Check for energy code requirements specific to the Houston climate zone.</li>
      </ul>

      <h3 className="font-medium text-base text-dsld-text">North Alabama &amp; Nashville</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>These regions may use crawl-space or basement foundations rather than slab-on-grade.</li>
        <li>Insulation requirements differ from Gulf Coast regions due to the colder climate zone.</li>
        <li>Check for seismic design requirements in the structural notes.</li>
        <li>Frost line depth affects footing requirements — verify against local code.</li>
      </ul>
    </div>
  );
}
