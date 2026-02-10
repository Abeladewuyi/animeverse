import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {

      const user = auth.currentUser;

      if(!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        setUserData(docSnap.data());
      }

    };

    fetchUser();

  }, []);

  if(!userData){
    return <div className="text-white text-center mt-20">Loading profile...</div>;
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">

      <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold mb-6">
          👤 {userData.username}
        </h1>

        <p className="mb-2">
          📧 {userData.email}
        </p>

        <p>
          🗓 Joined: {userData.createdAt?.toDate().toDateString()}
        </p>

      </div>

    </div>
  );
}

export default Profile;
