import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIR6UfrphpPFwcO0-E_uu7wKoHY9uTkAI",
  authDomain: "e-grow-126-289.firebaseapp.com",
  projectId: "e-grow-126-289",
  storageBucket: "e-grow-126-289.appspot.com",
  messagingSenderId: "941273368957",
  appId: "1:941273368957:web:4da86ac922171275262414",
  databaseURL: "https://e-grow-126-289-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);

const auth = getAuth(app);
const db = getFirestore(app);
const realtimeDb = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, db, realtimeDb, googleProvider, githubProvider };
