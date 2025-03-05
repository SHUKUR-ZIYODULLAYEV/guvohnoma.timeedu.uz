import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sidebarReducer from "./sidebarSlice";
import attendanceJournalReducer from "./attendanceJournalSlice"; // Yangi qo'shilgan slice

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    attendanceJournal: attendanceJournalReducer, // Dars jadvali ma'lumotlari uchun reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
