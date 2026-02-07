import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import animeBg from "../assets/anime-bg.png";

function Landing() {

  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${animeBg})`,
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>


      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">

        {/* LOGO */}
        <img 
          src={logo} 
          alt="AnimeVerse"
          className="h-20 md:h-28 mb-6"
        />


        {/* HEADLINE */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-indigo-400">AnimeVerse</span>
        </h1>


        {/* SUBTEXT */}
        <p className="text-gray-300 mb-10 text-sm md:text-lg">
          Enter a universe where anime lovers connect, share,
          and explore endless adventures together.
        </p>


        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">

          {/* LOGIN */}
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r 
                       from-indigo-500 to-purple-600 font-semibold
                       hover:scale-105 transition duration-300
                       shadow-lg w-full md:w-auto"
          >
            Enter Universe 🚀
          </button>


          {/* SIGNUP */}
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 rounded-xl border border-white/30
                       hover:bg-white/10 transition
                       backdrop-blur-md w-full md:w-auto"
          >
            Create Account
          </button>

        </div>

      </div>
    </div>
  );
}

export default Landing;
