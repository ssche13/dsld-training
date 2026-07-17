// Curated links into the 2021 International Residential Code (IRC) on ICC
// Digital Codes, grouped by chapter. Chapter URLs are verified stable; the
// section number in each entry points to the exact provision to read.

export interface IrcEntry {
  code: string;        // IRC section number, e.g. "R602.7"
  title: string;       // what the section covers
  note: string;        // why it matters to the takeoff
  relatedSlug?: string; // course section this connects to
}

export interface IrcChapter {
  chapter: string;     // display name
  url: string;         // ICC Digital Codes chapter URL (2021 IRC)
  entries: IrcEntry[];
}

export const ircChapters: IrcChapter[] = [
  {
    chapter: "Chapter 3 — Building Planning",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-3-building-planning",
    entries: [
      { code: "R301", title: "Design Criteria (wind & seismic loads)", note: "The wind and seismic loads that drive extra bracing and connectors in each region.", relatedSlug: "bracing" },
      { code: "R305", title: "Minimum Ceiling Height", note: "Sets the ceiling heights you read from callouts when measuring walls.", relatedSlug: "walls" },
      { code: "R308", title: "Safety Glazing", note: "Where tempered glass is required in windows and doors.", relatedSlug: "windows" },
      { code: "R310", title: "Emergency Escape & Rescue Openings", note: "Egress window size rules behind bedroom window counts.", relatedSlug: "windows" },
      { code: "R311.7", title: "Stairways", note: "Stair geometry that governs the stair framing takeoff in two-story homes.", relatedSlug: "two-story-homes" },
      { code: "R317 / R318", title: "Protection Against Decay & Termites", note: "Why sill seal and treated plates sit between framing and concrete.", relatedSlug: "sill-seal-exterior" },
    ],
  },
  {
    chapter: "Chapter 4 — Foundations",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-4-foundations",
    entries: [
      { code: "R403", title: "Footings", note: "Footing sizing and depth for the exterior and interior footing takeoff.", relatedSlug: "exterior-interior-footings" },
      { code: "R404", title: "Foundation & Retaining Walls", note: "Foundation wall requirements behind exterior and floating forming.", relatedSlug: "exterior-floating-forming" },
      { code: "R406", title: "Foundation Waterproofing & Dampproofing", note: "Moisture protection related to poly black where brick meets the foundation.", relatedSlug: "sill-seal-exterior" },
    ],
  },
  {
    chapter: "Chapter 5 — Floors",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-5-floors",
    entries: [
      { code: "R502", title: "Wood Floor Framing", note: "Floor joist spans and layout for the floor-joist takeoff.", relatedSlug: "ceiling-joists" },
      { code: "R506", title: "Concrete Floors on Ground", note: "Slab-on-ground requirements for the concrete takeoff.", relatedSlug: "concrete" },
    ],
  },
  {
    chapter: "Chapter 6 — Wall Construction",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-6-wall-construction",
    entries: [
      { code: "R602", title: "Wood Wall Framing", note: "Stud sizing, spacing, and plates behind the wall takeoff.", relatedSlug: "walls" },
      { code: "R602.7", title: "Headers", note: "The header spans the Header Calculator is built on.", relatedSlug: "header-calculator" },
      { code: "R602.10", title: "Wall Bracing", note: "Braced-wall requirements that drive bracing and gable takeoffs.", relatedSlug: "bracing" },
      { code: "Table R602.3", title: "Wall Sheathing & Fastening", note: "OSB sheathing thickness and nailing for the wall-sheathing takeoff.", relatedSlug: "osb" },
    ],
  },
  {
    chapter: "Chapter 7 — Wall Covering",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-7-wall-covering",
    entries: [
      { code: "R702", title: "Interior Covering (Gypsum Board)", note: "Sheetrock thickness and support spacing.", relatedSlug: "sheetrock" },
      { code: "R703.2", title: "Water-Resistive Barrier", note: "The house wrap layer required behind exterior cladding.", relatedSlug: "hardie-exterior-trim" },
      { code: "R703.4", title: "Flashing", note: "Flashing required at doors, windows, and water tables.", relatedSlug: "flashing-doors-windows" },
      { code: "R703.5", title: "Wood, Hardboard & Panel Siding", note: "Rules behind board-and-batten and panel siding.", relatedSlug: "siding" },
      { code: "R703.6", title: "Exterior Plaster (Stucco)", note: "Stucco assembly and thickness for the stucco takeoff.", relatedSlug: "stucco" },
      { code: "R703.7", title: "Stone & Masonry Veneer", note: "Brick and stone veneer support, ties, and lintels.", relatedSlug: "brick" },
      { code: "R703.10", title: "Fiber-Cement Siding", note: "Hardie lap and panel siding requirements.", relatedSlug: "hardie-exterior-trim" },
    ],
  },
  {
    chapter: "Chapter 8 — Roof-Ceiling Construction",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-8-roof-ceiling-construction",
    entries: [
      { code: "R802", title: "Wood Roof Framing", note: "Rafter and ceiling-joist spans, ridge, and collar ties.", relatedSlug: "rafters" },
      { code: "R802.4", title: "Ceiling Joists & Collar Ties", note: "Collar tie and purlin placement in the roof frame.", relatedSlug: "collar-ties" },
      { code: "R802.10", title: "Wood Trusses", note: "Truss requirements for FL/NAL/TN plans.", relatedSlug: "trusses" },
      { code: "R802.11", title: "Roof Tie-Down (Uplift)", note: "Uplift connectors behind wind bracing and truss tie-downs.", relatedSlug: "bracing" },
      { code: "R806", title: "Roof Ventilation", note: "Ridge and off-ridge vent area requirements.", relatedSlug: "ridge-vents" },
      { code: "R807", title: "Attic Access", note: "Attic access opening rules for the attic-stairs takeoff.", relatedSlug: "attic-stairs" },
    ],
  },
  {
    chapter: "Chapter 9 — Roof Assemblies",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-9-roof-assemblies",
    entries: [
      { code: "R905.2", title: "Asphalt Shingles", note: "Shingle application behind the main roof shingle takeoff.", relatedSlug: "main-roof-shingles" },
      { code: "R905.2.8.5", title: "Drip Edge", note: "Required drip edge at eaves and rakes.", relatedSlug: "drip-edge" },
      { code: "R903", title: "Weather Protection & Flashing", note: "Roof flashing requirements for galvanized and apron/hem flashing.", relatedSlug: "flashing-apron-hem" },
    ],
  },
  {
    chapter: "Chapter 11 — Energy Efficiency",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-11-re-energy-efficiency",
    entries: [
      { code: "N1102", title: "Building Thermal Envelope", note: "Insulation, air sealing, and the weather barrier assembly.", relatedSlug: "hangers" },
    ],
  },
  {
    chapter: "Chapter 12 — Mechanical",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-12-mechanical-administration",
    entries: [
      { code: "M1507", title: "Mechanical Ventilation", note: "Whole-house and exhaust ventilation behind hood vents and returns.", relatedSlug: "hvac" },
      { code: "M1601", title: "Duct Systems", note: "Duct requirements related to the HVAC takeoff.", relatedSlug: "hvac" },
    ],
  },
  {
    chapter: "Chapters 25-26 — Plumbing",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-26-general-plumbing-requirements",
    entries: [
      { code: "Ch. 25", title: "Plumbing Administration", note: "Scope and inspection framework for plumbing installations.", relatedSlug: "plumbing" },
      { code: "Ch. 26", title: "General Plumbing Requirements", note: "General rules behind tub, shower, toilet, and sink counts.", relatedSlug: "plumbing" },
    ],
  },
  {
    chapter: "Chapters 34 & 40 — Electrical",
    url: "https://codes.iccsafe.org/content/IRC2021P1/chapter-40-devices-and-luminaires",
    entries: [
      { code: "Ch. 34", title: "General Electrical Requirements", note: "Scope and general rules for the electrical/lighting takeoff.", relatedSlug: "lighting" },
      { code: "Ch. 40", title: "Devices & Luminaires", note: "Lighting fixture and device requirements.", relatedSlug: "lighting" },
    ],
  },
];
