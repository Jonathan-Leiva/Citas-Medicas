// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLHiph_CwF8K8ohinzqac7TmP5OxpnqqA",
  authDomain: "tutorial--login-5647f.firebaseapp.com",
  projectId: "tutorial--login-5647f",
  storageBucket: "tutorial--login-5647f.firebasestorage.app",
  messagingSenderId: "370855632394",
  appId: "1:370855632394:web:8042f94bded1e1b9f849f3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;