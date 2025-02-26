import { FC } from "react";
import { useSearch } from "@common/hooks";
import { FloatButton, SheetDrawer } from "@components/ui";
import GarageForm from "../garageForm/garage.form";

const GarageDrawer: FC = () => {
  const { query, updateQuery } = useSearch();

  return (
    <SheetDrawer
      title="Add Garage"
      open={query("q_garagePopup") === "true"}
      onClose={() => updateQuery({}, true)}
      trigger={
        <FloatButton
          onClick={() => updateQuery({ q_garagePopup: "true" })}
          type="primary"
        />
      }
    >
      <GarageForm />
    </SheetDrawer>
  );
};

export default GarageDrawer;
