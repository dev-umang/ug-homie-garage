import { GenericDataType } from "@common/types";

export type VehicleType = GenericDataType & {
  // Overview
  key: string;
  year: string;
  garageId: string;
  vehicleType: string; // Motorcycle | Car | Cycle
  fuelType: string;
  color?: string;
  ownerCount?: number; // 0 or undefined means brand new else second hand

  // Brand Info
  brand: GenericDataType & {
    logo?: string;
  };
  // Owner Info
  // RC Info
  // Insurance Info
  // PUC Info
  // Cost Info
  // Service Info
  // Wishlists
  // Modifications
};
