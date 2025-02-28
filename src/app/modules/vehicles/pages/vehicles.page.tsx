import { FC } from "react";
import { useSearch } from "@common/hooks";

const VehiclesPage: FC = () => {
  const { query } = useSearch();
  console.log(query("q_garageKey"));

  return <div>VehiclesPage</div>;
};

export default VehiclesPage;
