import { atom } from "jotai";
import { Data } from "@common/data";
import { Garage } from "..";

export const AtomGarageList = atom<Garage[]>(Data.Garages);
