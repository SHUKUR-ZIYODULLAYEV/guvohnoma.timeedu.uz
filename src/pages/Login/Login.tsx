import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { AppDispatch } from "../../store"; // ✅ Redux Toolkit uchun
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { FiUser, FiEye } from "react-icons/fi";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>(); // ✅ Redux Toolkit
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    try {
      await dispatch(login({ email, password })).unwrap(); // ✅ Xatolikni qo‘lga olish
      navigate("/");
    } catch (err) {
      setError(err as string);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Toshkent menejment va iqtisodiyot instituti</h2>
        <p className={styles.subtitle}>Guvohnoma Student axborot tizimi</p>

        {error && <p className={styles.error}>{error}</p>} {/* ✅ Xatolik ko‘rsatish */}

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
