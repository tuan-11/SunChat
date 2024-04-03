import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbfy37lvPLCkkaBhT6qeJUTwL_q1A2Ufk",
  databaseURL: "https://sunchat-d55ab-default-rtdb.firebaseio.com/",
  projectId: "sunchat-d55ab",
  authDomain: "sunchat-d55ab.firebaseapp.com",
  appId: "1:8408611295:android:27b125f1e31e9177b8ec6a",
  messagingSenderId: "8408611295",
  storageBucket: "sunchat-d55ab.appspot.com",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);