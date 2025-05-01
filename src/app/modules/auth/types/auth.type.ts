import { UserInfo } from "firebase/auth";

export type AuthUser = UserInfo &
  Partial<{
    newUser: boolean;
  }>;
