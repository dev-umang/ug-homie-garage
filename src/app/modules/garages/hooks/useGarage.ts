import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, getDocs } from "firebase/firestore";
import { useAtom } from "jotai";
import { fbAuth, fbRefs } from "@configs/backend";
import { AtomGarageList, Garage } from "..";

const useGarage = () => {
  const [loading, setLoading] = useState(false);
  const [garages, setGarages] = useAtom(AtomGarageList);
  const fetched = useRef({ garages: false, vehicles: false }); // Will prevent multiple fetching on same data.

  // Add New garage
  const addGarage = (garage: Garage, callback?: () => void) => {
    setLoading(true);
    addDoc(fbRefs.garages(fbAuth.currentUser?.uid), garage)
      .then((res) => {
        toast.success(`"${garage.name}" is added successfully!`);
        setLoading(false);
        setGarages((prev) => [...prev, { ...garage, id: res.id }]);
        callback?.();
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  };

  // Fetch the list of garages.
  const getGarages = useCallback(() => {
    console.log("XXXXX => ", fbAuth.currentUser);

    if (fetched.current.garages) return;
    setLoading(true);
    console.info(`Fetching garages...`);

    getDocs(fbRefs.garages(fbAuth.currentUser?.uid))
      .then((res) => {
        const _garages: Garage[] = [];
        for (const doc of res.docs) {
          const _data: Garage = doc.data() as Garage;
          _garages.push({ ..._data, id: doc.id });
        }
        setGarages(_garages);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  }, []);

  return { loading, garages, getGarages, addGarage };
};

export default useGarage;
