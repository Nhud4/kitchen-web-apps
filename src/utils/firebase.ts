import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlQEVERCwEzyO4JEcFdqFpHWw4omhL0Z4",
  authDomain: "sari-resto-df8bb.firebaseapp.com",
  projectId: "sari-resto-df8bb",
  storageBucket: "sari-resto-df8bb.firebasestorage.app",
  messagingSenderId: "935359468706",
  appId: "1:935359468706:web:e7652b6a308b3f45d373fb",
  measurementId: "G-5SC8Y4NHC9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };