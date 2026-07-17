export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
}

// Terms and abbreviations used throughout the DSLD estimating course.
export const glossary: GlossaryTerm[] = [
  // AutoCAD Commands & Tools
  { term: "LINE", category: "AutoCAD Commands & Tools", definition: "Draws straight line segments. Used to trace walls, rooflines, and other elements in the color that matches the spreadsheet." },
  { term: "POLYLINE (PLINE)", category: "AutoCAD Commands & Tools", definition: "Draws a connected series of segments treated as a single object. Used to trace irregular outlines, such as stair walls, before hatching." },
  { term: "TLEN", category: "AutoCAD Commands & Tools", definition: "DSLD custom command that returns the Total LENgth (linear footage) of all selected lines — the primary way quantities are read off a takeoff." },
  { term: "HATCH (BHATCH)", category: "AutoCAD Commands & Tools", definition: "Fills a bounded area with a pattern at a set spacing (e.g., 16\" O.C.) to generate stud, rafter, or joist lines inside an outline." },
  { term: "EXPLODE", category: "AutoCAD Commands & Tools", definition: "Breaks a compound object (hatch, polyline, block) into individual line segments so they can be counted or measured with TLEN." },
  { term: "mTEXT", category: "AutoCAD Commands & Tools", definition: "Multiline text. Used to annotate quantities — such as linear footage — next to elements on the drawing." },
  { term: "SNAP", category: "AutoCAD Commands & Tools", definition: "A drawing aid that locks the cursor to a grid or object points for precise tracing." },
  { term: "ORTHO", category: "AutoCAD Commands & Tools", definition: "Constrains drawing to horizontal and vertical directions for straight, square lines." },
  { term: "O.C. (On Center)", category: "AutoCAD Commands & Tools", definition: "Spacing measured from the center of one framing member to the center of the next, e.g., 16\" O.C." },
  { term: "Construct", category: "AutoCAD Commands & Tools", definition: "In an AutoCAD Architecture project, a drawing element (walls, roof framing, foundation, etc.) pulled into the takeoff workspace." },
  { term: "Drawing Template", category: "AutoCAD Commands & Tools", definition: "The standard NEW DSLD Drawing Template applied to a new construct so layers, colors, and commands match company standards." },
  { term: "Plan Family", category: "AutoCAD Commands & Tools", definition: "The parent name a group of plans is filed under in AutoCAD. The family name — found in the PDF title block — does not always match the plan name." },

  // Estimating & Framing
  { term: "Takeoff", category: "Estimating & Framing", definition: "The process of measuring and counting materials from a plan to produce an estimate." },
  { term: "Knee Wall", category: "Estimating & Framing", definition: "A short (less than full-height) wall used in attics and bonus rooms, at kitchen bars, or to make up the difference between two ceiling heights." },
  { term: "Regular Wall", category: "Estimating & Framing", definition: "A standard full-height wall traced for framing and sheetrock quantities." },
  { term: "Header", category: "Estimating & Framing", definition: "A beam over a door, window, or opening that carries the load above it. Sized by span using the Header Calculator." },
  { term: "Bracing", category: "Estimating & Framing", definition: "Members that stabilize the roof and wall framing. Traced from the circles-with-tails shown on the roof framing layout." },
  { term: "Purlin", category: "Estimating & Framing", definition: "A horizontal member running between rafters or trusses to support them along their span." },
  { term: "Collar Tie", category: "Estimating & Framing", definition: "A horizontal member connecting opposing rafters near the ridge to resist uplift and spreading." },
  { term: "Rafter", category: "Estimating & Framing", definition: "A sloped framing member running from the ridge to the wall plate that supports the roof deck." },
  { term: "Ceiling Joist", category: "Estimating & Framing", definition: "A horizontal framing member that supports the ceiling below and ties opposing walls together." },
  { term: "Floor Joist", category: "Estimating & Framing", definition: "A horizontal framing member that supports the floor above." },
  { term: "Rat Runner", category: "Estimating & Framing", definition: "A continuous horizontal board fixed across ceiling joists or trusses to keep them aligned and braced." },
  { term: "Strong Back", category: "Estimating & Framing", definition: "An L-shaped member added on top of ceiling joists or trusses to stiffen them and control deflection." },
  { term: "Ledger Board", category: "Estimating & Framing", definition: "A board fastened to a wall to support the ends of joists or a deck/porch structure." },
  { term: "Truss", category: "Estimating & Framing", definition: "A pre-engineered triangulated roof or floor frame. Used in FL/NAL/TN instead of stick framing, so knee walls are not taken off." },
  { term: "Truss Step-Up", category: "Estimating & Framing", definition: "A raised truss used in truss-framed regions to make up the difference between two ceiling heights, in place of a knee wall." },
  { term: "Hanger", category: "Estimating & Framing", definition: "A metal connector that supports the end of a joist, rafter, or beam where it meets another member." },

  // Roof
  { term: "Roof Check", category: "Roof", definition: "A verification step that confirms roof areas and pitches before quantities are taken off." },
  { term: "Pitch", category: "Roof", definition: "The slope of a roof, expressed as rise over 12\" of run (e.g., 6/12). Areas are color-coded by pitch." },
  { term: "Hip", category: "Roof", definition: "The external angle where two sloping roof planes meet." },
  { term: "Ridge", category: "Roof", definition: "The horizontal line at the top where two roof slopes meet." },
  { term: "Valley", category: "Roof", definition: "The internal angle where two sloping roof planes meet and channel water." },
  { term: "Drip Edge", category: "Roof", definition: "Metal flashing at the roof edges that directs water away from the fascia." },
  { term: "Starter Shingles", category: "Roof", definition: "The first course of shingles installed along the eaves and rakes to seal the edge." },
  { term: "Ridge / Off-Ridge Vent", category: "Roof", definition: "Roof ventilation installed at the ridge or on the slope to exhaust attic air." },
  { term: "Bell Overhang", category: "Roof", definition: "A flared, bell-shaped eave or overhang detail." },

  // Exterior
  { term: "Soffit", category: "Exterior", definition: "The finished underside of a roof overhang (eave)." },
  { term: "Fascia", category: "Exterior", definition: "The vertical board along the roof edge that the gutter attaches to." },
  { term: "Birdbox", category: "Exterior", definition: "The boxed-in return where the soffit and fascia wrap around the end of an overhang." },
  { term: "Gable", category: "Exterior", definition: "The triangular wall section at the end of a ridged roof." },
  { term: "Stucco", category: "Exterior", definition: "A cement-based exterior finish measured by area." },
  { term: "Brick Lintel", category: "Exterior", definition: "The steel angle that spans an opening to carry the brick veneer above it." },
  { term: "Board and Batten", category: "Exterior", definition: "Exterior cladding of wide boards with narrow battens covering the seams." },
  { term: "Hardie", category: "Exterior", definition: "Fiber-cement siding and trim (James Hardie brand); a common exterior cladding." },
  { term: "Water Table", category: "Exterior", definition: "A horizontal trim ledge low on the exterior wall that sheds water. Flashed with 1\" galvanized steel." },
  { term: "Home Wrap", category: "Exterior", definition: "A weather-resistive barrier applied over sheathing before the cladding goes on." },
  { term: "Sill Seal", category: "Exterior", definition: "A foam gasket between the foundation and the sill plate that blocks air and moisture." },
  { term: "Poly Black", category: "Exterior", definition: "6-mil black polyethylene sheeting used where brick connects to the concrete foundation." },

  // Foundation
  { term: "Floating Forming", category: "Foundation", definition: "Forming for a monolithic slab that \"floats\" on a thickened edge, as opposed to separate footing-based forming." },
  { term: "Footing", category: "Foundation", definition: "The widened concrete base that spreads structural loads into the soil." },

  // Interior & Finish
  { term: "Cased Opening", category: "Interior & Finish", definition: "A finished doorway without a door, trimmed with casing. Openings over 6 ft get special handling." },
  { term: "Baseboard", category: "Interior & Finish", definition: "Trim molding installed where the wall meets the floor." },
  { term: "Quarter Round", category: "Interior & Finish", definition: "Small quarter-circle molding installed at the joint between the baseboard and the floor." },
  { term: "Crown", category: "Interior & Finish", definition: "Decorative molding installed at the joint between the wall and the ceiling." },
  { term: "Backsplash", category: "Interior & Finish", definition: "The finished surface, often tile, on the wall behind a counter." },
  { term: "OSB", category: "Interior & Finish", definition: "Oriented Strand Board — a structural sheathing panel used for wall and roof decking." },

  // Materials & Lumber
  { term: "SYP", category: "Materials & Lumber", definition: "Southern Yellow Pine — a common framing lumber species." },
  { term: "MDF", category: "Materials & Lumber", definition: "Medium-Density Fiberboard — a smooth panel material used for some trim." },
  { term: "LAM / LVL", category: "Materials & Lumber", definition: "Laminated beam / Laminated Veneer Lumber — engineered lumber for beams and headers." },
  { term: "6 MIL", category: "Materials & Lumber", definition: "A thickness of 6 thousandths of an inch, used to describe poly sheeting." },

  // Regional
  { term: "LA/TX", category: "Regional", definition: "Louisiana / Texas plans — a stick-framed region that uses the ceiling framing layout and knee walls." },
  { term: "MS/SAL", category: "Regional", definition: "Mississippi / South Alabama plans." },
  { term: "FL/NAL/TN", category: "Regional", definition: "Florida / North Alabama / Tennessee plans — truss-framed, using truss step-ups instead of knee walls." },

  // Spreadsheet & Workflow
  { term: "White Cell", category: "Spreadsheet & Workflow", definition: "An input cell in the estimating spreadsheet where you type a quantity." },
  { term: "NewStar", category: "Spreadsheet & Workflow", definition: "The system the estimating coordinator uploads the approved final estimate into." },
  { term: "Redline", category: "Spreadsheet & Workflow", definition: "A marked-up correction submitted when the plan drawing and engineering do not line up after double-checking both." },
];

export const glossaryCategories = Array.from(new Set(glossary.map((t) => t.category)));
