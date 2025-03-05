import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Link,
  Select,
  SelectItem,
  Checkbox,
  Divider,
  Progress,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Mail,
  Lock,
  User,
  Clipboard,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../components/AuthContext";
import { useThemeStore } from "../store/themeStore";
import ThemeToggle from "../components/ThemeToggle";

const roles = [
  { value: "athlete", label: "Athlete" },
  { value: "coach", label: "Coach" },
  { value: "team_manager", label: "Team Manager" },
  { value: "administrator", label: "Administrator" },
];

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "athlete",
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const navigate = useNavigate();
  const {
    register,
    googleSignIn,
    githubSignIn,
    twitterSignIn,
    isAuthenticated,
  } = useAuth();
  const isDark = useThemeStore((state) => state.isDark);

  // If user is already authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Password strength checker
    if (name === "password") {
      // Simple strength calculation
      let strength = 0;
      if (value.length > 0) strength += 20;
      if (value.length >= 8) strength += 20;
      if (/[A-Z]/.test(value)) strength += 20;
      if (/[0-9]/.test(value)) strength += 20;
      if (/[^A-Za-z0-9]/.test(value)) strength += 20;
      setPasswordStrength(strength);
    }

    // Clear validation error when field is edited
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: undefined,
      });
    }

    // Clear general error when any field is edited
    if (error) {
      setError("");
    }
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      role: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.password) errors.password = "Password is required";
    else if (formData.password.length < 8)
      errors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords don't match";
    if (!formData.agreeToTerms)
      errors.agreeToTerms = "You must agree to Terms & Privacy Policy";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);

      // Handle specific Firebase error messages
      let errorMessage = "Registration failed. Please try again.";

      if (error.code === "auth/email-already-in-use") {
        errorMessage =
          "Email is already in use. Please use a different email or log in.";
        setValidationErrors({
          ...validationErrors,
          email: "Email is already in use",
        });
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format. Please check your email.";
        setValidationErrors({
          ...validationErrors,
          email: "Invalid email format",
        });
      } else if (error.code === "auth/weak-password") {
        errorMessage =
          "Password is too weak. Please choose a stronger password.";
        setValidationErrors({
          ...validationErrors,
          password: "Password is too weak",
        });
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
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign up failed:", error);
      setError("Google sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await githubSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.error("GitHub sign up failed:", error);
      setError("GitHub sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTwitterSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await twitterSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.error("Twitter sign up failed:", error);
      setError("Twitter sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  // Password strength color
  const getStrengthColor = () => {
    if (passwordStrength < 40) return "danger";
    if (passwordStrength < 80) return "warning";
    return "success";
  };

  // Password strength label
  const getStrengthLabel = () => {
    if (passwordStrength < 40) return "Weak";
    if (passwordStrength < 80) return "Good";
    return "Strong";
  };

  return (
    <div
      className={`h-screen flex items-center justify-center p-3 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>

      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"></div>
        <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 h-64 overflow-hidden z-0">
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
      </div>

      {/* Theme toggle in the top right */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg z-10 max-h-[90vh]"
      >
        <Card
          className={`border-none shadow-2xl ${
            isDark ? "bg-gray-800/90" : "bg-white/90"
          } backdrop-blur-lg`}
        >
          <CardBody className="py-5 px-5">
            <motion.div
              className="flex flex-col items-center gap-2 mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              <div className="p-2 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h1
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Create Account
              </h1>
              <p className={`text-sm text-${isDark ? "gray-300" : "gray-500"}`}>
                Join PeakSync to elevate your performance
              </p>
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 p-2 rounded bg-red-100 border border-red-200 text-red-700 text-xs"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleRegister} className="space-y-3">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <motion.div variants={itemVariants}>
                    <Input
                      type="text"
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="bordered"
                      color={validationErrors.name ? "danger" : "primary"}
                      startContent={
                        <User
                          className={isDark ? "text-gray-400" : "text-gray-500"}
                          size={16}
                        />
                      }
                      isInvalid={!!validationErrors.name}
                      errorMessage={validationErrors.name}
                      size="sm"
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

                  <motion.div variants={itemVariants}>
                    <Input
                      type="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="bordered"
                      color={validationErrors.email ? "danger" : "primary"}
                      startContent={
                        <Mail
                          className={isDark ? "text-gray-400" : "text-gray-500"}
                          size={16}
                        />
                      }
                      isInvalid={!!validationErrors.email}
                      errorMessage={validationErrors.email}
                      size="sm"
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
                </div>

                <motion.div variants={itemVariants}>
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="bordered"
                    color={validationErrors.password ? "danger" : "primary"}
                    startContent={
                      <Lock
                        className={isDark ? "text-gray-400" : "text-gray-500"}
                        size={16}
                      />
                    }
                    endContent={
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="focus:outline-none"
                      >
                        {isPasswordVisible ? (
                          <EyeOff
                            className={
                              isDark ? "text-gray-400" : "text-gray-500"
                            }
                            size={16}
                          />
                        ) : (
                          <Eye
                            className={
                              isDark ? "text-gray-400" : "text-gray-500"
                            }
                            size={16}
                          />
                        )}
                      </button>
                    }
                    isInvalid={!!validationErrors.password}
                    errorMessage={validationErrors.password}
                    size="sm"
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

                  {formData.password && (
                    <div className="mt-1">
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-xs ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {getStrengthLabel()}
                        </span>
                        <span
                          className={`text-xs ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {passwordStrength}%
                        </span>
                      </div>
                      <Progress
                        value={passwordStrength}
                        color={getStrengthColor()}
                        size="sm"
                        classNames={{
                          track: isDark ? "bg-gray-700" : "bg-gray-200",
                        }}
                      />
                    </div>
                  )}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <motion.div variants={itemVariants}>
                    <Input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      variant="bordered"
                      color={
                        validationErrors.confirmPassword ? "danger" : "primary"
                      }
                      startContent={
                        <Lock
                          className={isDark ? "text-gray-400" : "text-gray-500"}
                          size={16}
                        />
                      }
                      endContent={
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="focus:outline-none"
                        >
                          {isConfirmPasswordVisible ? (
                            <EyeOff
                              className={
                                isDark ? "text-gray-400" : "text-gray-500"
                              }
                              size={16}
                            />
                          ) : (
                            <Eye
                              className={
                                isDark ? "text-gray-400" : "text-gray-500"
                              }
                              size={16}
                            />
                          )}
                        </button>
                      }
                      isInvalid={!!validationErrors.confirmPassword}
                      errorMessage={validationErrors.confirmPassword}
                      size="sm"
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

                  <motion.div variants={itemVariants}>
                    <Select
                      label="I am a"
                      name="role"
                      value={formData.role}
                      onChange={(e) => handleSelectChange(e.target.value)}
                      variant="bordered"
                      color="primary"
                      size="sm"
                      startContent={
                        <Clipboard
                          className={isDark ? "text-gray-400" : "text-gray-500"}
                          size={16}
                        />
                      }
                      className="max-w-full"
                      classNames={{
                        label: isDark ? "text-gray-300" : "text-gray-600",
                        value: isDark ? "text-white" : "text-gray-900",
                        trigger: isDark
                          ? "bg-gray-700/50 backdrop-blur-md border-gray-600"
                          : "bg-gray-100/50 backdrop-blur-md border-gray-300",
                      }}
                    >
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    size="sm"
                    color={validationErrors.agreeToTerms ? "danger" : "primary"}
                    className={
                      validationErrors.agreeToTerms ? "text-danger" : ""
                    }
                    classNames={{
                      label: isDark ? "text-gray-300" : "text-gray-600",
                    }}
                  >
                    <span className="text-xs">
                      I agree to the{" "}
                      <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </Checkbox>
                  {validationErrors.agreeToTerms && (
                    <p className="text-danger text-xs mt-0.5">
                      {validationErrors.agreeToTerms}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="pt-1">
                  <Button
                    type="submit"
                    className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600`}
                    size="md"
                    endContent={<ArrowRight size={16} />}
                    isLoading={loading}
                    spinner={
                      <svg
                        className="animate-spin h-4 w-4 text-current"
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
                    Create Account
                  </Button>
                </motion.div>
              </motion.div>
            </form>

            <div className="relative my-3">
              <Divider className={isDark ? "bg-gray-700" : "bg-gray-200"} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`px-2 text-xs ${
                    isDark
                      ? "bg-gray-800 text-gray-300"
                      : "bg-white text-gray-500"
                  }`}
                >
                  or sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                className={`${
                  isDark
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                } font-medium`}
                startContent={<Github size={16} />}
                onClick={handleGithubSignIn}
                isLoading={loading}
                size="sm"
              >
                GitHub
              </Button>
              <Button
                className="bg-[#1DA1F2]/90 text-white font-medium"
                startContent={<Twitter size={16} />}
                onClick={handleTwitterSignIn}
                isLoading={loading}
                size="sm"
              >
                Twitter
              </Button>
            </div>

            <motion.div
              className="mt-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p
                className={`text-xs ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-500 font-semibold hover:text-blue-600"
                >
                  Sign In
                </Link>
              </p>
              <div
                className={`mt-2 text-xxs ${
                  isDark ? "text-gray-400" : "text-gray-500"
                } flex justify-center items-center text-[10px]`}
              >
                <span>Chirag-Punia</span>
                <span className="mx-1">•</span>
                <span>2025-03-05 22:07:37</span>
              </div>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
