import { atom } from "jotai";
import { AuthUser } from "../types/auth.type";

export const AtomAuthUser = atom<AuthUser | undefined | null>(undefined);
