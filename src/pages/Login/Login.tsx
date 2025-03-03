import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { FiUser, FiEye } from "react-icons/fi"; // 📌 To‘g‘ri ikonalarni ishlatamiz

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login yoki parol noto‘g‘ri!");
      return;
    }

    if (data.user) {
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError) {
        console.error("Role-ni olishda xatolik:", profileError);
        alert("Foydalanuvchi roli aniqlanmadi!");
        return;
      }

      dispatch(
        loginSuccess({
          id: data.user.id,
          email: data.user.email ?? "",
          role: profileData?.role || "user",
        })
      );

      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Toshkent menejment va iqtisodiyot instituti</h2>
        <p className={styles.subtitle}>Guvohnoma Student axborot tizimi</p>

        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Talaba ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FiUser className={styles.icon} />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FiEye className={styles.icon} />
        </div>

        <button className={styles.button} onClick={handleLogin}>
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
