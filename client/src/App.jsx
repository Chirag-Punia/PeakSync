import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./auth";
import { useThemeStore } from "./store/themeStore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./auth/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <NextUIProvider>
      <div className={isDark ? "dark" : ""}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/dashboard/*"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </NextUIProvider>
  );
}

export default App;
