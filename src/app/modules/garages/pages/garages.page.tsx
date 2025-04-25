import { Button } from "antd";
import { FC, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AppPage } from "@components/shared";
import { GarageContainer, useGarages } from "@modules/garages";

const GaragesPage: FC = () => {
  const { getGarages, garages } = useGarages();

  useEffect(() => {
    const unsubscribe = getGarages();
    return () => unsubscribe?.();
  }, [getGarages]);

  return (
    <AppPage
      title="Garages"
      extra={
        <Button icon={<AiOutlinePlus />} type="text">
          Add Garage
        </Button>
      }
    >
      {garages?.map((g) => <GarageContainer garage={g} key={g.id} />)}
    </AppPage>
  );
};

export default GaragesPage;
