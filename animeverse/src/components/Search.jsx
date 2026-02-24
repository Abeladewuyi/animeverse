import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { searchAnime } from "../api/anime";

function Search() {
  const { userData } = useAuth();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);

    try {
      const data = await searchAnime(query);
      setResults(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

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
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        <h1 className="text-3xl font-bold mb-8">Search Anime</h1>

        {/* Search Bar */}
        <div className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="Search for anime..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "..." : "Search"}
          </button>
        </div>

        {/* Results */}
        {loading ? (
          <p className="text-gray-400">Searching...</p>
        ) : searched && results.length === 0 ? (
          <p className="text-gray-400">No anime found for "{query}"</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {results.map((anime) => (
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
                  <p className="text-gray-400 text-xs">⭐ {anime.score || "N/A"}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Search;