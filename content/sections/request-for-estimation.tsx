import Note from "@/components/callouts/Note";

export default function RequestForEstimation() {
  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl text-dsld-teal">Request for Estimation</h2>

      <p className="text-base leading-relaxed">Estimation requests come from two main sources: Monday meetings and the New Plan Pipeline Sheet hosted on SharePoint. Both methods feed into the same tracking system.</p>

      <p className="text-base leading-relaxed"><strong>Monday Meetings</strong></p>

      <p className="text-base leading-relaxed">During the weekly Monday meeting, new plan requests are assigned to estimators. Take note of the plan name, subdivision, and any special instructions mentioned during the meeting.</p>

      <p className="text-base leading-relaxed"><strong>New Plan Pipeline Sheet on SharePoint</strong></p>

      <p className="text-base leading-relaxed">The SharePoint estimating sheet is the central log for all pending, in-progress, and completed estimates. Check this sheet regularly to see new assignments and update your progress.</p>

      <p className="text-base leading-relaxed"><strong>Where To Find Plans</strong></p>

      <p className="text-base leading-relaxed">Plans are tracked by geographic area using the New Plan Pipeline sheet. The locations of where we store our plans can be found through File Explorer.</p>

      <ul className="list-disc pl-6 space-y-2 text-base">

        <li>For existing plans, navigate as follows: <strong>Shared Files &gt; House Plans</strong></li>

        <li>
          For new plans, navigate as follows: <strong>Shared Files &gt; Planning Department Info &gt; zNew Plan Development</strong>
          <p className="mt-2 text-base leading-relaxed"><strong>Regional Considerations</strong></p>
          <p className="mt-2 text-base leading-relaxed">We build homes in the following areas:</p>
        </li>

        <li>Louisiana</li>

        <li>Mississippi</li>

        <li>Alabama</li>

        <li>Tennessee</li>

        <li>Texas</li>

        <li>Florida</li>

      </ul>

      <p className="text-base leading-relaxed">While there are some elements of the estimation process that carry over across all regions, there are other elements that are taken off differently. This will be discussed further in the course to follow.</p>

      <Note>Always confirm your assignment on the SharePoint Estimating Sheet before starting work to avoid duplicate efforts.</Note>
    </div>
  );
}
