import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, getDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3ExMx6zAdIfcw2V5-EgYDmc-FwUIV3bA",
    authDomain: "l0ucomics.firebaseapp.com",
    projectId: "l0ucomics",
    storageBucket: "l0ucomics.appspot.com",
    messagingSenderId: "1019577306154",
    appId: "1:1019577306154:web:e034d6758afac76bd50753",
    measurementId: "G-KNG556BLDZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

