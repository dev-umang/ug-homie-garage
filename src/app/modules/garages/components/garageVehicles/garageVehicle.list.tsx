import { Card } from "antd";
import { ArrowRight } from "lucide-react";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Href } from "@configs/routes";
import { useVehicle } from "@modules/vehicles";
import { GarageSkeletons } from "../garageSkeletons/garage.skeletons";

type Props = {
  garageKey: string;
};

const GarageVehicleList: FC<Props> = ({ garageKey }) => {
  const { getVehiclesByGarage, garageVehicles } = useVehicle();

  useEffect(() => {
    getVehiclesByGarage(garageKey);
  }, [garageKey]);

  if (garageVehicles === undefined) return <GarageSkeletons.vehicleList />;
  if (garageVehicles === null)
    return (
      <Card size="small">
        <h1 className="text-muted">
          No vehicles available!{" "}
          <Link to={Href.addVehicle({ q_garageKey: garageKey })}>
            Add one <ArrowRight style={{ display: "inline-block" }} size={16} />
          </Link>
        </h1>
      </Card>
    );

  return <div>Vehicles</div>;
};

export default GarageVehicleList;
