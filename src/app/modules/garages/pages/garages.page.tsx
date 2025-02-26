import { FC, useEffect } from "react";
import { useSearch } from "@common/hooks";
import { NoData, Page } from "@components/shared";
import { GarageDrawer, GarageList, useGarages } from "..";

const GaragesPage: FC = () => {
  // const [open, setOpen] = useState(false);
  const { updateQuery } = useSearch();
  const { getGarages, garages, loading } = useGarages();

  useEffect(() => getGarages(), []);

  return (
    <Page loading={loading} title="Garages">
      <GarageList garages={garages} />
      {garages.length === 0 && (
        <NoData
          description={"You do not have any garage at the moment!"}
          action={{
            label: "Add New Garage",
            onClick: () => updateQuery({ q_garagePopup: "true" }),
          }}
        />
      )}
      <GarageDrawer />
    </Page>
  );
};
export default GaragesPage;
