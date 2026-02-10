import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
      <h1 className="text-4xl font-bold">
        Welcome to AnimeVerse Home 🚀
      </h1>
    </div>
  );
}
<button
 onClick={()=>navigate("/profile")}
 className="px-6 py-2 bg-indigo-600 rounded-xl text-white"
>
 View Profile
</button>


export default Home;
