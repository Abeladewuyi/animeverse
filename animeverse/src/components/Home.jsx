import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useActivity } from "../context/ActivityContext";
import { useNavigate } from "react-router-dom";
import { getTopAnime } from "../api/anime";

function Home() {
  const { userData } = useAuth();
  const { feed, loading } = useActivity();
  const navigate = useNavigate();

  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getTopAnime();
      setTopAnime(data);
    };
    fetchAnime();
  }, []);

  const getActivityColor = (type) => {
    switch (type) {
      case "watched": return "text-indigo-400";
      case "commented": return "text-purple-400";
      case "friendAdded": return "text-pink-400";
      default: return "text-gray-400";
    }
  };

  const timeAgo = (timestamp) => {
    if (!timestamp) return "";
    const seconds = Math.floor((Date.now() - timestamp.toMillis()) / 1000);
    if (seconds < 60) return "just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#020617]/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          AnimeVerse
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/friends")}
            className="px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition text-sm"
          >
            Friends
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm"
          >
            {userData?.username?.charAt(0).toUpperCase()}
          </button>
          <button
  onClick={() => navigate("/search")}
  className="px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition text-sm"
>
  Search
</button>
        </div>
      </nav>

      <div className="px-4 sm:px-6 py-8 sm:py-10">

        {/* Welcome */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Welcome back{userData?.username && `, ${userData.username}`} 👋
        </h1>
        <p className="text-gray-400 mb-8 sm:mb-10">
          Ready to continue your anime journey?
        </p>

        {/* Top Anime */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Top Anime</h2>
          {topAnime.length === 0 ? (
            <p className="text-gray-400">Loading anime...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {topAnime.slice(0, 8).map((anime) => (
                <div
                  key={anime.mal_id}
                  onClick={() => navigate(`/anime/${anime.mal_id}`)}
                  className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition"
                >
                  <img
                    src={anime.images?.jpg?.image_url}
                    alt={anime.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="bg-white/5 p-2 sm:p-3">
                    <p className="font-semibold text-xs sm:text-sm truncate">{anime.title}</p>
                    <p className="text-gray-400 text-xs">⭐ {anime.score}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Friend Activity */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Friend Activity 🔥</h2>

          {loading ? (
            <p className="text-gray-400">Loading activity...</p>
          ) : feed.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <p className="text-gray-400">No activity yet.</p>
              <p className="text-gray-500 text-sm mt-1">
                Add friends to see what they are watching!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {feed.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between"
                >
                  <p className="text-sm sm:text-base">
                    <span className={`font-semibold ${getActivityColor(activity.type)}`}>
                      @{activity.username}
                    </span>{" "}
                    {activity.message}
                  </p>
                  <span className="text-gray-500 text-xs ml-4 whitespace-nowrap">
                    {timeAgo(activity.createdAt)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default Home;