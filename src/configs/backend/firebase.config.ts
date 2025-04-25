// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  initializeFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  databaseURL: import.meta.env.VITE_databaseURL,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fbAuth = getAuth(app);
export const fbStore = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});

const n = (node: string) => `${import.meta.env.VITE_NODE_PREFIX ?? ""}${node}`;

export const fbNodes = {
  users: n("USERS"),
  garages: n("GARAGES"),
  vehicles: n("VEHICLES"),
};

export const fbRefs = {
  vehicles: {
    getAll: (uid: string) =>
      collection(fbStore, fbNodes.users, uid, fbNodes.garages),
    getBy: (garageId: string, uid: string) =>
      query(
        collection(fbStore, fbNodes.users, uid, fbNodes.vehicles),
        where("garageId", "==", garageId),
      ),
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
