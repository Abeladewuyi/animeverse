import { onAuthStateChanged } from "firebase/auth";

useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, async (user) => {

    if(!user) return;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      setUserData(docSnap.data());
    }

  });

  return () => unsubscribe();

}, []);
