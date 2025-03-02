import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import AttendanceJournal from "../pages/AttendanceJournal/AttendanceJournal";
import ProtectedRoute from "../routes/ProtectedRoute";
import Unauthorized from "../pages/Unauthorized/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Har bir sahifa uchun alohida ProtectedRoute qo‘shamiz */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route
        path="/attendance-journal"
        element={
          <ProtectedRoute requiredRole="admin">
            <AttendanceJournal />
          </ProtectedRoute>
        }
      />
      
      {/* Unauthorized sahifa 404 dan oldin bo‘lishi kerak */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* 404 sahifa oxirida bo‘lishi kerak */}
      <Route path="*" element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;
