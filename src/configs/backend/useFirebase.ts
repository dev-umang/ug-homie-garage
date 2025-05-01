import { useMemo } from "react";
import { collection } from "firebase/firestore";
import { useAuth } from "@modules/auth";
import { fbNodes, fbStore } from ".";

const useFirebase = () => {
  const { authUser } = useAuth();
  const garages = useMemo(() => {
    if (authUser?.uid) {
      return {
        getAll: collection(
          fbStore,
          fbNodes.users,
          authUser?.uid,
          fbNodes.garages,
        ),
      };
    }
  }, [authUser]);
  return { garages };
};

export default useFirebase;
