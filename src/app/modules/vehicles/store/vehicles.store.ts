import { atom } from "jotai";
import { VehicleType } from "..";

export const AtomVehicles = atom<VehicleType[] | undefined | null>();
