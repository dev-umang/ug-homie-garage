import { FC } from "react";
import { NestedHeader } from "@components/shared";
import { Vehicle, VehicleForm } from "..";

const AddVehiclePage: FC = () => {
  const onSubmit = (vehicle: Vehicle) => {
    console.info(vehicle);
  };

  return (
    <div>
      <NestedHeader title="Add new vehicle" backTo="/garages" />
      <div className="p-4">
        <VehicleForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddVehiclePage;
