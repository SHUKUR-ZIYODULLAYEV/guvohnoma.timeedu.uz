import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sidebarReducer from "./sidebarSlice";
import attendanceJournalReducer from "./attendanceJournalSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    attendanceJournal: attendanceJournalReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
