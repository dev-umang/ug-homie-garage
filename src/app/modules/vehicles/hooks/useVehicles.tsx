import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Unsubscribe, onSnapshot, setDoc } from "firebase/firestore";
import { useAtom } from "jotai";
import { useSearch } from "@common/hooks";
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
  const [loading, setLoading] = useState(false);
  const { deleteParam } = useSearch();

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

  const addNewVehicle = useCallback(
    (vehicle: VehicleType) => {
      if (!fbAuth.currentUser?.uid) return;
      setLoading(true);
      const docRef = fbRefs.vehicles.add(fbAuth.currentUser.uid);
      const payload = { ...vehicle, id: docRef.id };
      setDoc(docRef, payload)
        .then(() => {
          deleteParam("addVehicle");
          toast.success("Vehicle added successfully!");
        })
        .catch((err) => {
          console.error(err);
          toast.error(err.message);
        })
        .finally(() => setLoading(false));
    },
    [deleteParam],
  );

  return {
    loading,
    getVehicles,
    vehicles,
    getVehiclesByGarage,
    garageVehicles,
    addNewVehicle,
  };
};

export default useVehicles;
