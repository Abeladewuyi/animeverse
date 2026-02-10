import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Home() {

  const [username, setUsername] = useState("");

  useEffect(() => {

    const fetchUser = async () => {

      const user = auth.currentUser;

      if(!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        setUsername(docSnap.data().username);
      }

    };

    fetchUser();

  }, []);

  return (

    <div className="min-h-screen bg-[#020617] text-white px-6 py-10">

      {/* Welcome */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Welcome back{username && `, ${username}`} 👋
      </h1>

      <p className="text-gray-400 mb-10">
        Ready to continue your anime journey?
      </p>


      {/* Continue Watching */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Continue Watching
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-indigo-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition">
            Naruto
          </div>

          <div className="bg-purple-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition">
            Attack on Titan
          </div>

          <div className="bg-pink-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition">
            Jujutsu Kaisen
          </div>

          <div className="bg-blue-600/30 h-40 rounded-2xl flex items-center justify-center hover:scale-105 transition">
            Demon Slayer
          </div>

        </div>

      </section>



      {/* Social Activity */}
      <section>

        <h2 className="text-2xl font-semibold mb-4">
          Friend Activity 🔥
        </h2>

        <div className="space-y-4">

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <span className="font-semibold text-indigo-400">
              @zenitsu
            </span>{" "}
            just watched <span className="font-semibold">Demon Slayer</span>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <span className="font-semibold text-purple-400">
              @itachi
            </span>{" "}
            commented on <span className="font-semibold">Naruto</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
