import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setAuthState } from "./store/authSlice";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const storedAuth = localStorage.getItem("authState");
    if (storedAuth) dispatch(setAuthState(JSON.parse(storedAuth)));
  }, [dispatch]);

  const hideHeader = location.pathname === "/login";

  return (
    <div className={styles.app}>
      {!hideHeader && <Header />}
      <div className={styles.container}>
        {!hideHeader && <Sidebar />}
        <main className={styles.content}>
          <AppRoutes />
        </main>
      </div>
    </div>
  );
};

export default App;
