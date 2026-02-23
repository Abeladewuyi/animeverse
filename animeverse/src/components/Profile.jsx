import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

function Profile() {
  const { userData, user, setUserData } = useAuth();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newBio, setNewBio] = useState("");
  const [saving, setSaving] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };

  const handleEditOpen = () => {
    setNewUsername(userData.username);
    setNewBio(userData.bio || "");
    setEditing(true);
  };

  const handleSave = async () => {
    if (!newUsername.trim()) {
      alert("Username cannot be empty");
      return;
    }

    try {
      setSaving(true);
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        username: newUsername.trim(),
        bio: newBio.trim(),
      });

      setUserData((prev) => ({
        ...prev,
        username: newUsername.trim(),
        bio: newBio.trim(),
      }));

      setEditing(false);
    } catch (error) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (!userData) return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur sticky top-0 z-50">
        <h1
          onClick={() => navigate("/home")}
          className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
        >
          AnimeVerse
        </h1>
        <button
          onClick={() => navigate("/friends")}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition text-sm"
        >
          Friends
        </button>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
            {userData.username?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{userData.username}</h1>
            <p className="text-gray-400">{userData.email}</p>
            <p className="text-gray-500 text-sm mt-1">
              Member since {userData.createdAt?.toDate().toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={handleEditOpen}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition text-sm"
          >
            Edit Profile
          </button>
        </div>

        {/* Edit Modal */}
        {editing && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-6">
            <div className="bg-[#0f0f1a] border border-white/10 rounded-2xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

              <label className="text-gray-400 text-sm mb-1 block">Username</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="text-gray-400 text-sm mb-1 block">Bio</label>
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                rows={4}
                placeholder="Tell the world about yourself..."
                className="w-full mb-6 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />

              <div className="flex gap-3">
                <button
                  onClick={() => setEditing(false)}
                  className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-105 transition disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bio */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">Bio</h2>
          <p className="text-gray-400">
            {userData.bio || "No bio yet. Tell the world about yourself!"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-indigo-400">0</p>
            <p className="text-gray-400 text-sm">Watched</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">
              {userData.friends?.length || 0}
            </p>
            <p className="text-gray-400 text-sm">Friends</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">0</p>
            <p className="text-gray-400 text-sm">Comments</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold hover:scale-105 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;