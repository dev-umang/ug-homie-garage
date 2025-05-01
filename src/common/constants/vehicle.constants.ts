import { CommonType } from "@common/types";

const l = (value: string, label?: string): CommonType => ({
  label: label ?? value.toUpperCase(),
  value,
});

const fuelTypes: CommonType[] = [l("petrol"), l("diesel"), l("electricity")];
const vehicleTypes: CommonType[] = [l("motorcycle"), l("car"), l("bicycle")];

export const Vehicle = {
  fuelTypes,
  vehicleTypes,
};
