import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NestedHeader } from "@components/shared";
import { useVehicle } from "@modules/vehicles";

const GarageVehicles: FC = () => {
  const { getVehiclesByGarage, garageVehicles } = useVehicle();
  const { garageId } = useParams();

  useEffect(() => getVehiclesByGarage(garageId), [garageId]);

  return (
    <div>
      <NestedHeader backTo="/garages" title="Vehicles" />
      {garageVehicles?.map((v) => v.name)}
    </div>
  );
};

export default GarageVehicles;
