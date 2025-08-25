import { collection, getFirestore } from "firebase/firestore";
import appFirebase from "../credenciales"; // importamos las credenciales de Firebase

export const firestore = getFirestore(appFirebase); // inicializamos Firestore con las credenciales

export const doctorsCollection = collection(firestore, "doctors"); // creamos una referencia a la colección "doctors" en firestore