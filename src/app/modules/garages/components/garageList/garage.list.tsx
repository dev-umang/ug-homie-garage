import { FC } from "react";
import { Link } from "react-router-dom";
import { Garage, GarageVehicleList } from "@modules/garages";

type Props = {
  garages: Garage[];
};

const GarageList: FC<Props> = (p) => (
  <div>
    {p.garages.map((g) => (
      <div key={g.key}>
        <div className="mb-1 flex items-end justify-between px-2">
          <div className="text-sm font-bold">{g.name}</div>
          <Link to={""} className="text-xs text-muted!">View All</Link>
        </div>
        {g.id && <GarageVehicleList garageKey={g.key} />}
      </div>
    ))}
  </div>
);

export default GarageList;
