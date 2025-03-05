import React, { useState } from "react";
import { Card, CardBody, Input, Button, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Activity, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../components/AuthContext";
import { useThemeStore } from "../store/themeStore";
import ThemeToggle from "../components/ThemeToggle";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const isDark = useThemeStore((state) => state.isDark);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      console.error("Password reset error:", error);

      // Handle specific Firebase errors
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email address.");
      } else {
        setError("Failed to send password reset email. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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
      </div>

      <div className="absolute bottom-0 right-0 left-0 h-48 overflow-hidden z-0">
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>
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
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Reset Your Password
              </h1>
              <p
                className={`text-${
                  isDark ? "gray-300" : "gray-500"
                } text-center`}
              >
                Enter your email address and we'll send you a link to reset your
                password.
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

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-4 rounded-lg ${
                  isDark
                    ? "bg-green-900/30 border border-green-800"
                    : "bg-green-50 border border-green-100"
                } flex flex-col items-center`}
              >
                <CheckCircle
                  className={`w-16 h-16 ${
                    isDark ? "text-green-400" : "text-green-500"
                  } mb-4`}
                />
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-800"
                  } mb-2`}
                >
                  Check Your Email
                </h3>
                <p
                  className={`text-${
                    isDark ? "gray-300" : "gray-600"
                  } text-center mb-4`}
                >
                  We've sent a password reset link to{" "}
                  <span className="font-medium">{email}</span>
                </p>
                <Button
                  onClick={() => navigate("/login")}
                  color="primary"
                  className="mt-2"
                >
                  Back to Login
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Input
                    type="email"
                    label="Email Address"
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
                    isInvalid={!!error}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600"
                    size="lg"
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
                    Send Reset Link
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center"
                >
                  <Link
                    href="/login"
                    className="flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <ArrowLeft size={16} className="mr-1" /> Back to Login
                  </Link>
                </motion.div>
              </form>
            )}

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p
                className={`mt-4 text-xs ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Current User: Chirag-Punia
              </p>
              <p
                className={`mt-1 text-xs ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Last Updated: 2025-03-05 21:50:03
              </p>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
