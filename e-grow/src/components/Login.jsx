import React, { useState } from "react";
import { auth, googleProvider, githubProvider } from "./Firebase.js";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [input, setInput] = useState(""); // Holds username/phone/email
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onLogin(result.user);
      navigate("/welcome");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      onLogin(result.user);
      navigate("/welcome");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // For simplicity, assuming input is email. Adjust logic if needed.
      const result = await signInWithEmailAndPassword(auth, input, password);
      onLogin(result.user);
      navigate("/welcome");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-700 to-white">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Welcome Back</h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username, Email, or Phone"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-4 py-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <span className="text-gray-500 text-sm">or</span>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="bg-black text-white py-2 rounded w-full mt-4 hover:bg-gray-800 transition duration-200"
        >
          Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="bg-black text-white py-2 rounded w-full mt-2 hover:bg-gray-800 transition duration-200"
        >
          Login with GitHub
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="mt-4 text-black hover:underline text-center block"
        >
          Don't have an account? Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
