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
  "Hips, Ridges & Valleys",
  "Flashing",
  "Structural",
  "Shelving & Trim",
  "Exterior",
  "Beams & Framing",
  "Finishing",
  "Regional",
] as const;

export const sections: SectionDef[] = [
  // Getting Started
  { slug: "workflow-overview", title: "Workflow Overview", category: "Getting Started", order: 1 },
  { slug: "request-for-estimation", title: "Request for Estimation", category: "Getting Started", order: 2 },
  { slug: "gathering-info", title: "Gathering the Information", category: "Getting Started", order: 3 },
  { slug: "autocad-overview", title: "AutoCAD Overview", category: "Getting Started", order: 4 },
  { slug: "plan-name", title: "Plan Name", category: "Getting Started", order: 5 },

  // Foundation
  { slug: "concrete", title: "Concrete", category: "Foundation", order: 6 },
  { slug: "sill-seal-exterior", title: "Sill Seal Exterior", category: "Foundation", order: 7 },
  { slug: "exterior-floating-forming", title: "Exterior & Floating Forming", category: "Foundation", order: 8 },
  { slug: "exterior-interior-footings", title: "Exterior & Interior Footings", category: "Foundation", order: 9 },

  // Roof Line
  { slug: "roof-check", title: "Roof Check", category: "Roof Line", order: 10 },
  { slug: "roof-area", title: "Roof Area", category: "Roof Line", order: 11 },
  { slug: "main-roof-shingles", title: "Main Roof Shingles", category: "Roof Line", order: 12 },
  { slug: "drip-edge-soffit-fascia", title: "Drip Edge & Soffit/Fascia", category: "Roof Line", order: 13 },

  // Hips, Ridges & Valleys
  { slug: "hips-ridges-valleys", title: "Hips, Ridges & Valleys", category: "Hips, Ridges & Valleys", order: 14 },
  { slug: "ridge-vents", title: "Ridge & Off Ridge Vents", category: "Hips, Ridges & Valleys", order: 15 },

  // Flashing
  { slug: "flashing-std-galvanized", title: "Standard Galvanized Flashing", category: "Flashing", order: 16 },
  { slug: "flashing-apron-hem", title: "Galvanized Apron & Hem Flashing", category: "Flashing", order: 17 },

  // Structural
  { slug: "rat-runners-strong-backs", title: "Rat Runners & Strong Backs", category: "Structural", order: 18 },
  { slug: "walls", title: "Walls", category: "Structural", order: 19 },
  { slug: "gables", title: "Gables", category: "Structural", order: 20 },
  { slug: "sheetrock", title: "Sheetrock", category: "Structural", order: 21 },
  { slug: "ledger-boards", title: "Ledger Boards", category: "Structural", order: 22 },
  { slug: "osb", title: "OSB", category: "Structural", order: 23 },

  // Shelving & Trim
  { slug: "quarter-round", title: "Quarter Round", category: "Shelving & Trim", order: 24 },
  { slug: "baseboards", title: "Baseboards", category: "Shelving & Trim", order: 25 },
  { slug: "crown", title: "Crown", category: "Shelving & Trim", order: 26 },
  { slug: "shelving", title: "Shelving", category: "Shelving & Trim", order: 27 },
  { slug: "cased-openings", title: "Cased Openings", category: "Shelving & Trim", order: 28 },

  // Exterior
  { slug: "granite", title: "Granite", category: "Exterior", order: 29 },
  { slug: "elevations", title: "Elevations", category: "Exterior", order: 30 },
  { slug: "stucco", title: "Stucco", category: "Exterior", order: 31 },
  { slug: "siding", title: "Siding", category: "Exterior", order: 32 },
  { slug: "flashing-doors-windows", title: "Doors & Windows vs Water Tables", category: "Exterior", order: 33 },
  { slug: "trim-section", title: "Trim Section", category: "Exterior", order: 34 },
  { slug: "posts-beams", title: "Posts & Beams", category: "Exterior", order: 35 },
  { slug: "windows", title: "Windows", category: "Exterior", order: 36 },
  { slug: "doors", title: "Doors", category: "Exterior", order: 37 },

  // Beams & Framing
  { slug: "bracing", title: "Bracing", category: "Beams & Framing", order: 38 },
  { slug: "beams", title: "Beams", category: "Beams & Framing", order: 39 },
  { slug: "ceiling-joists", title: "Ceiling Joists", category: "Beams & Framing", order: 40 },
  { slug: "rafters", title: "Rafters", category: "Beams & Framing", order: 41 },

  // Finishing
  { slug: "lighting", title: "Lighting", category: "Finishing", order: 42 },
  { slug: "plumbing", title: "Plumbing", category: "Finishing", order: 43 },
  { slug: "hvac", title: "HVAC", category: "Finishing", order: 44 },
  { slug: "paint", title: "Paint", category: "Finishing", order: 45 },
  { slug: "mirrors", title: "Mirrors", category: "Finishing", order: 46 },

  // Porches
  { slug: "porches", title: "Porches", category: "Structural", order: 47 },

  // Regional
  { slug: "regional-considerations", title: "Regional Considerations", category: "Regional", order: 48 },
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
