import { useAppSelector } from "../../hooks/useAppSelector";
import { Navigate } from "react-router-dom";

const Main = () => {
  const { user, role, isAuthenticated } = useAppSelector((state) => state.auth); // ✅ Redux Toolkit ishlatish

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // 🔒 Foydalanuvchi login bo‘lmagan bo‘lsa, login sahifaga yo‘naltirish
  }

  return (
    <div>
      <h1>Asosiy Sahifa</h1>
      <p>Foydalanuvchi: {user?.fullname}</p>
      <p>Rol: {role}</p>
    </div>
  );
};

export default Main;
