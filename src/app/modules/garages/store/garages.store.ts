import { atom } from "jotai";
import { VehicleType } from "@modules/vehicles";
import { GarageType } from "..";

export const AtomGarages = atom<GarageType[] | null | undefined>();

export const AtomGarageVehicles = atom<
  Record<string, VehicleType> | null | undefined
>();
