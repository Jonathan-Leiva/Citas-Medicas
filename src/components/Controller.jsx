import { collection, getFirestore } from "firebase/firestore";
import appFirebase from "../credenciales";

export const firestore = getFirestore(appFirebase);
export const consultasCollection = collection(firestore, "consultas");
