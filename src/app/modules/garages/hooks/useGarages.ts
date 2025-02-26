import { useCallback, useRef, useState } from "react";
import { Query, getDocs } from "firebase/firestore";
import { useAtomValue } from "jotai";
import { notify } from "@common/utils";
import { fbRefs } from "@configs/backend";
import { AtomGarageList, Garage } from "..";
import { notification } from "antd";

const useGarages = () => {
  const [loading, setLoading] = useState(false);
  const garages = useAtomValue(AtomGarageList);
  const fetched = useRef({ garages: false, vehicles: false }); // Will prevent multiple fetching on same data.

  // Add New garage
  const addGarage = (garage: Garage, callback?: () => void) => {
    setLoading(true);
    notification.open({message: 'Success'})
    console.log({ garage });
    setTimeout(() => {
      notify.success(`"${garage.name}" is added successfully!`);
      setLoading(false);
    //   callback?.();
    }, 1000);

    // addDoc(fbRefs.garages as CollectionReference, garage)
    //   .then(() => {
    //     notify.success(`"${garage.name}" is added successfully!`);
    //     setLoading(false);
    //     callback?.();
    //   })
    //   .catch((err) => {
    //     notify.error(err);
    //     setLoading(false);
    //   });
  };

  // Fetch the list of garages.
  const getGarages = useCallback(() => {
    if (fetched.current.garages) return;
    console.info(`Fetching garages...`);
    getDocs(fbRefs.garages as Query)
      .then((res) => {
        for (const doc of res.docs) {
          console.log(doc.data());
        }
      })
      .catch(notify.error);
  }, []);

  return { loading, garages, getGarages, addGarage };
};

export default useGarages;
