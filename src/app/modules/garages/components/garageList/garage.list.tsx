import { FC } from "react";
import { Garage } from "@modules/garages";

type Props = {
  garages: Garage[];
};

const GarageList: FC<Props> = (p) => (
  <div>
    {p.garages.map((g) => (
      <div key={g.key}>
        <div className="text-sm font-bold">{g.name}</div>
      </div>
    ))}
  </div>
);

export default GarageList;
