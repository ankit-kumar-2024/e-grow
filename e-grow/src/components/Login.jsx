import React from "react";
import { auth, googleProvider, githubProvider } from "./Firebase.js";
import { signInWithPopup } from "firebase/auth";

const Login = ({ onLogin }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onLogin(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      onLogin(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
      >
        Login with Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="bg-gray-800 text-white px-4 py-2 rounded mb-4"
      >
        Login with GitHub
      </button>
      <button
        onClick={() => onLogin(null)}
        className="bg-gray-400 text-black px-4 py-2 rounded"
      >
        Continue Without Login
      </button>
    </div>
  );
};

export default Login;
