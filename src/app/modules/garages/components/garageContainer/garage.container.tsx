import { Button, Card, Spin } from "antd";
import { FC, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdGarage } from "react-icons/md";
import { SheetModal } from "@components/ui";
import { GarageType } from "@modules/garages";
import { AddVehicleForm, useVehicles } from "@modules/vehicles";

type Props = {
  garage: GarageType;
};

const GarageContainer: FC<Props> = ({ garage }) => {
  const { getVehiclesByGarage, garageVehicles, addNewVehicle, loading } =
    useVehicles();

  useEffect(() => {
    if (garage.id) getVehiclesByGarage(garage.id);
  }, [garage.id, getVehiclesByGarage]);

  return (
    <>
      <div className="flex justify-between items-center pb-1">
        <h1 className="text-lg font-semibold flex items-center gap-2 pl-default">
          <MdGarage /> {garage.name}
        </h1>
        <SheetModal
          trigger={
            <Button type="text" icon={<AiOutlinePlus />}>
              Add Vehicle
            </Button>
          }
          openKey={"addVehicle"}
          title="Add New Vehicle"
          subtitle="Enter your vehicle information in the given form"
        >
          <Spin spinning={loading}>
            <AddVehicleForm
              vehicle={{ garageId: garage.id }}
              onSubmit={addNewVehicle}
            />
          </Spin>
        </SheetModal>
      </div>
      <Card>
        {garageVehicles?.map((v) => <Card key={v.id}>{v.name}</Card>)}
        {garageVehicles?.length === 0 && (
          <span className="text-muted">
            This garage has no vehicles at the moment!{" "}
            <Button type="link" size="small">
              Want to add one?
            </Button>
          </span>
        )}
      </Card>
    </>
  );
};

export default GarageContainer;
