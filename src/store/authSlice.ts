import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { supabase } from "../lib/supabaseClient";
import { User } from "../types/types";

interface AuthState {
  user: User | null;
  role: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// LocalStorage dan auth state ni tiklash
const storedAuth = localStorage.getItem("authState");
const initialState: AuthState = storedAuth
  ? JSON.parse(storedAuth)
  : {
      user: null,
      role: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    };

// ✅ Supabase orqali login qilish
export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("🔹 LOGIN RESPONSE DATA:", data); // ✅ Supabase dan kelayotgan ma'lumot
    console.log("🔹 LOGIN ERROR:", error); // ✅ Agar xatolik bo‘lsa

    if (error || !data.user) {
      return rejectWithValue(error?.message || "Login failed");
    }

    // ✅ Foydalanuvchi profili jadvalidan rol olish
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profileError) {
      console.error("🔴 PROFILE ERROR:", profileError);
      return rejectWithValue("Foydalanuvchi roli topilmadi");
    }

    console.log("🔹 PROFILE DATA:", profileData); // ✅ Profil ma'lumotlarini tekshirish

    const user: User = {
      id: data.user.id,
      email: data.user.email!,
      fullname: data.user.user_metadata?.fullname || "No Name",
      role: profileData?.role || "user", // ✅ Rolni profiles jadvalidan olamiz
    };

    console.log("🔹 USER OBJECT:", user); // ✅ Yaratilgan user obyektini tekshirish

    localStorage.setItem(
      "authState",
      JSON.stringify({ user, role: user.role, isAuthenticated: true })
    );

    return user;
  } catch (err) {
    console.log("🔴 LOGIN ERROR (CATCH):", err); // ✅ Xato bo‘lsa
    return rejectWithValue("Unexpected error occurred");
  }
});

// ✅ Logout funksiyasi
export const logout = createAsyncThunk("auth/logout", async () => {
  await supabase.auth.signOut();
  localStorage.removeItem("authState");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.role = action.payload.role;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login error";
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.role = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setAuthState } = authSlice.actions;
export default authSlice.reducer;
