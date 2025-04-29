import { collection, doc, query, where } from "firebase/firestore";
import { fbAuth, fbNodes, fbStore } from "..";

export const fbRefs = {
  vehicles: {
    getAll: (uid: string) =>
      collection(fbStore, fbNodes.users, uid, fbNodes.garages),
    getBy: (garageId: string, uid: string) =>
      query(
        collection(fbStore, fbNodes.users, uid, fbNodes.vehicles),
        where("garageId", "==", garageId),
      ),
    add: (uid: string) =>
      doc(collection(fbStore, fbNodes.users, uid, fbNodes.vehicles)),
  },
  garage: {
    getAll: (uid: string) =>
      collection(fbStore, fbNodes.users, uid, fbNodes.garages),
    add: (uid?: string) =>
      doc(
        collection(
          fbStore,
          fbNodes.users,
          uid ?? fbAuth.currentUser?.uid ?? "UNKNOWN_USER_ID",
          fbNodes.garages,
        ),
      ),
  },

  user: {
    add: (uid: string) => doc(fbStore, fbNodes.users, uid),
    get: (uid: string) => doc(fbStore, fbNodes.users, uid),
  },
};
