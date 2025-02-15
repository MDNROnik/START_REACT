import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Headers from "./components/header/header";
import Footer from "./components/footer/footer";    

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          // This is a Redux action
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(()=>[
        setLoading(false)
      ]);
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block"> 
          <Headers></Headers>
          <main>
            <h1>HELLO WORLD</h1>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
