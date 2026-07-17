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
import DripEdge from "./sections/drip-edge";
import RidgeVents from "./sections/ridge-vents";
import Walls from "./sections/walls";
import Osb from "./sections/osb";
import Gables from "./sections/gables";
import Sheetrock from "./sections/sheetrock";
import RatRunnersStrongBacks from "./sections/rat-runners-strong-backs";
import Porches from "./sections/porches";
import Elevations from "./sections/elevations";
import Stucco from "./sections/stucco";
import Brick from "./sections/brick";
import Siding from "./sections/siding";
import Stone from "./sections/stone";
import PostsBeams from "./sections/posts-beams";
import HipsRidgesValleys from "./sections/hips-ridges-valleys";
import Beams from "./sections/beams";
import CollarTies from "./sections/collar-ties";
import Purlins from "./sections/purlins";
import Bracing from "./sections/bracing";
import Rafters from "./sections/rafters";
import CeilingJoists from "./sections/ceiling-joists";
import Trusses from "./sections/trusses";
import Hangers from "./sections/hangers";
import LedgerBoards from "./sections/ledger-boards";
import FlashingStdGalvanized from "./sections/flashing-std-galvanized";
import FlashingApronHem from "./sections/flashing-apron-hem";
import FlashingDoorsWindows from "./sections/flashing-doors-windows";
import HardieExteriorTrim from "./sections/hardie-exterior-trim";
import HeaderCalculator from "./sections/header-calculator";
import Windows from "./sections/windows";
import Doors from "./sections/doors";
import Mirrors from "./sections/mirrors";
import QuarterRound from "./sections/quarter-round";
import Baseboards from "./sections/baseboards";
import Crown from "./sections/crown";
import Shelving from "./sections/shelving";
import AtticStairs from "./sections/attic-stairs";
import Granite from "./sections/granite";
import CasedOpenings from "./sections/cased-openings";
import Lighting from "./sections/lighting";
import Plumbing from "./sections/plumbing";
import Hvac from "./sections/hvac";
import Paint from "./sections/paint";
import TwoStoryHomes from "./sections/two-story-homes";
import MultiUnits from "./sections/multi-units";
import RegionalConsiderations from "./sections/regional-considerations";

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
  "drip-edge": DripEdge,
  "ridge-vents": RidgeVents,
  "walls": Walls,
  "osb": Osb,
  "gables": Gables,
  "sheetrock": Sheetrock,
  "rat-runners-strong-backs": RatRunnersStrongBacks,
  "porches": Porches,
  "elevations": Elevations,
  "stucco": Stucco,
  "brick": Brick,
  "siding": Siding,
  "stone": Stone,
  "posts-beams": PostsBeams,
  "hips-ridges-valleys": HipsRidgesValleys,
  "beams": Beams,
  "collar-ties": CollarTies,
  "purlins": Purlins,
  "bracing": Bracing,
  "rafters": Rafters,
  "ceiling-joists": CeilingJoists,
  "trusses": Trusses,
  "hangers": Hangers,
  "ledger-boards": LedgerBoards,
  "flashing-std-galvanized": FlashingStdGalvanized,
  "flashing-apron-hem": FlashingApronHem,
  "flashing-doors-windows": FlashingDoorsWindows,
  "hardie-exterior-trim": HardieExteriorTrim,
  "header-calculator": HeaderCalculator,
  "windows": Windows,
  "doors": Doors,
  "mirrors": Mirrors,
  "quarter-round": QuarterRound,
  "baseboards": Baseboards,
  "crown": Crown,
  "shelving": Shelving,
  "attic-stairs": AtticStairs,
  "granite": Granite,
  "cased-openings": CasedOpenings,
  "lighting": Lighting,
  "plumbing": Plumbing,
  "hvac": Hvac,
  "paint": Paint,
  "two-story-homes": TwoStoryHomes,
  "multi-units": MultiUnits,
  "regional-considerations": RegionalConsiderations,
};
