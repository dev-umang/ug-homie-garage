import { CommonType } from "@common/types";

export type Garage = CommonType & {
  key: string;
  address?: string;
  location?: {
    lat?: number;
    long?: number;
  };
};
