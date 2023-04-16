import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZIdnWD3-R9Z7YfC4tJAf8Fk0AXu6hTi0",
  authDomain: "chatai-6ae1c.firebaseapp.com",
  projectId: "chatai-6ae1c",
  storageBucket: "chatai-6ae1c.appspot.com",
  messagingSenderId: "870961303225",
  appId: "1:870961303225:web:baeffcc3b0f093d821d568",
  measurementId: "G-TVC9FRQVT6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db}