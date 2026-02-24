import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useActivity } from "../context/ActivityContext";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { getAnimeById } from "../api/anime";

function Comments() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, userData } = useAuth();
  const { logActivity } = useActivity();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeById(id);
      setAnime(data);
    };
    fetchAnime();

    const q = query(
      collection(db, "comments", id, "reviews"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setComments(data);
    });

    return () => unsubscribe();
  }, [id]);

  const handleComment = async () => {
    if (!newComment.trim()) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "comments", id, "reviews"), {
        userId: user.uid,
        username: userData.username,
        text: newComment.trim(),
        likes: [],
        createdAt: serverTimestamp(),
      });

      await logActivity(
        "commented",
        `commented on ${anime?.title || "an anime"}`,
        id
      );

      setNewComment("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (commentId, likes) => {
    const commentRef = doc(db, "comments", id, "reviews", commentId);
    if (likes.includes(user.uid)) {
      await updateDoc(commentRef, { likes: arrayRemove(user.uid) });
    } else {
      await updateDoc(commentRef, { likes: arrayUnion(user.uid) });
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
        <h1
          onClick={() => navigate("/home")}
          className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
        >
          AnimeVerse
        </h1>
        <button
          onClick={() => navigate(`/anime/${id}`)}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition text-sm"
        >
          ← Back
        </button>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Anime Title */}
        {anime && (
          <div className="flex items-center gap-4 mb-8">
            <img
              src={anime.images?.jpg?.image_url}
              alt={anime.title}
              className="w-16 h-20 object-cover rounded-xl"
            />
            <div>
              <h1 className="text-2xl font-bold">{anime.title}</h1>
              <p className="text-gray-400 text-sm">{comments.length} comments</p>
            </div>
          </div>
        )}

        {/* Comment Input */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts on this anime..."
            rows={3}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none mb-3"
          />
          <div className="flex justify-end">
            <button
              onClick={handleComment}
              disabled={loading || !newComment.trim()}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-105 transition disabled:opacity-50 text-sm"
            >
              {loading ? "Posting..." : "Post Comment"}
            </button>
          </div>
        </div>

        {/* Comments List */}
        {comments.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400">No comments yet.</p>
            <p className="text-gray-500 text-sm mt-1">Be the first to comment!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xs">
                      {comment.username?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-indigo-400">
                        @{comment.username}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {timeAgo(comment.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(comment.id, comment.likes || [])}
                    className={`flex items-center gap-1 px-3 py-1 rounded-xl text-sm transition hover:scale-105 ${
                      comment.likes?.includes(user.uid)
                        ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                        : "bg-white/5 text-gray-400 border border-white/10"
                    }`}
                  >
                    ❤️ {comment.likes?.length || 0}
                  </button>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Comments;