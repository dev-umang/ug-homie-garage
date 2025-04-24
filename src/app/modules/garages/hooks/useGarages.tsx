import { useState } from "react";
import toast from "react-hot-toast";
import { serverTimestamp, setDoc } from "firebase/firestore";
import { Errors } from "@common/constants";
import { fbAuth, fbRefs } from "@configs/backend";
import { useCreateUser } from "@modules/auth";
import { GarageFormValues, GarageType } from "..";

const useGarages = () => {
  const [loading, setLoading] = useState(false);
  const { createUser } = useCreateUser();

  const addNewGarage = (
    payload: GarageFormValues,
    init: boolean = false,
    uid?: string,
  ) =>
    new Promise<GarageType>((resolve) => {
      if (!init) setLoading(true);
      const docRef = fbRefs.garage.add(uid);
      const _payload: GarageType = {
        ...payload,
        id: docRef.id,
        createdAt: serverTimestamp(),
        createdBy: fbAuth.currentUser?.uid,
      };
      setDoc(docRef, _payload)
        .then(() => {
          toast.success(`Your garage is created successfully!`);
          resolve(_payload);
        })
        .catch((err) => {
          toast.error(err.message);
        })
        .finally(() => !init && setLoading(false));
    });

  const onInitAddGarage = (garage: GarageFormValues) => {
    const user = fbAuth.currentUser;
    if (!user) return Errors.wrongLogin();
    setLoading(true);
    setTimeout(() => {
      createUser(user)
        .then((res) => {
          if (res) {
            addNewGarage(garage, true, res.uid)
              .then((res) => {
                console.info({ res });
              })
              .catch((err) => {
                toast.error(err.message);
              })
              .finally(() => setLoading(false));
          } else {
            Errors.wrongLogin();
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 1000);
  };

  return { loading, addNewGarage, onInitAddGarage };
};

export default useGarages;
