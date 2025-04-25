import { FC, useEffect } from "react";
import { GarageContainer, useGarages } from "@modules/garages";

const GaragesPage: FC = () => {
  const { getGarages, garages } = useGarages();

  useEffect(() => {
    const unsubscribe = getGarages();
    return () => unsubscribe?.();
  }, [getGarages]);

  return (
    <div>{garages?.map((g) => <GarageContainer garage={g} key={g.id} />)}</div>
  );
};

export default GaragesPage;
