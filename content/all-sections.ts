import WorkflowOverview from "./sections/workflow-overview";
import RequestForEstimation from "./sections/request-for-estimation";
import GatheringInfo from "./sections/gathering-info";
import AutocadOverview from "./sections/autocad-overview";
import PlanName from "./sections/plan-name";
import Concrete from "./sections/concrete";
import SillSealExterior from "./sections/sill-seal-exterior";
import ExteriorFloatingForming from "./sections/exterior-floating-forming";
import ExteriorInteriorFootings from "./sections/exterior-interior-footings";
import RoofCheck from "./sections/roof-check";
import RoofArea from "./sections/roof-area";
import MainRoofShingles from "./sections/main-roof-shingles";
import DripEdgeSoffitFascia from "./sections/drip-edge-soffit-fascia";
import HipsRidgesValleys from "./sections/hips-ridges-valleys";
import RidgeVents from "./sections/ridge-vents";
import FlashingStdGalvanized from "./sections/flashing-std-galvanized";
import FlashingDoorsWindows from "./sections/flashing-doors-windows";
import FlashingApronHem from "./sections/flashing-apron-hem";
import RatRunnersStrongBacks from "./sections/rat-runners-strong-backs";
import Walls from "./sections/walls";
import Gables from "./sections/gables";
import Sheetrock from "./sections/sheetrock";
import LedgerBoards from "./sections/ledger-boards";
import Osb from "./sections/osb";
import QuarterRound from "./sections/quarter-round";
import Baseboards from "./sections/baseboards";
import Crown from "./sections/crown";
import Shelving from "./sections/shelving";
import CasedOpenings from "./sections/cased-openings";
import CypressPosts from "./sections/cypress-posts";
import AtticStairs from "./sections/attic-stairs";
import TrimSection from "./sections/trim-section";
import Granite from "./sections/granite";
import Elevations from "./sections/elevations";
import Stucco from "./sections/stucco";
import Siding from "./sections/siding";
import PostsBeams from "./sections/posts-beams";
import Windows from "./sections/windows";
import Doors from "./sections/doors";
import Bracing from "./sections/bracing";
import Beams from "./sections/beams";
import CeilingJoists from "./sections/ceiling-joists";
import Rafters from "./sections/rafters";
import Lighting from "./sections/lighting";
import Plumbing from "./sections/plumbing";
import Hvac from "./sections/hvac";
import Paint from "./sections/paint";
import Mirrors from "./sections/mirrors";
import RegionalConsiderations from "./sections/regional-considerations";
import Porches from "./sections/porches";

export const sectionContent: Record<string, React.ComponentType> = {
  "workflow-overview": WorkflowOverview,
  "request-for-estimation": RequestForEstimation,
  "gathering-info": GatheringInfo,
  "autocad-overview": AutocadOverview,
  "plan-name": PlanName,
  "concrete": Concrete,
  "sill-seal-exterior": SillSealExterior,
  "exterior-floating-forming": ExteriorFloatingForming,
  "exterior-interior-footings": ExteriorInteriorFootings,
  "roof-check": RoofCheck,
  "roof-area": RoofArea,
  "main-roof-shingles": MainRoofShingles,
  "drip-edge-soffit-fascia": DripEdgeSoffitFascia,
  "hips-ridges-valleys": HipsRidgesValleys,
  "ridge-vents": RidgeVents,
  "flashing-std-galvanized": FlashingStdGalvanized,
  "flashing-doors-windows": FlashingDoorsWindows,
  "flashing-apron-hem": FlashingApronHem,
  "rat-runners-strong-backs": RatRunnersStrongBacks,
  "walls": Walls,
  "gables": Gables,
  "sheetrock": Sheetrock,
  "ledger-boards": LedgerBoards,
  "osb": Osb,
  "quarter-round": QuarterRound,
  "baseboards": Baseboards,
  "crown": Crown,
  "shelving": Shelving,
  "cased-openings": CasedOpenings,
  "cypress-posts": CypressPosts,
  "attic-stairs": AtticStairs,
  "trim-section": TrimSection,
  "granite": Granite,
  "elevations": Elevations,
  "stucco": Stucco,
  "siding": Siding,
  "posts-beams": PostsBeams,
  "windows": Windows,
  "doors": Doors,
  "bracing": Bracing,
  "beams": Beams,
  "ceiling-joists": CeilingJoists,
  "rafters": Rafters,
  "lighting": Lighting,
  "plumbing": Plumbing,
  "hvac": Hvac,
  "paint": Paint,
  "mirrors": Mirrors,
  "regional-considerations": RegionalConsiderations,
  "porches": Porches,
};
