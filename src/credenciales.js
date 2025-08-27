// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCICncdaH0XH6iKxxgFknzM7dLbffxosJY",
  authDomain: "tarea-citas.firebaseapp.com",
  projectId: "tarea-citas",
  storageBucket: "tarea-citas.firebasestorage.app",
  messagingSenderId: "113756737938",
  appId: "1:113756737938:web:6e6ea4b61d3e5b9e2d714b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export default appFirebase;