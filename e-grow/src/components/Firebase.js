import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIR6UfrphpPFwcO0-E_uu7wKoHY9uTkAI",
  authDomain: "e-grow-126-289.firebaseapp.com",
  projectId: "e-grow-126-289",
  storageBucket: "e-grow-126-289.firebasestorage.app",
  messagingSenderId: "941273368957",
  appId: "1:941273368957:web:4da86ac922171275262414",
  databaseURL: "https://console.firebase.google.com/u/0/project/e-grow-126-289/database/e-grow-126-289-default-rtdb/data/~2F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };