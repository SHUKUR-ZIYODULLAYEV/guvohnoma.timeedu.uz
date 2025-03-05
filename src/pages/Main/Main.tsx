import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { logout } from "../../store/authSlice";
import styles from "./Main.module.css";
const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h1>Main Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Main;
