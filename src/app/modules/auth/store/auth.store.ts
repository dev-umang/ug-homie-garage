import { atom } from "jotai";
import { AuthUser } from "../types/auth.types";

export const AtomAuthUser = atom<AuthUser | undefined | null>(undefined);
