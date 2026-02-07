import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import animeBg from "../assets/anime-bg.png";

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {

    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }

    try{

      await createUserWithEmailAndPassword(auth, email, password);

      alert("Welcome to AnimeVerse 🚀");

      // 🔥 Auto login effect
      navigate("/home");

    }catch(error){
      alert(error.message);
    }
  };


  return (

    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${animeBg})`
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glass Card */}
      <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl w-[420px] shadow-[0_0_60px_rgba(99,102,241,0.35)]">

        {/* LOGO */}
        <img
          src={logo}
          alt="AnimeVerse"
          className="h-16 mx-auto mb-4"
        />

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-white text-center">
          Create Your Universe
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Join AnimeVerse and begin your journey.
        </p>


        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-[0_0_10px_rgba(139,92,246,0.4)]"
          onChange={(e)=>setEmail(e.target.value)}
        />


        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-[0_0_10px_rgba(99,102,241,0.4)]"
          onChange={(e)=>setPassword(e.target.value)}
        />


        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-[0_0_10px_rgba(139,92,246,0.4)]"
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />


        {/* SIGNUP BUTTON */}
        <button
          onClick={handleSignup}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition duration-300"
        >
          Enter AnimeVerse 🚀
        </button>


        {/* LOGIN LINK */}
        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={()=>navigate("/login")}
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
