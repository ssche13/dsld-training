const colorMap: Record<string, string> = {
  red: "#DC2626",
  green: "#16A34A",
  yellow: "#EAB308",
  blue: "#2563EB",
  orange: "#EA580C",
  purple: "#9333EA",
  cyan: "#00BCD4",
  magenta: "#E91E63",
  teal: "#1A6E8C",
};

export default function ColorSwatch({ color }: { color: string }) {
  const hex = colorMap[color.toLowerCase()] || color;
  return (
    <span
      className="mx-1 inline-block h-3.5 w-3.5 rounded-full border border-gray-300 align-middle"
      style={{ backgroundColor: hex }}
      title={color}
    />
  );
}
