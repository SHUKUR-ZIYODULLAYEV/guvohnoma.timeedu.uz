import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Logout bo‘lgandan keyin login sahifasiga yo‘naltirish
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
      <h2>My App</h2>
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </header>
  );
};

export default Header;
