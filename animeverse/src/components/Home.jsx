import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Home() {
  const { userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#020617]/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          AnimeVerse
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/profile")}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm"
          >
            {userData?.username?.charAt(0).toUpperCase()}
          </button>
        </div>
      </nav>

      <div className="px-6 py-10">

        {/* Welcome */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome back{userData?.username && `, ${userData.username}`} 👋
        </h1>
        <p className="text-gray-400 mb-10">
          Ready to continue your anime journey?
        </p>

        {/* Continue Watching */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Continue Watching</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-indigo-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition cursor-pointer">
              Naruto
            </div>
            <div className="bg-purple-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition cursor-pointer">
              Attack on Titan
            </div>
            <div className="bg-pink-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition cursor-pointer">
              Jujutsu Kaisen
            </div>
            <div className="bg-blue-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition cursor-pointer">
              Demon Slayer
            </div>
          </div>
        </section>

        {/* Friend Activity */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Friend Activity 🔥</h2>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="font-semibold text-indigo-400">@zenitsu</span>{" "}
              just watched <span className="font-semibold">Demon Slayer</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="font-semibold text-purple-400">@itachi</span>{" "}
              commented on <span className="font-semibold">Naruto</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;