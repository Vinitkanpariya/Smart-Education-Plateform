
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAObg_XmRoYKOaQ_tUPREdPymJs8pfFygM",
  authDomain: "invoice-react-aoo.firebaseapp.com",
  projectId: "invoice-react-aoo",
  storageBucket: "invoice-react-aoo.appspot.com",
  messagingSenderId: "722779161279",
  appId: "1:722779161279:web:b51a76372cef218cb07c0a",
  measurementId: "G-QK4Z1R7395"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();