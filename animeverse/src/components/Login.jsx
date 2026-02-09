import logo from "../assets/logo.png";
import animeBg from "../assets/anime-bg.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { IoArrowBack } from "react-icons/io5";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome back to AnimeVerse 🚀");
     navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${animeBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl w-[400px] shadow-[0_0_60px_rgba(99,102,241,0.35)]">

        {/* Back Arrow */}
        <IoArrowBack
          onClick={() =>navigate("/signup", { replace: true })}

          className="text-white text-2xl cursor-pointer mb-4 hover:scale-110 transition"
        />

        {/* Logo */}
        <img src={logo} alt="AnimeVerse" className="h-16 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Log in and continue your anime journey.
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 cursor-pointer text-gray-300"
          >
            👁
          </span>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 transition"
        >
          Enter Universe 🚀
        </button>

        {/* Signup Link */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-pointer font-semibold"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
