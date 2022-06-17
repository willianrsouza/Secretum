import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfg = {
  apiKey: "AIzaSyBtO9FUilPMHRbGCZizB1m0y1zLXhiGXJs",
  authDomain: "chatlessapp-71f81.firebaseapp.com",
  projectId: "chatlessapp-71f81",
  storageBucket: "chatlessapp-71f81.appspot.com",
  messagingSenderId: "204273094706",
  appId: "204273094706:web:280dae984cfbab508dac2b",
};

initializeApp(firebaseConfg);
export const auth = getAuth();
export const database = getFirestore();
