import { GenericDataType } from "@common/types";

export type GarageType = GenericDataType & {
  key: string;
};

export type GarageFormValues = {
  name: string;
  key: string;
};
