import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "@/pages/Landing/Landing";
import Login from "@/pages/Auth/Login";
import Dashboard from "@/pages/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}