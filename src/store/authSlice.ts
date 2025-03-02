import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  id: string | null;
  email: string | null;
  role: string | null;
  isAuthenticated: boolean;
}

// LocalStorage dan auth state ni tiklash
const storedAuth = localStorage.getItem("authState");
const initialState: AuthState = storedAuth
  ? JSON.parse(storedAuth)
  : {
      id: null,
      email: null,
      role: null,
      isAuthenticated: false,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ id: string; email: string; role: string }>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      localStorage.setItem("authState", JSON.stringify(state)); // LocalStorage ga saqlash
    },
    logout: (state) => {
      state.id = null;
      state.email = null;
      state.role = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authState"); // LocalStorage ni tozalash
    },
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      return action.payload; // Saqlangan auth state ni tiklash
    },
  },
});

export const { loginSuccess, logout, setAuthState } = authSlice.actions;
export default authSlice.reducer;
