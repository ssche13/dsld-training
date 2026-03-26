export default function SpreadsheetRef({ section, cell }: { section: string; cell: string }) {
  return (
    <div className="my-3 inline-flex items-center gap-2 rounded-lg border border-dsld-green/30 bg-dsld-green-light px-4 py-2">
      <svg className="h-4 w-4 text-dsld-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="text-sm">
        <span className="text-dsld-gray">Enter in spreadsheet:</span>{" "}
        <strong className="text-dsld-text">{section}</strong> &rarr; <strong className="text-dsld-green">{cell}</strong>
      </span>
    </div>
  );
}
