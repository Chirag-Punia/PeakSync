import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Card,
  CardBody,
  Avatar,
  Button,
  Progress,
  Chip,
} from "@nextui-org/react";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Apple,
  GraduationCap,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Activity,
  Map,
  Bell,
  Search,
} from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { useThemeStore } from "../store/themeStore";
import ThemeToggle from "../components/ThemeToggle";
import {
  StatCards,
  TrainingCards,
  PerformanceCard,
  HealthMetricsCard,
  AchievementsCard,
  TeamCard,
  Education,
  Career,
  Facilities,
  Community,
  Support,
  Nutrition,
} from "./DashboardCards";
import { auth } from "../services/firebaseConfig";
// Dashboard Components
const Analytics = () => {
  const { isDark } = useThemeStore();

  return (
    <div className="space-y-6">
      {/* Stat Cards (imported from DashboardCards) */}
      <StatCards />

      {/* Training & Activities */}
      <TrainingCards />

      {/* Performance & Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <PerformanceCard />
        <HealthMetricsCard />
      </div>

      {/* Additional Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AchievementsCard />
        <TeamCard />
      </div>
    </div>
  );
};

const Training = () => {
  const { isDark } = useThemeStore();

  return (
    <div className="space-y-6">
      <Card
        className={`bg-gradient-to-r from-blue-600 to-blue-800 border-none shadow-lg`}
      >
        <CardBody className="p-8">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-16 h-16 text-white" />
            </motion.div>
            <div>
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold text-white"
              >
                AI Training Assistant
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-blue-100 mt-2"
              >
                Get personalized training recommendations powered by AI
              </motion.p>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          className={`border-none ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-md`}
        >
          <CardBody className="p-6">
            <h3
              className={`text-xl font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Training Programs
            </h3>
            <div className="space-y-4">
              {["Strength Training", "Cardio Endurance", "Flexibility"].map(
                (program, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className={`p-4 border rounded-lg ${
                      isDark
                        ? "border-gray-700 hover:bg-gray-700/50"
                        : "border-gray-200 hover:bg-gray-50"
                    } transition-colors cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {program}
                      </h4>
                      <Button size="sm" color="primary">
                        Start
                      </Button>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </CardBody>
        </Card>

        <Card
          className={`border-none ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-md`}
        >
          <CardBody className="p-6">
            <h3
              className={`text-xl font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Progress Tracking
            </h3>
            <div className="space-y-4">
              {[
                { label: "Strength", value: 85 },
                { label: "Endurance", value: 70 },
                { label: "Speed", value: 90 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {stat.label}
                    </span>
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {stat.value}%
                    </span>
                  </div>
                  <Progress
                    value={stat.value}
                    color="primary"
                    className="h-2"
                    classNames={{
                      track: isDark ? "bg-gray-700" : "bg-gray-200",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const navItems = [
  { path: "", icon: BarChart3, label: "Analytics" },
  { path: "training", icon: Brain, label: "AI Training" },
  { path: "nutrition", icon: Apple, label: "Nutrition" },
  { path: "education", icon: GraduationCap, label: "Education" },
  { path: "career", icon: Activity, label: "Career" },
  { path: "facilities", icon: Map, label: "Facilities" },
  { path: "community", icon: Users, label: "Community" },
  { path: "complaints", icon: MessageSquare, label: "Support" },
];

export default function Dashboard() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const location = useLocation();
  const { isDark } = useThemeStore();
  const navigator = useNavigate();
  // Animation variants
  const sidebarVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const navItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Sidebar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        className={`w-64 ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } border-r`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              PeakSync
            </h1>
          </div>
        </div>

        <nav className="px-4 mt-6">
          {navItems.map((item) => (
            <motion.div key={item.path} variants={navItemVariants}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? isDark
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                      : isDark
                      ? "text-gray-300 hover:bg-gray-700/50"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Theme
            </span>
            <ThemeToggle />
          </div>
          <Button
            className={`w-full flex items-center gap-2 ${
              isDark
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onPress={() => {
              auth.signOut();
              localStorage.removeItem("token");
              navigator("/");
            }}
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
          <div className="mt-2 text-center">
            <p
              className={`text-xs ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Current Date: 2025-03-05 20:45:29
            </p>
            <p
              className={`text-xs ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              User: Chirag-Punia
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1">
        <header
          className={`${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } border-b`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-2xl font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {navItems.find((item) => location.pathname.endsWith(item.path))
                  ?.label || "Dashboard"}
              </motion.h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100 text-gray-900 border-gray-200"
                  }`}
                />
                <Search
                  className={`w-5 h-5 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  } absolute left-3 top-1/2 transform -translate-y-1/2`}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button isIconOnly variant="light" className="relative">
                <Bell
                  className={`w-5 h-5 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                size="sm"
              />
            </div>
          </div>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="" element={<Analytics />} />
            <Route path="training" element={<Training />} />

            <Route path="nutrition" element={<Nutrition />} />
            <Route path="education" element={<Education />} />

            <Route path="career" element={<Career />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="community" element={<Community />} />
            <Route path="complaints" element={<Support />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
