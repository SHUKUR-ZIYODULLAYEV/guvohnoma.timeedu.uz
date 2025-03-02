import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

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
      // 🔍 Profile dan role-ni olish
      const { data: profileData, error: profileError } = await supabase
        .from("profiles") // 🎯 Supabase-da "profiles" jadvali bo‘lishi kerak
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError) {
        console.error("Role-ni olishda xatolik:", profileError);
        alert("Foydalanuvchi roli aniqlanmadi!");
        return;
      }

      // Redux-ga user ma’lumotlarini saqlaymiz
      dispatch(
        loginSuccess({
          id: data.user.id,
          email: data.user.email ?? "",
          role: profileData?.role || "user", // Agar role yo‘q bo‘lsa, default "user"
        })
      );

      navigate("/"); // 🎯 Login bo‘lgandan keyin main sahifaga yo‘naltirish
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
