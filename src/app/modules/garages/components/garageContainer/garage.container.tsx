import { Button, Card } from "antd";
import { FC, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdGarage } from "react-icons/md";
import { Link } from "react-router-dom";
import { GarageType } from "@modules/garages";
import { useVehicles } from "@modules/vehicles";

type Props = {
  garage: GarageType;
};

const GarageContainer: FC<Props> = ({ garage }) => {
  const { getVehiclesByGarage, garageVehicles } = useVehicles();

  useEffect(() => {
    if (garage.id) getVehiclesByGarage(garage.id);
  }, [garage.id, getVehiclesByGarage]);

  return (
    <div className="rounded-sm border border-dashed border-slate-400 p-default">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold flex items-center gap-2">
          <MdGarage /> {garage.name}
        </h1>
        <Link to={`/vehicles/add?garage=${garage.key}`}>
          <Button type="text" icon={<AiOutlinePlus />}>
            Add Vehicle
          </Button>
        </Link>
      </div>
      <div>{garageVehicles?.map((v) => <Card key={v.id}>{v.name}</Card>)}</div>
    </div>
  );
};

export default GarageContainer;
