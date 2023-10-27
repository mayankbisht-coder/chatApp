// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY-jvTwwCLrjHpV2nfkQ0Rp8q2I9Try4Y",
  authDomain: "chatapp-b4fbd.firebaseapp.com",
  projectId: "chatapp-b4fbd",
  storageBucket: "chatapp-b4fbd.appspot.com",
  messagingSenderId: "302623827169",
  appId: "1:302623827169:web:68685664982bd7174503a0",
  measurementId: "G-1NV4Z3DF1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
