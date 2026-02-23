import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnimeById, getAnimeEpisodes } from "../api/anime";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useActivity } from "../context/ActivityContext";

function AnimePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, userData } = useAuth();
  const { logActivity } = useActivity();

  const [anime, setAnime] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const [animeData, episodeData] = await Promise.all([
          getAnimeById(id),
          getAnimeEpisodes(id),
        ]);
        setAnime(animeData);
        setEpisodes(episodeData || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnime();
  }, [id]);

  const handleWatch = async () => {
    if (!user) return;
    try {
      await setDoc(doc(db, "watchHistory", user.uid, "watched", String(id)), {
        animeId: String(id),
        title: anime.title,
        image: anime.images?.jpg?.image_url,
        watchedAt: serverTimestamp(),
      });

      await logActivity(
        "watched",
        `just watched ${anime.title}`,
        String(id)
      );

      alert(`Added "${anime.title}" to your watch history!`);
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
      Loading...
    </div>
  );

  if (!anime) return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
      Anime not found
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#020617]/80 backdrop-blur sticky top-0 z-50">
        <h1
          onClick={() => navigate("/home")}
          className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
        >
          AnimeVerse
        </h1>
        <button
          onClick={() => navigate("/profile")}
          className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm"
        >
          {userData?.username?.charAt(0).toUpperCase()}
        </button>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-[250px] sm:h-[400px]">
        <img
          src={anime.images?.jpg?.large_image_url}
          alt={anime.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">{anime.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
            <span>⭐ {anime.score || "N/A"}</span>
            <span>📺 {anime.episodes || "?"} Episodes</span>
            <span>🎭 {anime.genres?.map((g) => g.name).join(", ")}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Action Buttons */}
        <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-10">
          <button
            onClick={handleWatch}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-105 transition text-sm sm:text-base"
          >
            ▶ Mark as Watched
          </button>
          <button
            onClick={() => navigate(`/anime/${id}/comments`)}
            className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition text-sm sm:text-base"
          >
            💬 Comments
          </button>
        </div>

        {/* Synopsis */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Synopsis</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            {anime.synopsis || "No synopsis available."}
          </p>
        </div>

        {/* Episodes */}
        {episodes.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Episodes</h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {episodes.map((ep) => (
                <div
                  key={ep.mal_id}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition cursor-pointer"
                >
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Episode {ep.mal_id}: {ep.title || "TBA"}
                    </p>
                    {ep.aired && (
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {new Date(ep.aired).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <span className="text-indigo-400">▶</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AnimePage;