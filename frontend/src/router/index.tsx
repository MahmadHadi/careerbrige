import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "@/components/ProtectedRoute";

import Dashboard from "@/pages/admin/Dashboard";
import Experts from "@/pages/admin/Experts";
import Users from "@/pages/admin/Users";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ExpertDashboard from "@/pages/expert/ExpertDashboard";
import ExpertProfile from "@/pages/expert/ExpertProfile";
import Home from "@/pages/Home";
import Expert from "@/pages/public/Expert";
import ExpertId from "@/pages/public/ExpertId";
import StudentBookings from "@/pages/student/StudentBookings";
import StudentDashboard from "@/pages/student/StudentDashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/expert" element={<Expert />} />
      <Route path="/expert/:id" element={<ExpertId />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRole="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings"
        element={
          <ProtectedRoute allowedRole="student">
            <StudentBookings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/expert/dashboard"
        element={
          <ProtectedRoute allowedRole="expert">
            <ExpertDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/expert/profile"
        element={
          <ProtectedRoute allowedRole="expert">
            <ExpertProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRole="admin">
            <Users />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/experts"
        element={
          <ProtectedRoute allowedRole="admin">
            <Experts />{" "}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
