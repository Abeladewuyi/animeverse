import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Friends() {
  const { user, userData, setUserData } = useAuth();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);

    try {
      const q = query(
        collection(db, "users"),
        where("username", "==", searchQuery.trim())
      );
      const querySnap = await getDocs(q);
      const results = [];
      querySnap.forEach((d) => {
        if (d.id !== user.uid) {
          results.push({ id: d.id, ...d.data() });
        }
      });
      setSearchResults(results);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendFriendRequest = async (targetUserId) => {
    try {
      const targetRef = doc(db, "users", targetUserId);
      await updateDoc(targetRef, {
        friendRequests: arrayUnion(user.uid),
      });
      setSentRequests((prev) => [...prev, targetUserId]);
      alert("Friend request sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  const acceptFriendRequest = async (requesterId) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const requesterRef = doc(db, "users", requesterId);

      await updateDoc(userRef, {
        friends: arrayUnion(requesterId),
        friendRequests: arrayRemove(requesterId),
      });

      await updateDoc(requesterRef, {
        friends: arrayUnion(user.uid),
      });

      setUserData((prev) => ({
        ...prev,
        friends: [...(prev.friends || []), requesterId],
        friendRequests: prev.friendRequests.filter((id) => id !== requesterId),
      }));
    } catch (error) {
      alert(error.message);
    }
  };

  const declineFriendRequest = async (requesterId) => {
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        friendRequests: arrayRemove(requesterId),
      });

      setUserData((prev) => ({
        ...prev,
        friendRequests: prev.friendRequests.filter((id) => id !== requesterId),
      }));
    } catch (error) {
      alert(error.message);
    }
  };

  const removeFriend = async (friendId) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const friendRef = doc(db, "users", friendId);

      await updateDoc(userRef, { friends: arrayRemove(friendId) });
      await updateDoc(friendRef, { friends: arrayRemove(user.uid) });

      setUserData((prev) => ({
        ...prev,
        friends: prev.friends.filter((id) => id !== friendId),
      }));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#020617]/80 backdrop-blur sticky top-0 z-50">
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

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">Friends</h1>

        {/* Search */}
        <div className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="Search by username..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Search Results */}
        {searchResults.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <div className="space-y-3">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold">
                      {result.username?.charAt(0).toUpperCase()}
                    </div>
                    <p className="font-semibold">{result.username}</p>
                  </div>
                  {userData?.friends?.includes(result.id) ? (
                    <button
                      onClick={() => removeFriend(result.id)}
                      className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:scale-105 transition text-sm"
                    >
                      Remove
                    </button>
                  ) : sentRequests.includes(result.id) ? (
                    <span className="text-gray-400 text-sm px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                      Sent ✓
                    </span>
                  ) : (
                    <button
                      onClick={() => sendFriendRequest(result.id)}
                      className="px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 hover:scale-105 transition text-sm"
                    >
                      Add Friend
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Friend Requests */}
        {userData?.friendRequests?.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Friend Requests{" "}
              <span className="text-purple-400">
                ({userData.friendRequests.length})
              </span>
            </h2>
            <div className="space-y-3">
              {userData.friendRequests.map((requesterId) => (
                <FriendRequestCard
                  key={requesterId}
                  requesterId={requesterId}
                  onAccept={() => acceptFriendRequest(requesterId)}
                  onDecline={() => declineFriendRequest(requesterId)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Friends List */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            My Friends{" "}
            <span className="text-indigo-400">
              ({userData?.friends?.length || 0})
            </span>
          </h2>
          {userData?.friends?.length === 0 ? (
            <p className="text-gray-400">
              No friends yet. Search for someone to add!
            </p>
          ) : (
            <div className="space-y-3">
              {userData?.friends?.map((friendId) => (
                <FriendCard
                  key={friendId}
                  friendId={friendId}
                  onRemove={() => removeFriend(friendId)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

// Friend Card Component
function FriendCard({ friendId, onRemove }) {
  const [friendData, setFriendData] = useState(null);

  useEffect(() => {
    const fetchFriend = async () => {
      const docSnap = await getDoc(doc(db, "users", friendId));
      if (docSnap.exists()) setFriendData(docSnap.data());
    };
    fetchFriend();
  }, [friendId]);

  if (!friendData) return null;

  return (
    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold">
          {friendData.username?.charAt(0).toUpperCase()}
        </div>
        <p className="font-semibold">{friendData.username}</p>
      </div>
      <button
        onClick={onRemove}
        className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:scale-105 transition text-sm"
      >
        Remove
      </button>
    </div>
  );
}

// Friend Request Card Component
function FriendRequestCard({ requesterId, onAccept, onDecline }) {
  const [requesterData, setRequesterData] = useState(null);

  useEffect(() => {
    const fetchRequester = async () => {
      const docSnap = await getDoc(doc(db, "users", requesterId));
      if (docSnap.exists()) setRequesterData(docSnap.data());
    };
    fetchRequester();
  }, [requesterId]);

  if (!requesterData) return null;

  return (
    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center font-bold">
          {requesterData.username?.charAt(0).toUpperCase()}
        </div>
        <p className="font-semibold">{requesterData.username}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onAccept}
          className="px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 hover:scale-105 transition text-sm"
        >
          Accept
        </button>
        <button
          onClick={onDecline}
          className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:scale-105 transition text-sm"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default Friends;