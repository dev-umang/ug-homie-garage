import { GenericDataType } from "@common/types";

export type VehicleType = GenericDataType & {
  key: string;
  manufacturedYear: string;
  brand: GenericDataType;
  brandLogo?: string;
  // Owner Info
  // RC Info
  // Insurance Info
  // PUC Info
  // Cost Info
  // Service Info
  // Wishlists
  // Modifications
};
