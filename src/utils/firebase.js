// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "yogawithgemini-10627.firebaseapp.com",
  projectId: "yogawithgemini-10627",
  storageBucket: "yogawithgemini-10627.appspot.com",
  messagingSenderId: "1027565596669",
  appId: "1:1027565596669:web:e46979d9862d6e1449f394",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;