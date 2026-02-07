import logo from "../assets/logo.png";
import animeBg from "../assets/anime-bg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebase";
import { IoArrowBack } from "react-icons/io5";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


 const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/home");
    alert("Welcome back to AnimeVerse 🚀");
  } catch (error) {
    alert(error.message);
  }
};
const handleGoogleLogin = async () => {
  try{

    await signInWithPopup(auth, googleProvider);

    navigate("/home");

  }catch(error){
    alert(error.message);
  }
};

return (
    
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
    style={{
      backgroundImage: `url(${animeBg})`,
    }}
  >

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* LOGIN CARD */}
    <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl w-[400px] shadow-[0_0_60px_rgba(99,102,241,0.35)]">

  {/* BACK ARROW */}
<div className="flex items-center justify-between mb-2">
    <IoArrowBack
      onClick={() => navigate("/signup")}
      className="text-white text-2xl cursor-pointer hover:scale-110 transition"
    />
  </div>

      {/* LOGO */}
      <img src={logo} alt="AnimeVerse" className="h-16 mx-auto mb-4" />

      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Welcome Back
      </h1>

      <p className="text-gray-400 text-center mb-8">
        Log in and continue your anime journey.
      </p>

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white"
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* PASSWORD */}
      <div className="relative mb-6">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl bg-transparent border border-indigo-400/40 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-3 cursor-pointer text-gray-300"
        >
          👁
        </span>
      </div>

      {/* LOGIN BUTTON */}
      <button
        onClick={handleLogin}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold"
      >
        Enter Universe 🚀
      </button>
    <div className="flex items-center gap-4 my-6">
  <div className="flex-1 h-px bg-gray-600"></div>
  <span className="text-gray-400 text-sm">OR</span>
  <div className="flex-1 h-px bg-gray-600"></div>
</div>

      <button
  onClick={handleGoogleLogin}
  className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white/90 hover:bg-white transition font-semibold text-gray-800 shadow-md hover:scale-[1.02]"
>
  
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="google"
    className="w-5 h-5"
  />

  Continue with Google

</button>
<p className="text-gray-400 text-center mt-4">
  Don’t have an account?{" "}
  <span
    onClick={()=>navigate("/signup")}
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