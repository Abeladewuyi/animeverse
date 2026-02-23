import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";

const ActivityContext = createContext();

export function ActivityProvider({ children }) {
  const { user, userData } = useAuth();
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !userData?.friends?.length) {
      setLoading(false);
      return;
    }

    // Listen to each friend's activity in real time
    const unsubscribers = userData.friends.map((friendId) => {
      const q = query(
        collection(db, "activity", friendId, "feed"),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      return onSnapshot(q, (snap) => {
        const activities = snap.docs.map((d) => ({
          id: d.id,
          userId: friendId,
          ...d.data(),
        }));

        setFeed((prev) => {
          // Merge and sort all activities by date
          const merged = [
            ...prev.filter((a) => a.userId !== friendId),
            ...activities,
          ];
          return merged.sort((a, b) => {
            const aTime = a.createdAt?.toMillis?.() || 0;
            const bTime = b.createdAt?.toMillis?.() || 0;
            return bTime - aTime;
          });
        });

        setLoading(false);
      });
    });

    return () => unsubscribers.forEach((unsub) => unsub());
  }, [user, userData?.friends]);

  const logActivity = async (type, message, animeId = null) => {
    if (!user) return;
    await addDoc(collection(db, "activity", user.uid, "feed"), {
      type,
      message,
      animeId,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <ActivityContext.Provider value={{ feed, loading, logActivity }}>
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity = () => useContext(ActivityContext);