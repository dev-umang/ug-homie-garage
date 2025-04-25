import GarageContainer from "./components/garageContainer/garage.container";
import useGarages from "./hooks/useGarages";
import GaragesPage from "./pages/garages.page";
import { AtomGarages } from "./store/garages.store";
import { GarageFormValues, GarageType } from "./types/garages.types";

export {
  useGarages,
  type GarageType,
  type GarageFormValues,
  AtomGarages,
  GaragesPage,
  GarageContainer,
};
