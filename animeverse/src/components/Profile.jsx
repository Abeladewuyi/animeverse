import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Profile() {
  const { userData, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };

  if (!userData) return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-6 py-10">
      <div className="max-w-2xl mx-auto">

        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
            {userData.username?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{userData.username}</h1>
            <p className="text-gray-400">{userData.email}</p>
            <p className="text-gray-500 text-sm mt-1">
              Member since {userData.createdAt?.toDate().toLocaleDateString()}
            </p>
          </div>
        </div>

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