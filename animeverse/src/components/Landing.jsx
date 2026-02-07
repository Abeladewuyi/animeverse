import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Landing() {

  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        background:
          "linear-gradient(-45deg, #020617, #0f172a, #312e81, #581c87)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 12s ease infinite",
      }}
    >

      <img src={logo} className="h-24 mb-6" />

      <h1 className="text-5xl font-bold mb-4">
        Welcome to AnimeVerse
      </h1>

      <p className="text-gray-300 mb-8 text-center max-w-md">
        Enter a universe where anime lovers connect, share, and explore.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-110 transition"
      >
        Enter Universe 🚀
      </button>

    </div>
  );
}

export default Landing;
