import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthState } from "./store/authSlice"; // ✅ SETAUTHSTATE IMPORT QILINGAN
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedAuth = localStorage.getItem("authState");
    if (storedAuth) {
      dispatch(setAuthState(JSON.parse(storedAuth))); // LocalStorage dan auth state ni tiklash
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
