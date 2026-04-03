import ImagePlaceholder from "@/components/callouts/ImagePlaceholder";
import Note from "@/components/callouts/Note";

export default function HomeWrap() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg text-dsld-teal">Home Wrap</h2>

      <p className="text-sm leading-relaxed">
        Home wrap (house wrap) is a weather-resistant barrier applied to the exterior sheathing
        before siding or cladding is installed. It prevents moisture infiltration while allowing
        water vapor to escape from inside the wall cavity.
      </p>

      <h3 className="font-medium text-base text-dsld-text">Estimation</h3>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Home wrap covers the entire exterior wall surface area of the home.</li>
        <li>Use the exterior wall measurements already calculated in previous sections.</li>
        <li>Place the resulting total into the corresponding cell of the spreadsheet.</li>
      </ul>

      <ImagePlaceholder label="Home Wrap XL" />

      <Note>
        Home wrap is applied to all exterior walls regardless of the type of cladding (siding, brick, stucco, etc.)
        that will be installed over it.
      </Note>
    </div>
  );
}
