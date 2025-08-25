// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9cH9lx9NR8UPqUtWgYFHRerwHhUquNsc",
  authDomain: "sistema-citas-medicas-f8317.firebaseapp.com",
  projectId: "sistema-citas-medicas-f8317",
  storageBucket: "sistema-citas-medicas-f8317.firebasestorage.app",
  messagingSenderId: "747940059356",
  appId: "1:747940059356:web:04b6dff273044ed5dbfc19",
  measurementId: "G-P5F3XDQ1RC"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export default appFirebase;