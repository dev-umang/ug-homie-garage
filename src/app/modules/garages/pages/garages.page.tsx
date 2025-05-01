import { Button } from "antd";
import { FC, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AppPage } from "@components/shared";
import { SheetModal } from "@components/ui";
import { AddGarageForm, GarageContainer, useGarages } from "@modules/garages";

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
        <SheetModal
          trigger={
            <Button icon={<AiOutlinePlus />} type="text">
              Add Garage
            </Button>
          }
          openKey={"addGarage"}
        >
          <AddGarageForm />
        </SheetModal>
      }
    >
      {garages?.map((g) => <GarageContainer garage={g} key={g.id} />)}
    </AppPage>
  );
};

export default GaragesPage;
