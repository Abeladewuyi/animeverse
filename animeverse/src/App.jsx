import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route 
  path="/home" 
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  } 
/>
    </Routes>
  );
}

export default App;