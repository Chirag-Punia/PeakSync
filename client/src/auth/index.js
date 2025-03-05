// Export all authentication related components and services
export {
  default as firebaseConfig,
  auth,
  db,
} from "../services/firebaseConfig";
export { default as authService } from "../services/authService";
export { AuthProvider, useAuth } from "../components/AuthContext";
export { default as ProtectedRoute } from "../components/PrivateRoute";
export { default as ForgotPassword } from "./ForgotPassword";
