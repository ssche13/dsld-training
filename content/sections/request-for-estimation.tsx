import Note from "@/components/callouts/Note";

export default function RequestForEstimation() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Request for Estimation</h2>

      <p className="text-sm leading-relaxed">
        Estimation requests come from two main sources: the Monday meetings and the Estimating Sheet
        hosted on SharePoint. Both methods feed into the same tracking system.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Monday Meetings</h3>
      <p className="text-sm leading-relaxed">
        During the weekly Monday meeting, new plan requests are assigned to estimators. Take note of
        the plan name, subdivision, and any special instructions mentioned during the meeting.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Estimating Sheet on SharePoint</h3>
      <p className="text-sm leading-relaxed">
        The SharePoint Estimating Sheet is the central log for all pending, in-progress, and
        completed estimates. Check this sheet regularly to see new assignments and update your
        progress.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Plan Tracking by Area</h3>
      <p className="text-sm leading-relaxed">
        Plans are tracked by geographic area using Microsoft Teams buckets. Each area has its own
        bucket where plan files, updates, and questions are posted. Make sure you are monitoring the
        correct Teams bucket for your assigned area.
      </p>

      <Note>
        Always confirm your assignment on the SharePoint Estimating Sheet before starting work to
        avoid duplicate efforts.
      </Note>
    </div>
  );
}
