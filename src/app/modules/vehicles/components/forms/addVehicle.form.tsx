import { FC } from "react";
import { VehicleType } from "@modules/vehicles";

type Props = {
  vehicle?: Partial<VehicleType>;
};

const AddVehicleForm: FC<Props> = (p) => (
  <div>AddVehicleForm for {p.vehicle?.garageId}</div>
);

export default AddVehicleForm;
