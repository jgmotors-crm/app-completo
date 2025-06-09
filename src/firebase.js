import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpPENfwagrXub2AuosZpo2fCy3kQpzp9M",
  authDomain: "jg-motors-crm.firebaseapp.com",
  projectId: "jg-motors-crm",
  storageBucket: "jg-motors-crm.firebasestorage.app",
  messagingSenderId: "488627812693",
  appId: "1:488627812693:web:6c14c9aaa9b2076d3d57dc",
  measurementId: "G-YFCDX1HWYH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
