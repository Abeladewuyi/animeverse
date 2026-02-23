import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import AnimePage from "./components/AnimePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<ProtectedRoute>
      <Home /></ProtectedRoute>}/>
      <Route path="/profile" element={
   <ProtectedRoute>
      <Profile/>
   </ProtectedRoute>
 }
/>
     <Route path="/friends" element={
  <ProtectedRoute>
    <Friends />
  </ProtectedRoute>
} />
<Route path="/anime/:id" element={
  <ProtectedRoute>
    <AnimePage />
  </ProtectedRoute>
} />
    </Routes>
  );
}

export default App;