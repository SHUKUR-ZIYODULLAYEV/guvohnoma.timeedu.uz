import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { logout } from "../../store/authSlice";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Main;
