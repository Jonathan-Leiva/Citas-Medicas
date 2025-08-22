import { collection, getFirestore } from "firebase/firestore";
import appFirebase from "../credenciales"; // imoportamos las credenciales de Firebase

export const firestore = getFirestore(appFirebase); // inicializamos Firestore con las credenciales

export const hotelCollection = collection(firestore, "hotels"); // creamos una referencia a la colección "hotels"