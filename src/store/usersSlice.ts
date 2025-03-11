import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../lib/supabaseClient"; // ✅ Supabase ishlatilmoqda
import { User } from "../types/types"; // ✅ User interfeysi to'g'ri import qilindi

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// **Foydalanuvchilarni yuklash thunk**
export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        throw error;
      }

      return data as User[];
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Noma'lum xatolik yuz berdi");
      }
    }
  }
);

// **Users Slice**
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default usersSlice.reducer;
