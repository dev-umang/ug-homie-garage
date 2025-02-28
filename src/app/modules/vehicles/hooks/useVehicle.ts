import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FirebaseError } from "firebase/app";
import { Unsubscribe, onSnapshot } from "firebase/firestore";
import { fbRefs } from "@configs/backend";
import { Vehicle } from "..";

export const useVehicle = () => {
  const [loading, setLoading] = useState(false);
  const [garageVehicles, setGarageVehicles] = useState<
    Vehicle[] | undefined | null
  >(undefined);
  const vehiclesRef = useRef<Unsubscribe>(null);

  // Fetch vehicles for the garage.
  const getVehiclesByGarage = useCallback(
    (garageKey?: string, limit?: number) => {
      if (vehiclesRef.current) {
        console.info(`Destroying previous vehicle listener...`);
        vehiclesRef.current();
      }

      vehiclesRef.current = onSnapshot(
        fbRefs.vehicles(garageKey, limit),
        (res) => {
          const _data: Vehicle[] = [];
          for (const d of res.docs) {
            console.info(d.data() as Vehicle);
            const vehicle = d.data() as Vehicle;
            _data.push({ ...vehicle, id: d.id });
          }

          setGarageVehicles(_data.length === 0 ? null : _data);
        },
        (err: FirebaseError) => {
          toast.error(err.message);
          setGarageVehicles(null);
        },
      );
    },
    [],
  );

  // Add new vehicle
  const addNewVehicle = (vehicle: Vehicle) => {
    setLoading(true);
    setTimeout(() => {
      console.info(vehicle);
      setLoading(false);
    }, 1500);
  };

  return { loading, garageVehicles, getVehiclesByGarage, addNewVehicle };
};
