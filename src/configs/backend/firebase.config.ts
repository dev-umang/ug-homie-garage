// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Query,
  collection,
  getFirestore,
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
};

type Refs =
  | Query<DocumentData, DocumentData>
  | DocumentReference
  | CollectionReference;

export const fbRefs: {
  [k in keyof typeof fbNodes]: Refs | (([...args]) => Refs);
} = {
  garages: collection(fbStore, fbNodes.garages),
  vehicles: ([vehicleId]) =>
    collection(fbStore, fbNodes.garages, vehicleId, fbNodes.vehicles),
};
