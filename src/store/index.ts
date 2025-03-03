import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sidebarReducer from "./sidebarSlice"; // Sidebar slice ni qo'shish

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer, // Sidebar holatini saqlash
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
