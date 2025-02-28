/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  limitToLast,
  query,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { env } from "@common/utils";

// Initialize Firebase
const app = initializeApp({
  apiKey: env.get("VITE_apiKey"),
  authDomain: env.get("VITE_authDomain"),
  databaseURL: env.get("VITE_databaseURL"),
  projectId: env.get("VITE_projectId"),
  storageBucket: env.get("VITE_storageBucket"),
  messagingSenderId: env.get("VITE_messagingSenderId"),
  appId: env.get("VITE_appId"),
});

export const fbStore = getFirestore(app);
export const fbAuth = getAuth(app);
export const fbStorage = getStorage(app);

const n = (node: string) => `${env.get("VITE_NODE_PREFIX") ?? ""}${node}`;

export const fbNodes = {
  garages: n("GARAGES"),
  vehicles: n("VEHICLES"),
  users: n("USERS"),
};

// type Refs =
//   | ReturnType<typeof query<DocumentData, DocumentData>>
//   | DocumentReference
//   | CollectionReference;

export const fbRefs = {
  user: (email: string) => doc(fbStore, fbNodes.users, email),
  garages: (uid?: string) =>
    collection(fbStore, fbNodes.users, uid ?? "", fbNodes.garages),
  vehicles: (garageKey?: string, limit?: number) => {
    if (garageKey && limit)
      return query(
        collection(fbStore, fbNodes.vehicles),
        where("garageKey", "==", garageKey),
        limitToLast(5),
      );
    else if (garageKey)
      return query(
        collection(fbStore, fbNodes.vehicles),
        where("garageKey", "==", garageKey),
      );
    return query(collection(fbStore, fbNodes.vehicles));
  },
  // limit
  //   ? query(
  //       collection(fbStore, fbNodes.vehicles),
  //       where("garageKey", "==", garageKey),
  //       limitToLast(5),
  //     )
  //   : query(
  //       collection(fbStore, fbNodes.vehicles),
  //       where("garageKey", "==", garageKey),
  //     ),
};
