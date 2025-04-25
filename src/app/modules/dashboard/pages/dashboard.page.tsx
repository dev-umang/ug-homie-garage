import { FC, useEffect } from "react";
import { useGarages } from "@modules/garages";

const DashboardPage: FC = () => {
  const { getGarages, garages } = useGarages();

  useEffect(() => {
    const unsubscribe = getGarages();
    return () => unsubscribe?.();
  }, [getGarages]);

  return <div>{garages?.map((g) => <h1 key={g.id}>{g.name}</h1>)}</div>
};

export default DashboardPage;
