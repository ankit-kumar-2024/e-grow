import React, { useState } from "react";
import { auth, db } from "./Firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneVerificationCode, setPhoneVerificationCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, username, dob, phone, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$%&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one letter, one number, and one special character (@, $, %, &, *).");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(auth.currentUser);

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        username,
        dob,
        phone,
        email,
        createdAt: new Date().toISOString(),
      });

      alert("Account created successfully! Please verify your email.");
      navigate("/welcome"); 
    } catch (error) {
      console.error("Error during signup:", error.message);
      setError("Failed to create account. Please try again.");
    }
  };

  const handlePhoneNumberVerification = (e) => {
    e.preventDefault();
    const phoneNumber = formData.phone;

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // recaptcha solved
          },
        },
        auth
      );
    }

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("Verification code sent!");
      })
      .catch((error) => {
        console.error("Error sending verification code:", error.message);
        setError("Failed to send verification code.");
      });
  };

  const handlePhoneVerificationCode = (e) => {
    e.preventDefault();
    const code = phoneVerificationCode;

    window.confirmationResult
      .confirm(code)
      .then((result) => {
        setIsPhoneVerified(true);
        alert("Phone number verified successfully!");
      })
      .catch((error) => {
        console.error("Error verifying phone number:", error.message);
        setError("Invalid verification code.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-4 justify-center bg-gradient-to-r from-black via-gray-600 to-white">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">Sign Up</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
                            type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
            <div className="mt-2 text-sm text-gray-600">
              <span>Password must contain at least one letter, one number, and one special character (@, $, %, &, *).</span>
            </div>
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="text-blue-600"
              >
                {passwordVisible ? "Hide Password" : "Show Password"}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <input
              type={passwordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white font-bold rounded-lg hover:bg-gray-700 transition duration-200 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div id="recaptcha-container" className="mt-4"></div>
      </div>
    </div>
  );
};

export default Signup;
