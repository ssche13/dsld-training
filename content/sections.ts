export interface SectionDef {
  slug: string;
  title: string;
  category: string;
  order: number;
}

export const categories = [
  "Getting Started",
  "Foundation",
  "Roof Line",
  "Structural",
  "Exterior",
  "Beams & Framing",
  "Flashing",
  "Exterior Trim",
  "Windows & Doors",
  "Shelving & Trim",
  "Finishing",
  "Advanced",
  "Regional",
] as const;

export const sections: SectionDef[] = [
  // Getting Started
  { slug: "workflow-overview", title: "Workflow Overview", category: "Getting Started", order: 1 },
  { slug: "request-for-estimation", title: "Request for Estimation", category: "Getting Started", order: 2 },
  { slug: "gathering-info", title: "Gathering the Information", category: "Getting Started", order: 3 },
  { slug: "autocad-overview", title: "AutoCAD Overview", category: "Getting Started", order: 4 },
  { slug: "plan-name", title: "Plan Identification", category: "Getting Started", order: 5 },
  // Foundation
  { slug: "concrete", title: "Concrete", category: "Foundation", order: 6 },
  { slug: "sill-seal-exterior", title: "Sill Seal Exterior", category: "Foundation", order: 7 },
  { slug: "exterior-floating-forming", title: "Exterior & Floating Forming", category: "Foundation", order: 8 },
  { slug: "exterior-interior-footings", title: "Exterior & Interior Footings", category: "Foundation", order: 9 },
  // Roof Line
  { slug: "roof-check", title: "Roof Check", category: "Roof Line", order: 10 },
  { slug: "roof-area", title: "Roof Area", category: "Roof Line", order: 11 },
  { slug: "main-roof-shingles", title: "Main Roof Shingles", category: "Roof Line", order: 12 },
  { slug: "drip-edge", title: "Drip Edge", category: "Roof Line", order: 13 },
  { slug: "ridge-vents", title: "Ridge & Off Ridge Vents", category: "Roof Line", order: 14 },
  // Structural
  { slug: "walls", title: "Walls", category: "Structural", order: 15 },
  { slug: "osb", title: "OSB", category: "Structural", order: 16 },
  { slug: "gables", title: "Gables", category: "Structural", order: 17 },
  { slug: "sheetrock", title: "Sheetrock", category: "Structural", order: 18 },
  { slug: "rat-runners-strong-backs", title: "Rat Runners & Strong Backs", category: "Structural", order: 19 },
  { slug: "porches", title: "Porches", category: "Structural", order: 20 },
  // Exterior
  { slug: "elevations", title: "Elevations", category: "Exterior", order: 21 },
  { slug: "stucco", title: "Stucco", category: "Exterior", order: 22 },
  { slug: "brick", title: "Brick", category: "Exterior", order: 23 },
  { slug: "siding", title: "Siding, Hardie & Board and Batten", category: "Exterior", order: 24 },
  { slug: "stone", title: "Stone", category: "Exterior", order: 25 },
  { slug: "posts-beams", title: "Posts & Beams", category: "Exterior", order: 26 },
  // Beams & Framing
  { slug: "hips-ridges-valleys", title: "Hips, Ridges & Valleys", category: "Beams & Framing", order: 27 },
  { slug: "beams", title: "Beams", category: "Beams & Framing", order: 28 },
  { slug: "collar-ties", title: "Collar Ties", category: "Beams & Framing", order: 29 },
  { slug: "purlins", title: "Purlins", category: "Beams & Framing", order: 30 },
  { slug: "bracing", title: "Bracing", category: "Beams & Framing", order: 31 },
  { slug: "rafters", title: "Rafters", category: "Beams & Framing", order: 32 },
  { slug: "ceiling-joists", title: "Ceiling Joists", category: "Beams & Framing", order: 33 },
  { slug: "trusses", title: "FL, NAL & TN Trusses", category: "Beams & Framing", order: 34 },
  { slug: "hangers", title: "Hangers", category: "Beams & Framing", order: 35 },
  { slug: "ledger-boards", title: "Ledger Boards", category: "Beams & Framing", order: 36 },
  // Flashing
  { slug: "flashing-std-galvanized", title: "Standard Galvanized Flashing", category: "Flashing", order: 37 },
  { slug: "flashing-apron-hem", title: "Gutter Apron & Hem Flashing", category: "Flashing", order: 38 },
  { slug: "flashing-doors-windows", title: "Galvanized Steel Flashing", category: "Flashing", order: 39 },
  // Exterior Trim
  { slug: "hardie-exterior-trim", title: "Hardie & Exterior Trim", category: "Exterior Trim", order: 40 },
  { slug: "header-calculator", title: "Header Calculator", category: "Exterior Trim", order: 41 },
  // Windows & Doors
  { slug: "windows", title: "Windows", category: "Windows & Doors", order: 42 },
  { slug: "doors", title: "Doors", category: "Windows & Doors", order: 43 },
  // Shelving & Trim
  { slug: "mirrors", title: "Mirrors", category: "Shelving & Trim", order: 44 },
  { slug: "quarter-round", title: "Quarter Round", category: "Shelving & Trim", order: 45 },
  { slug: "baseboards", title: "Baseboards", category: "Shelving & Trim", order: 46 },
  { slug: "crown", title: "Crown", category: "Shelving & Trim", order: 47 },
  { slug: "shelving", title: "Shelving", category: "Shelving & Trim", order: 48 },
  { slug: "attic-stairs", title: "Attic Stairs", category: "Shelving & Trim", order: 49 },
  { slug: "granite", title: "Granite", category: "Shelving & Trim", order: 50 },
  { slug: "cased-openings", title: "Cased Openings", category: "Shelving & Trim", order: 51 },
  // Finishing
  { slug: "lighting", title: "Lighting", category: "Finishing", order: 52 },
  { slug: "plumbing", title: "Plumbing", category: "Finishing", order: 53 },
  { slug: "hvac", title: "HVAC", category: "Finishing", order: 54 },
  { slug: "paint", title: "Paint", category: "Finishing", order: 55 },
  // Advanced
  { slug: "two-story-homes", title: "Two Story Homes", category: "Advanced", order: 56 },
  { slug: "multi-units", title: "Multi-Units", category: "Advanced", order: 57 },
  // Regional
  { slug: "regional-considerations", title: "Regional Considerations", category: "Regional", order: 58 },
];

export function getSectionsByCategory(): Record<string, SectionDef[]> {
  const grouped: Record<string, SectionDef[]> = {};
  for (const cat of categories) {
    grouped[cat] = sections.filter((s) => s.category === cat).sort((a, b) => a.order - b.order);
  }
  return grouped;
}

export function getSectionBySlug(slug: string): SectionDef | undefined {
  return sections.find((s) => s.slug === slug);
}

export function getAdjacentSections(slug: string): { prev: SectionDef | null; next: SectionDef | null } {
  const sorted = [...sections].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((s) => s.slug === slug);
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
