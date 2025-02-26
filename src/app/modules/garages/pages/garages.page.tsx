import { FC, useState } from "react";
import { Page } from "@components/shared";
import { FloatButton, SheetDrawer } from "@components/ui";
import { GarageForm, useGarages } from "..";

const GaragesPage: FC = () => {
  const [open, setOpen] = useState(false);
  const { addGarage, loading } = useGarages();
  // useEffect(() => {
  //   getGarages();
  // }, []);

  return (
    <Page title="Garages">
      <SheetDrawer
        title="Add Garage"
        open={open}
        onClose={() => setOpen(false)}
        trigger={<FloatButton onClick={() => setOpen(!open)} type="primary" />}
      >
        <GarageForm
          onSubmit={(g) => addGarage(g, () => setOpen(false))}
          loading={loading}
        />
      </SheetDrawer>
    </Page>
  );
};
export default GaragesPage;
