import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const [user, setUser] = useState(undefined);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();

  }, []);

  // Still checking
  if(user === undefined){
    return null;
  }

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
