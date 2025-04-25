import { useCallback, useRef, useState } from "react";
import { Unsubscribe, onSnapshot } from "firebase/firestore";
import { useAtom } from "jotai";
import { generator } from "@common/utils";
import { fbAuth, fbRefs } from "@configs/backend";
import { AtomVehicles, VehicleType } from "..";

const useVehicles = () => {
  const vehiclesRef = useRef<Unsubscribe>(null);
  const garageVehiclesRef = useRef<Unsubscribe>(null);
  const [vehicles, setVehicles] = useAtom(AtomVehicles);
  const [garageVehicles, setGarageVehicles] = useState<
    VehicleType[] | null | undefined
  >(undefined);

  const getVehicles = useCallback(() => {
    const { uid } = fbAuth.currentUser ?? {};
    if (uid) {
      vehiclesRef.current = onSnapshot(
        fbRefs.vehicles.getAll(uid),
        (res) => setVehicles(generator.firestore<VehicleType>(res)),
        console.error,
      );
    }
    return vehiclesRef.current;
  }, [setVehicles]);

  const getVehiclesByGarage = useCallback((garageId: string) => {
    const { uid } = fbAuth.currentUser ?? {};
    if (uid) {
      garageVehiclesRef.current = onSnapshot(
        fbRefs.vehicles.getBy(garageId, uid),
        (res) => setGarageVehicles(generator.firestore<VehicleType>(res)),
        console.error,
      );
    }
    return garageVehiclesRef.current;
  }, []);

  return { getVehicles, vehicles, getVehiclesByGarage, garageVehicles };
};

export default useVehicles;
