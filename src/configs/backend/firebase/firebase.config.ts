// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

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
