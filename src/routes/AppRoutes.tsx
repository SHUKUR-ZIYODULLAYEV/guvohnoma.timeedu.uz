import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import AttendanceJournal from "../pages/AttendanceJournal/AttendanceJournal";
import AttendanceJournalDetails from "../pages/AttendanceJournalDetails/AttendanceJournalDetails";
import ProtectedRoute from "../routes/ProtectedRoute";
import Unauthorized from "../pages/Unauthorized/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Main /></ProtectedRoute>} />
      <Route path="/attendance-journal" element={<ProtectedRoute requiredRole="admin"><AttendanceJournal /></ProtectedRoute>} />
      <Route path="/attendance-journal/:id" element={<ProtectedRoute requiredRole="admin"><AttendanceJournalDetails /></ProtectedRoute>} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;