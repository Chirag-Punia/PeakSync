import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Link,
  Checkbox,
  Divider,
} from "@nextui-org/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Activity,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Github,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../components/AuthContext";
import { useThemeStore } from "../store/themeStore";
import ThemeToggle from "../components/ThemeToggle";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login, googleSignIn, githubSignIn, twitterSignIn, isAuthenticated } =
    useAuth();
  const isDark = useThemeStore((state) => state.isDark);

  // Get the redirect path from location state or default to dashboard
  const from = location.state?.from?.pathname || "/dashboard";

  // If user is already authenticated, redirect
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      if (rememberMe) {
        // Store email for remember me functionality
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      let errorMessage = "Login failed. Please check your credentials.";

      // Extract Firebase error message if available
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found. Please check your email or register.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Invalid password. Please try again.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format. Please check your email.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage =
          "Too many failed login attempts. Please try again later.";
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await googleSignIn();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await githubSignIn();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("GitHub login failed:", error);
      setError("GitHub login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTwitterSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await twitterSignIn();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Twitter login failed:", error);
      setError("Twitter login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Check for remembered email when component mounts
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-600/30 blur-3xl"></div>
        <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 h-48 overflow-hidden z-0">
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
      </div>

      {/* Theme toggle in the top right */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <Card
          className={`border-none shadow-2xl ${
            isDark ? "bg-gray-800/90" : "bg-white/90"
          } backdrop-blur-lg`}
        >
          <CardBody className="py-8 px-6">
            <motion.div
              className="flex flex-col items-center gap-4 mb-8"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl shadow-lg">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h1
                className={`text-3xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Welcome Back
              </h1>
              <p className={`text-${isDark ? "gray-300" : "gray-500"}`}>
                Sign in to access your dashboard • 2025-03-05
              </p>
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded bg-red-100 border border-red-200 text-red-700 text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="bordered"
                  color="primary"
                  startContent={
                    <Mail
                      className={isDark ? "text-gray-400" : "text-gray-500"}
                      size={20}
                    />
                  }
                  className="max-w-full"
                  classNames={{
                    label: isDark ? "text-gray-300" : "text-gray-600",
                    input: isDark ? "text-white" : "text-gray-900",
                    inputWrapper: isDark
                      ? "bg-gray-700/50 backdrop-blur-md border-gray-600"
                      : "bg-gray-100/50 backdrop-blur-md border-gray-300",
                  }}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Input
                  type={isVisible ? "text" : "password"}
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="bordered"
                  color="primary"
                  startContent={
                    <Lock
                      className={isDark ? "text-gray-400" : "text-gray-500"}
                      size={20}
                    />
                  }
                  endContent={
                    <button
                      type="button"
                      onClick={toggleVisibility}
                      className="focus:outline-none"
                    >
                      {isVisible ? (
                        <EyeOff
                          className={isDark ? "text-gray-400" : "text-gray-500"}
                          size={20}
                        />
                      ) : (
                        <Eye
                          className={isDark ? "text-gray-400" : "text-gray-500"}
                          size={20}
                        />
                      )}
                    </button>
                  }
                  className="max-w-full"
                  classNames={{
                    label: isDark ? "text-gray-300" : "text-gray-600",
                    input: isDark ? "text-white" : "text-gray-900",
                    inputWrapper: isDark
                      ? "bg-gray-700/50 backdrop-blur-md border-gray-600"
                      : "bg-gray-100/50 backdrop-blur-md border-gray-300",
                  }}
                  required
                />
              </motion.div>

              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Checkbox
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  color="primary"
                  classNames={{
                    label: isDark ? "text-gray-300" : "text-gray-600",
                  }}
                >
                  Remember me
                </Checkbox>
                <Link
                  href="/forgot-password"
                  color="primary"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Forgot password?
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600"
                  size="lg"
                  startContent={<LogIn size={20} />}
                  isLoading={loading}
                  spinner={
                    <svg
                      className="animate-spin h-5 w-5 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                >
                  Sign In
                </Button>
              </motion.div>

              <div className="relative my-6">
                <Divider className={isDark ? "bg-gray-700" : "bg-gray-200"} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`px-2 ${
                      isDark
                        ? "bg-gray-800 text-gray-300"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  className={`${
                    isDark
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  } font-medium`}
                  startContent={<Github size={18} />}
                  onClick={handleGithubSignIn}
                  isLoading={loading}
                >
                  GitHub
                </Button>
                <Button
                  className="bg-[#1DA1F2]/90 text-white font-medium"
                  startContent={<Twitter size={18} />}
                  onClick={handleTwitterSignIn}
                  isLoading={loading}
                >
                  Twitter
                </Button>
              </div>
            </form>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-500 font-semibold hover:text-blue-600"
                >
                  Create Account
                </Link>
              </p>
              <p
                className={`mt-4 text-xs ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Current User: {window.userLogin || "Chirag-Punia"}
              </p>
              <p
                className={`mt-1 text-xs ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Last Updated: 2025-03-05 21:44:39
              </p>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
