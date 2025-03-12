import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { AppDispatch } from "../../store"; 
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { FiUser, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noma'lum xatolik yuz berdi");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Toshkent menejment va iqtisodiyot instituti</h2>
        <p className={styles.subtitle}>Guvohnoma Student axborot tizimi</p>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.inputGroup}>
          <input
            type="text" // ✅ ID uchun email emas, text qo'yildi
            placeholder="Talaba ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown} // ✅ Enter tugmasi bosilganda login
          />
          <FiUser className={styles.icon} />
        </div>

        <div className={styles.inputGroup}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span onClick={() => setShowPassword(!showPassword)} className={styles.icon}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button className={styles.button} onClick={handleLogin}>
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
