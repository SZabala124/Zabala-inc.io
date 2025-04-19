// firebase-config.js (dentro de src)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMDHc37i8TpZsmMqTJZ_qQ6iElcns5ARI",
  authDomain: "zabala-inc.firebaseapp.com",
  projectId: "zabala-inc", // Este debe ser el correcto
  storageBucket: "zabala-inc.firebasestorage.app",
  messagingSenderId: "563067777196",
  appId: "1:563067777196:web:047757082d64c48c3b6f09",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth};