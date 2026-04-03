

export default function FlashingStdGalvanized() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">
        Standard Galvanized Flashing
      </h2>

      <p className="text-sm leading-relaxed">
        Standard Galvanized Flashing is used to line <strong>roof valleys</strong>. Each piece is
        20&Prime; wide and <strong>50&apos; long</strong>. For this section, you will also utilize the
        Roof Plan for your valley lengths on pitch. Note in the Hips/Ridges/Valleys Module where you
        identified numbers in circles.
      </p>

      <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-2">
        <img src="/images/cms/flashing-std-galvanized--flashing-std-galvanized_0.png" alt="Standard Galvanized Flashing XL" className="w-full rounded" />
        <p className="mt-1 text-center text-xs text-gray-500">Standard Galvanized Flashing XL</p>
      </div>

      <h3 className="font-medium text-base text-dsld-text">Calculation Steps</h3>

      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Use the Roof Plan to identify the valley lengths on pitch.</li>
        <li>Tally how many valley runs you can add together to be equal to or less than 50&apos;. (e.g. A 25&apos; valley + another 25&apos; valley would need 1 piece, totaling 50&apos;. A 26&apos; valley + a 25&apos; valley would need 2 pieces. You can use the cutoff from these valleys to find a valley that can be added without exceeding 50&apos;.)</li>
        <li>Place the resulting count in the appropriate cell of <strong>Standard Shingles and Flashing</strong> section of the estimating sheet.</li>
      </ul>
    </div>
  );
}
