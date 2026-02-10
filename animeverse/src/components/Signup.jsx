import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { db } from "../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import logo from "../assets/logo.png";
import animeBg from "../assets/anime-bg.png";

import { IoArrowBack } from "react-icons/io5";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!username) {
      alert("Please enter a username");
      return;
    }

    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 🔥 Save user profile to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: user.email,
        createdAt: serverTimestamp(),
      });

      alert("Welcome to AnimeVerse 🚀");
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${animeBg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl w-[400px] shadow-[0_0_60px_rgba(99,102,241,0.35)]">
        <IoArrowBack
          onClick={() => navigate("/login", { replace: true })}
          className="text-white text-2xl cursor-pointer mb-4 hover:scale-110 transition"
        />

        <img src={logo} alt="AnimeVerse" className="h-16 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Your Universe
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Join AnimeVerse and begin your journey.
        </p>

        {/* USERNAME */}
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Enter AnimeVerse 🚀"}
        </button>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
