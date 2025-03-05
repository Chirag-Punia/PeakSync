import { useThemeStore } from "../store/themeStore";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Chip,
  Progress,
  Button,
  Badge,
  Divider,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Calendar,
  Flame,
  Users,
  BarChart3,
  Activity,
  TrendingUp,
  Clock,
  Award,
  Heart,
  Trophy,
  Zap,
  Target,
  ChevronRight,
  GraduationCap,
  Book,
  Video,
  Briefcase,
  FileText,
  User,
  Map,
  MapPin,
  UserPlus,
  MessageCircle,
  MessageSquare,
  LifeBuoy,
  HelpCircle,
  CheckCircle,
  PieChart,
  Bell,
  Apple,
  Coffee,
  Utensils,
  Droplets,
  Check,
  Plus,
  AlertCircle,
  CalendarDays,
} from "lucide-react";

const currentDateTime = "2025-03-05 21:02:32";
const currentUser = "Chirag-Punia";
export const HealthMetricsCard = () => {
  const { isDark } = useThemeStore();

  return (
    <Card
      className={`border-none ${
        isDark ? "bg-gray-800" : "bg-white"
      } shadow-md mt-6`}
    >
      <CardBody className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-xl font-semibold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Health Metrics
          </h3>
          <Chip color="success" variant="flat">
            Good
          </Chip>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                isDark ? "bg-pink-400/20" : "bg-pink-100"
              }`}
            >
              <Heart
                className={`w-8 h-8 ${
                  isDark ? "text-pink-400" : "text-pink-500"
                }`}
              />
            </div>
            <div className="text-center">
              <p
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                68 BPM
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Resting Heart Rate
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                isDark ? "bg-blue-400/20" : "bg-blue-100"
              }`}
            >
              <Zap
                className={`w-8 h-8 ${
                  isDark ? "text-blue-400" : "text-blue-500"
                }`}
              />
            </div>
            <div className="text-center">
              <p
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                98%
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                O₂ Saturation
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                isDark ? "bg-green-400/20" : "bg-green-100"
              }`}
            >
              <Target
                className={`w-8 h-8 ${
                  isDark ? "text-green-400" : "text-green-500"
                }`}
              />
            </div>
            <div className="text-center">
              <p
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                7.5h
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Sleep Duration
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                isDark ? "bg-amber-400/20" : "bg-amber-100"
              }`}
            >
              <Flame
                className={`w-8 h-8 ${
                  isDark ? "text-amber-400" : "text-amber-500"
                }`}
              />
            </div>
            <div className="text-center">
              <p
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                2,450
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Daily Calories
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            className={`w-full ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"
            }`}
            variant="flat"
          >
            View Complete Health Report
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export const AchievementsCard = () => {
  const { isDark } = useThemeStore();

  const achievements = [
    { title: "Marathon Finisher", date: "Feb 21, 2025", icon: Trophy },
    { title: "Weight Goal Achieved", date: "Jan 15, 2025", icon: Target },
    { title: "Team Captain", date: "Dec 5, 2024", icon: Users },
  ];

  return (
    <Card
      className={`border-none ${
        isDark ? "bg-gray-800" : "bg-white"
      } shadow-md mt-6`}
    >
      <CardBody className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-xl font-semibold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Latest Achievements
          </h3>
          <Chip color="warning" variant="flat">
            {achievements.length} New
          </Chip>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={`flex items-center p-3 rounded-lg ${
                isDark ? "bg-gray-700/50" : "bg-gray-50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full ${
                  isDark ? "bg-amber-400/20" : "bg-amber-100"
                } flex items-center justify-center mr-4`}
              >
                <achievement.icon
                  className={`w-6 h-6 ${
                    isDark ? "text-amber-400" : "text-amber-500"
                  }`}
                />
              </div>
              <div className="flex-1">
                <h4
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {achievement.title}
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {achievement.date}
                </p>
              </div>
              <Button size="sm" isIconOnly variant="light">
                <ChevronRight
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                  size={18}
                />
              </Button>
            </motion.div>
          ))}
        </div>

        <Button className="w-full mt-4" color="primary" variant="flat">
          View All Achievements
        </Button>
      </CardBody>
    </Card>
  );
};

export const TeamCard = () => {
  const { isDark } = useThemeStore();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Team Leader",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      name: "Mike Chen",
      role: "Strength Coach",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      name: "Emma Watson",
      role: "Nutritionist",
      img: "https://i.pravatar.cc/150?u=a042581f4e29056704d",
    },
    {
      name: "John Smith",
      role: "Physio Therapist",
      img: "https://i.pravatar.cc/150?u=a04258114e29026704d",
    },
    {
      name: "Lisa Ray",
      role: "Assistant Coach",
      img: "https://i.pravatar.cc/150?u=a042581f5e29026704d",
    },
  ];

  return (
    <Card
      className={`border-none ${
        isDark ? "bg-gray-800" : "bg-white"
      } shadow-md mt-6`}
    >
      <CardBody className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-xl font-semibold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Your Team
          </h3>
        </div>

        <div className="space-y-3">
          {teamMembers.slice(0, 3).map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {member.name}
                </p>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.role}
                </p>
              </div>
              <Button size="sm" variant="flat" color="primary">
                Message
              </Button>
            </motion.div>
          ))}
        </div>

        <Button className="w-full mt-4" variant="flat" color="default">
          View All Team Members ({teamMembers.length})
        </Button>
      </CardBody>
    </Card>
  );
};

export const PerformanceCard = () => {
  const { isDark } = useThemeStore();

  const performanceData = [
    { label: "Strength", value: 85 },
    { label: "Endurance", value: 70 },
    { label: "Speed", value: 90 },
    { label: "Recovery", value: 65 },
  ];

  const currentUser = "Chirag-Punia";
  const currentDateTime = "2025-03-05 20:48:50";

  return (
    <Card
      className={`border-none ${isDark ? "bg-gray-800" : "bg-white"} shadow-md`}
    >
      <CardBody className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${
                isDark ? "bg-blue-500/20" : "bg-blue-100"
              }`}
            >
              <BarChart3
                className={`w-5 h-5 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Performance Analytics
            </h3>
          </div>
          <Button
            className={
              isDark ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
            }
            size="sm"
          >
            View Details
          </Button>
        </div>

        <div className="space-y-6">
          {performanceData.map((stat, i) => (
            <motion.div
              key={i}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="flex justify-between">
                <span
                  className={`font-medium ${
                    isDark ? "text-white" : "text-gray-700"
                  }`}
                >
                  {stat.label}
                </span>
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  {stat.value}%
                </span>
              </div>
              <Progress
                value={stat.value}
                color="primary"
                className="h-2"
                classNames={{
                  track: isDark ? "bg-gray-700" : "bg-gray-200",
                  indicator: isDark ? "bg-blue-400" : "bg-blue-500",
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>Last updated: {currentDateTime}</p>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>User: {currentUser}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export const StatCards = () => {
  const { isDark } = useThemeStore();

  const stats = [
    {
      title: "Total Workouts",
      value: 248,
      icon: Activity,
      progress: 75,
      fromColor: "from-blue-500",
      toColor: "to-blue-600",
      textColor: "text-blue-500",
    },
    {
      title: "Performance Score",
      value: 92.4,
      icon: TrendingUp,
      progress: 92,
      fromColor: "from-purple-500",
      toColor: "to-purple-600",
      textColor: "text-purple-500",
    },
    {
      title: "Training Hours",
      value: 164,
      icon: Clock,
      progress: 82,
      fromColor: "from-pink-500",
      toColor: "to-pink-600",
      textColor: "text-pink-500",
    },
    {
      title: "Achievements",
      value: 12,
      icon: Award,
      progress: 60,
      fromColor: "from-amber-500",
      toColor: "to-amber-600",
      textColor: "text-amber-500",
    },
  ];

  // Current date and time in UTC format
  const currentDateTime = "2025-03-05 20:50:01";
  const currentUser = "Chirag-Punia";

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-xl font-semibold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Performance Overview
        </h2>
        <div
          className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          Last updated: {currentDateTime} • {currentUser}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card
              className={`border-none shadow-md ${
                isDark
                  ? "bg-gradient-to-br " +
                    stat.fromColor +
                    " " +
                    stat.toColor +
                    "/90"
                  : "bg-gradient-to-br " + stat.fromColor + " " + stat.toColor
              }`}
            >
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`${
                        isDark ? "text-white/80" : "text-white/80"
                      }`}
                    >
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {stat.value}
                    </h3>
                  </div>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <Progress
                  value={stat.progress}
                  className="mt-4"
                  classNames={{
                    indicator: "bg-white",
                    track: "bg-white/20",
                  }}
                />
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const TrainingCards = () => {
  const { isDark } = useThemeStore();

  // Current UTC date and time
  const currentDateTime = "2025-03-05 20:51:10";
  const currentUser = "Chirag-Punia";

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-xl font-semibold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Training Overview
        </h2>
        <div
          className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          Last updated: {currentDateTime} • {currentUser}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              Upcoming Training
            </h3>
            <div className="space-y-4">
              {[
                "High Intensity Training",
                "Recovery Session",
                "Strength Building",
              ].map((session, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`flex items-center gap-4 p-3 rounded-lg ${
                    isDark ? "bg-gray-700/50" : "bg-gray-50"
                  }`}
                >
                  <Calendar
                    className={`w-10 h-10 ${
                      isDark ? "text-blue-400" : "text-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <h4
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {session}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Coach Mike • {2 + i}:00 PM
                    </p>
                  </div>
                  <Chip color="primary" variant="flat">
                    {i === 0 ? "Today" : i === 1 ? "Tomorrow" : "Friday"}
                  </Chip>
                </motion.div>
              ))}
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
              Recent Activities
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Completed Strength Training",
                  details: "45 minutes • 320 calories",
                  time: "2h ago",
                  icon: Activity,
                },
                {
                  title: "Nutrition Plan Updated",
                  details: "Added protein goals • By Coach Sarah",
                  time: "6h ago",
                  icon: Flame,
                },
                {
                  title: "Team Meeting",
                  details: "Strategy discussion • 8 attendees",
                  time: "1d ago",
                  icon: Users,
                },
              ].map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${
                      isDark ? "bg-blue-400/20" : "bg-blue-100"
                    } flex items-center justify-center`}
                  >
                    <activity.icon
                      className={`w-6 h-6 ${
                        isDark ? "text-blue-400" : "text-blue-500"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {activity.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {activity.details}
                    </p>
                  </div>
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {activity.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <div
        className={`text-center mt-4 text-xs ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        UTC Date: {currentDateTime}
      </div>
    </div>
  );
};

// Animation variants
var containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

var itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const Education = () => {
  const { isDark } = useThemeStore();

  const courses = [
    {
      title: "Sports Psychology Fundamentals",
      instructor: "Dr. Sarah Johnson",
      progress: 65,
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop",
      duration: "4 weeks",
      enrolled: "Feb 10, 2025",
    },
    {
      title: "Advanced Nutrition Science",
      instructor: "Prof. Michael Chen",
      progress: 42,
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop",
      duration: "6 weeks",
      enrolled: "Jan 22, 2025",
    },
    {
      title: "Injury Prevention & Recovery",
      instructor: "Dr. Lisa Williams",
      progress: 89,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
      duration: "3 weeks",
      enrolled: "Feb 28, 2025",
    },
  ];

  const resources = [
    {
      title: "Training Methodology Handbook",
      type: "PDF",
      icon: FileText,
      color: "text-red-500",
      bgColor: isDark ? "bg-red-500/20" : "bg-red-100",
    },
    {
      title: "Recovery Techniques Webinar",
      type: "Video",
      icon: Video,
      color: "text-blue-500",
      bgColor: isDark ? "bg-blue-500/20" : "bg-blue-100",
    },
    {
      title: "Sports Nutrition Guide",
      type: "eBook",
      icon: Book,
      color: "text-green-500",
      bgColor: isDark ? "bg-green-500/20" : "bg-green-100",
    },
  ];

  const certificates = [
    {
      name: "Advanced Performance Training",
      date: "Jan 15, 2025",
      status: "Completed",
    },
    {
      name: "Sports Nutrition Specialist",
      date: "Dec 10, 2024",
      status: "Completed",
    },
    {
      name: "Mental Performance Coaching",
      date: "In Progress",
      status: "In Progress",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none shadow-lg">
          <CardBody className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Education Portal
                </h2>
                <p className="text-blue-100 mt-2">
                  Enhance your knowledge with specialized courses and resources
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* My Courses */}
      <motion.div variants={itemVariants}>
        <Card
          className={`border-none ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-md`}
        >
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                My Courses
              </h3>
              <Button color="primary" size="sm">
                Browse All Courses
              </Button>
            </div>

            <div className="space-y-4">
              {courses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`flex gap-4 p-3 rounded-lg ${
                    isDark ? "bg-gray-700/50" : "bg-gray-50"
                  }`}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {course.title}
                        </h4>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {course.instructor} • {course.duration}
                        </p>
                      </div>
                      <Chip color="primary" variant="flat">
                        {course.progress}% Complete
                      </Chip>
                    </div>
                    <Progress
                      value={course.progress}
                      className="mt-2"
                      color={course.progress < 50 ? "warning" : "success"}
                      classNames={{
                        track: isDark ? "bg-gray-600" : "bg-gray-200",
                      }}
                    />
                    <div className="flex justify-between mt-1">
                      <span
                        className={`text-xs ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Enrolled: {course.enrolled}
                      </span>
                      <Button size="sm" variant="light" color="primary">
                        Continue
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resources */}
        <motion.div variants={itemVariants}>
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Learning Resources
              </h3>
              <div className="space-y-4">
                {resources.map((resource, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${resource.bgColor}`}
                    >
                      <resource.icon className={`w-6 h-6 ${resource.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {resource.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {resource.type} • Updated 3 days ago
                      </p>
                    </div>
                    <Button size="sm" variant="flat" color="primary">
                      Access
                    </Button>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4">
                <Button color="default" variant="flat" className="w-full">
                  View All Resources
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Certificates */}
        <motion.div variants={itemVariants}>
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                My Certifications
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className={`p-4 border rounded-lg flex items-center justify-between ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Award
                        className={`w-6 h-6 ${
                          isDark ? "text-blue-400" : "text-blue-500"
                        }`}
                      />
                      <div>
                        <h4
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {cert.name}
                        </h4>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {cert.date}
                        </p>
                      </div>
                    </div>
                    <Chip
                      color={
                        cert.status === "Completed" ? "success" : "warning"
                      }
                      variant="flat"
                    >
                      {cert.status}
                    </Chip>
                  </motion.div>
                ))}
              </div>
              <Button color="default" variant="flat" className="w-full mt-4">
                View All Certifications
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Last Updated: {currentDateTime} • {currentUser}
      </div>
    </motion.div>
  );
};

export const Career = () => {
  const { isDark } = useThemeStore();

  const careerStats = [
    {
      label: "Performance Rating",
      value: 92,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: isDark ? "bg-green-500/20" : "bg-green-100",
    },
    {
      label: "Goals Achieved",
      value: "7/10",
      icon: Activity,
      color: "text-blue-500",
      bgColor: isDark ? "bg-blue-500/20" : "bg-blue-100",
    },
    {
      label: "Skill Development",
      value: 85,
      icon: TrendingUp,
      color: "text-purple-500",
      bgColor: isDark ? "bg-purple-500/20" : "bg-purple-100",
    },
  ];

  const milestones = [
    {
      title: "National Championship",
      date: "Dec 10, 2024",
      description: "Secured 2nd position in national championships",
    },
    {
      title: "Elite Training Program",
      date: "Oct 15, 2024",
      description: "Selected for elite athlete training program",
    },
    {
      title: "Regional Competition",
      date: "Jul 22, 2024",
      description: "Won gold medal in regional championship",
    },
  ];

  const careerOpportunities = [
    {
      title: "Senior Team Selection",
      deadline: "Mar 15, 2025",
      status: "Eligible",
    },
    {
      title: "International Training Camp",
      deadline: "Apr 20, 2025",
      status: "Recommended",
    },
    { title: "Corporate Sponsorship", deadline: "Open", status: "Apply Now" },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 border-none shadow-lg">
          <CardBody className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Career Development
                </h2>
                <p className="text-blue-100 mt-2">
                  Track your professional progress and explore new opportunities
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Performance Stats */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerStats.map((stat, i) => (
            <Card
              key={i}
              className={`border-none ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-md`}
            >
              <CardBody className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bgColor}`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                    <h3
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {stat.value}
                    </h3>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Career Timeline */}
        <motion.div variants={itemVariants}>
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Career Milestones
              </h3>
              <div className="space-y-6 relative">
                <div
                  className={`absolute left-3 top-0 bottom-0 w-0.5 ${
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  }`}
                ></div>
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex gap-4 relative"
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${
                        isDark ? "bg-blue-600" : "bg-blue-500"
                      } flex-shrink-0 mt-1 z-10`}
                    ></div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {milestone.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        } font-medium`}
                      >
                        {milestone.date}
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button className="w-full mt-6" color="primary" variant="flat">
                View Complete Career Path
              </Button>
            </CardBody>
          </Card>
        </motion.div>

        {/* Opportunities */}
        <motion.div variants={itemVariants}>
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Career Opportunities
              </h3>
              <div className="space-y-4">
                {careerOpportunities.map((opportunity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className={`p-4 border rounded-lg ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {opportunity.title}
                      </h4>
                      <Chip
                        color={
                          opportunity.status === "Apply Now"
                            ? "success"
                            : opportunity.status === "Recommended"
                            ? "warning"
                            : "primary"
                        }
                        variant="flat"
                      >
                        {opportunity.status}
                      </Chip>
                    </div>
                    <p
                      className={`text-sm mt-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Deadline: {opportunity.deadline}
                    </p>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" color="primary">
                        {opportunity.status === "Apply Now" ? "Apply" : "View"}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button className="w-full mt-4" color="default" variant="flat">
                Browse All Opportunities
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
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
              Career Development Plan
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card
                className={`border ${
                  isDark
                    ? "border-gray-700 bg-gray-700/50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <CardBody className="p-4 text-center">
                  <Calendar
                    className={`w-8 h-8 mx-auto mb-2 ${
                      isDark ? "text-blue-400" : "text-blue-500"
                    }`}
                  />
                  <h5
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Short-term Goals
                  </h5>
                  <p
                    className={`text-sm mt-1 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    3 month planning
                  </p>
                  <Button size="sm" className="mt-3" color="primary">
                    Update
                  </Button>
                </CardBody>
              </Card>
              <Card
                className={`border ${
                  isDark
                    ? "border-gray-700 bg-gray-700/50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <CardBody className="p-4 text-center">
                  <Award
                    className={`w-8 h-8 mx-auto mb-2 ${
                      isDark ? "text-blue-400" : "text-blue-500"
                    }`}
                  />
                  <h5
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Mid-term Goals
                  </h5>
                  <p
                    className={`text-sm mt-1 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    1 year planning
                  </p>
                  <Button size="sm" className="mt-3" color="primary">
                    Update
                  </Button>
                </CardBody>
              </Card>
              <Card
                className={`border ${
                  isDark
                    ? "border-gray-700 bg-gray-700/50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <CardBody className="p-4 text-center">
                  <TrendingUp
                    className={`w-8 h-8 mx-auto mb-2 ${
                      isDark ? "text-blue-400" : "text-blue-500"
                    }`}
                  />
                  <h5
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Long-term Goals
                  </h5>
                  <p
                    className={`text-sm mt-1 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    5 year planning
                  </p>
                  <Button size="sm" className="mt-3" color="primary">
                    Update
                  </Button>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Last Updated: 2025-03-05 21:04:33 • User: Chirag-Punia
      </div>
    </motion.div>
  );
};

export const Facilities = () => {
  const { isDark } = useThemeStore();

  const facilities = [
    {
      name: "Main Training Center",
      location: "123 Sports Ave, New York",
      status: "Open",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
      hours: "5:00 AM - 10:00 PM",
      amenities: [
        "Indoor Track",
        "Weight Room",
        "Recovery Center",
        "Medical Facilities",
      ],
    },
    {
      name: "Downtown Fitness Hub",
      location: "456 Downtown Blvd, New York",
      status: "Open",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop",
      hours: "6:00 AM - 9:00 PM",
      amenities: ["CrossFit Area", "Cardio Zone", "Yoga Studio"],
    },
    {
      name: "Olympic Training Pool",
      location: "789 Aquatics Way, New York",
      status: "Maintenance",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop",
      hours: "Closed for maintenance until March 10",
      amenities: [
        "Olympic Pool",
        "Diving Platforms",
        "Recovery Pools",
        "Saunas",
      ],
    },
  ];

  const bookings = [
    {
      facility: "Main Training Center",
      space: "Weight Room",
      date: "Today",
      time: "3:00 PM - 5:00 PM",
      status: "Confirmed",
    },
    {
      facility: "Downtown Fitness Hub",
      space: "Yoga Studio",
      date: "Tomorrow",
      time: "9:00 AM - 10:00 AM",
      status: "Pending",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-none shadow-lg">
          <CardBody className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Map className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Training Facilities
                </h2>
                <p className="text-blue-100 mt-2">
                  Explore and book our world-class training facilities
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Facilities List */}
      <motion.div variants={itemVariants}>
        <Card
          className={`border-none ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-md`}
        >
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Available Facilities
              </h3>
              <div className="flex gap-2">
                <Button color="primary" size="sm">
                  Book Facility
                </Button>
                <Button variant="flat" size="sm">
                  View Map
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {facilities.map((facility, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`border rounded-lg overflow-hidden ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-6 md:w-2/3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4
                            className={`text-xl font-semibold ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {facility.name}
                          </h4>
                          <p
                            className={`flex items-center mt-1 text-sm ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            <MapPin className="w-4 h-4 mr-1" />{" "}
                            {facility.location}
                          </p>
                        </div>
                        <Chip
                          color={
                            facility.status === "Open" ? "success" : "warning"
                          }
                          variant="flat"
                        >
                          {facility.status}
                        </Chip>
                      </div>

                      <div
                        className={`mt-3 flex items-center text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <Clock className="w-4 h-4 mr-1" /> {facility.hours}
                      </div>

                      <div className="mt-4">
                        <h5
                          className={`text-sm font-medium mb-2 ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          Amenities:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {facility.amenities.map((amenity, j) => (
                            <Chip
                              key={j}
                              size="sm"
                              variant="flat"
                              color="primary"
                              className="text-xs"
                            >
                              {amenity}
                            </Chip>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end mt-4">
                        <Button size="sm" color="primary">
                          {facility.status === "Open"
                            ? "Book Now"
                            : "View Details"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Bookings and Availability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Bookings */}
        <motion.div variants={itemVariants}>
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                My Bookings
              </h3>
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`p-4 border rounded-lg ${
                        isDark ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4
                            className={`font-semibold ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {booking.facility}
                          </h4>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {booking.space}
                          </p>
                        </div>
                        <Chip
                          color={
                            booking.status === "Confirmed"
                              ? "success"
                              : "warning"
                          }
                          variant="flat"
                        >
                          {booking.status}
                        </Chip>
                      </div>
                      <div
                        className={`mt-2 text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <p>
                          {booking.date} • {booking.time}
                        </p>
                      </div>
                      <div className="flex justify-end gap-2 mt-2">
                        <Button size="sm" variant="flat" color="default">
                          Reschedule
                        </Button>
                        <Button size="sm" color={isDark ? "danger" : "error"}>
                          Cancel
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div
                  className={`text-center p-6 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Calendar className="w-12 h-12 mx-auto mb-2" />
                  <p>No bookings found.</p>
                  <p className="text-sm">
                    You don't have any active facility bookings.
                  </p>
                </div>
              )}
              <Button className="w-full mt-4" color="primary">
                New Booking
              </Button>
            </CardBody>
          </Card>
        </motion.div>

        {/* Facility Availability */}
        <motion.div variants={itemVariants}>
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Today's Availability
              </h3>
              <div className="space-y-4">
                <div
                  className={`p-4 border rounded-lg ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <h4
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Main Training Center
                  </h4>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <Badge content="80%" color="warning">
                      <div
                        className={`p-2 text-center rounded border ${
                          isDark
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <p className="text-xs">Morning</p>
                        <p className="text-sm font-semibold">5AM-12PM</p>
                      </div>
                    </Badge>
                    <Badge content="45%" color="success">
                      <div
                        className={`p-2 text-center rounded border ${
                          isDark
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <p className="text-xs">Afternoon</p>
                        <p className="text-sm font-semibold">12PM-5PM</p>
                      </div>
                    </Badge>
                    <Badge content="65%" color="primary">
                      <div
                        className={`p-2 text-center rounded border ${
                          isDark
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <p className="text-xs">Evening</p>
                        <p className="text-sm font-semibold">5PM-10PM</p>
                      </div>
                    </Badge>
                  </div>
                </div>

                <div
                  className={`p-4 border rounded-lg ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <h4
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Downtown Fitness Hub
                  </h4>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <Badge content="35%" color="success">
                      <div
                        className={`p-2 text-center rounded border ${
                          isDark
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <p className="text-xs">Morning</p>
                        <p className="text-sm font-semibold">6AM-12PM</p>
                      </div>
                    </Badge>
                    <Badge content="60%" color="primary">
                      <div
                        className={`p-2 text-center rounded border ${
                          isDark
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <p className="text-xs">Afternoon</p>
                        <p className="text-sm font-semibold">12PM-5PM</p>
                      </div>
                    </Badge>
                    <Badge content="90%" color="danger">
                      <div
                        className={`p-2 text-center rounded border ${
                          isDark
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <p className="text-xs">Evening</p>
                        <p className="text-sm font-semibold">5PM-9PM</p>
                      </div>
                    </Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4" variant="flat" color="primary">
                View Full Schedule
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Last Updated: 2025-03-05 21:06:44 • User: Chirag-Punia
      </div>
    </motion.div>
  );
};

export const Community = () => {
  const { isDark } = useThemeStore();

  const teammates = [
    {
      name: "Sarah Johnson",
      role: "Team Captain",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      status: "Online",
    },
    {
      name: "Mike Chen",
      role: "Senior Athlete",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      status: "Offline",
    },
    {
      name: "Emma Watson",
      role: "New Team Member",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29056704d",
      status: "Training",
    },
    {
      name: "John Smith",
      role: "Junior Athlete",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026704d",
      status: "Online",
    },
  ];

  const upcomingEvents = [
    {
      title: "Team Building Workshop",
      date: "Mar 10, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Main Training Center",
    },
    {
      title: "Monthly Team Meeting",
      date: "Mar 15, 2025",
      time: "10:00 AM - 11:30 AM",
      location: "Conference Room B",
    },
    {
      title: "Community Outreach Event",
      date: "Mar 20, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "City Park",
    },
  ];

  const discussions = [
    {
      title: "Training Schedule Changes",
      author: "Coach Williams",
      replies: 12,
      lastActivity: "2h ago",
    },
    {
      title: "Nutrition Plan Feedback",
      author: "Sarah Johnson",
      replies: 8,
      lastActivity: "5h ago",
    },
    {
      title: "Equipment Recommendations",
      author: "Mike Chen",
      replies: 15,
      lastActivity: "1d ago",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-none shadow-lg">
          <CardBody className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Team Community
                </h2>
                <p className="text-blue-100 mt-2">
                  Connect, collaborate, and grow with your team
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Members */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Team Members
                </h3>
                <Button size="sm" color="primary" variant="flat">
                  <UserPlus size={16} className="mr-1" /> Add
                </Button>
              </div>
              <div className="space-y-4">
                {teammates.map((teammate, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Badge
                        content=""
                        color={
                          teammate.status === "Online"
                            ? "success"
                            : teammate.status === "Training"
                            ? "warning"
                            : "default"
                        }
                        placement="bottom-right"
                      ></Badge>
                      <div>
                        <h4
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {teammate.name}
                        </h4>
                        <p
                          className={`text-xs ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {teammate.role}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="light">
                      <MessageCircle size={16} />
                    </Button>
                  </motion.div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="flat">
                View All Team Members
              </Button>
            </CardBody>
          </Card>
        </motion.div>

        {/* Events & Discussions */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <div className="space-y-6">
            {/* Upcoming Events */}
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
                  Upcoming Team Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`p-4 border rounded-lg ${
                        isDark ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4
                            className={`font-semibold ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {event.title}
                          </h4>
                          <p
                            className={`text-sm ${
                              isDark ? "text-blue-400" : "text-blue-600"
                            } font-medium`}
                          >
                            {event.date} • {event.time}
                          </p>
                          <p
                            className={`text-sm mt-1 ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {event.location}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" color="success" variant="flat">
                            Going
                          </Button>
                          <Button size="sm" variant="flat">
                            Maybe
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button className="w-full mt-4" color="primary">
                  View All Events
                </Button>
              </CardBody>
            </Card>

            {/* Team Discussions */}
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
                  Recent Discussions
                </h3>
                <div className="space-y-4">
                  {discussions.map((discussion, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`p-4 border rounded-lg ${
                        isDark ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div className="flex justify-between">
                        <div>
                          <h4
                            className={`font-semibold ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {discussion.title}
                          </h4>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            Started by {discussion.author} •{" "}
                            {discussion.lastActivity}
                          </p>
                        </div>
                        <Chip variant="flat" color="primary">
                          {discussion.replies} replies
                        </Chip>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <Button size="sm" color="primary">
                          <MessageSquare size={16} className="mr-1" /> Join
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button className="w-full mt-4" color="primary" variant="flat">
                  Start New Discussion
                </Button>
              </CardBody>
            </Card>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
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
              Team Announcements
            </h3>
            <div
              className={`p-5 rounded-lg ${
                isDark
                  ? "bg-blue-900/30 border border-blue-800"
                  : "bg-blue-50 border border-blue-100"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    isDark ? "bg-blue-600" : "bg-blue-500"
                  }`}
                >
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Schedule Change: Morning Practice Times
                  </h4>
                  <p
                    className={`mt-1 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Starting next week, all morning practice sessions will begin
                    at 6:30 AM instead of 7:00 AM. This change will allow us to
                    have additional time for specialized training drills.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Posted by Coach Williams • March 3, 2025
                    </div>
                    <Button size="sm" variant="flat" color="primary">
                      Acknowledge
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Button color="default" variant="flat">
                View All Announcements
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Last Updated: 2025-03-05 21:09:10 • User: Chirag-Punia
      </div>
    </motion.div>
  );
};

export const Support = () => {
  const { isDark } = useThemeStore();

  const supportTickets = [
    {
      id: "TICKET-2358",
      title: "Equipment Request",
      status: "Open",
      priority: "Medium",
      created: "2025-03-03",
      updated: "2025-03-04",
    },
    {
      id: "TICKET-2351",
      title: "Locker Room Issue",
      status: "In Progress",
      priority: "High",
      created: "2025-03-02",
      updated: "2025-03-05",
    },
    {
      id: "TICKET-2346",
      title: "Schedule Conflict",
      status: "Resolved",
      priority: "Low",
      created: "2025-02-28",
      updated: "2025-03-01",
    },
  ];

  const faqCategories = [
    { name: "Training", icon: Activity, count: 15 },
    { name: "Equipment", icon: Briefcase, count: 12 },
    { name: "Scheduling", icon: Calendar, count: 8 },
    { name: "Facilities", icon: Map, count: 11 },
  ];

  const quickActions = [
    {
      name: "Report Issue",
      icon: LifeBuoy,
      color: "text-red-500",
      bgColor: isDark ? "bg-red-500/20" : "bg-red-100",
    },
    {
      name: "Request Equipment",
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: isDark ? "bg-blue-500/20" : "bg-blue-100",
    },
    {
      name: "Contact Coach",
      icon: User,
      color: "text-green-500",
      bgColor: isDark ? "bg-green-500/20" : "bg-green-100",
    },
    {
      name: "View FAQ",
      icon: HelpCircle,
      color: "text-purple-500",
      bgColor: isDark ? "bg-purple-500/20" : "bg-purple-100",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-blue-600 to-pink-600 border-none shadow-lg">
          <CardBody className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <MessageSquare className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Support Center
                </h2>
                <p className="text-blue-100 mt-2">
                  Get help, submit requests, and find answers to common
                  questions
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, i) => (
            <Card
              key={i}
              isPressable
              className={`border-none ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-md`}
            >
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${action.bgColor}`}
                >
                  <action.icon className={`w-7 h-7 ${action.color}`} />
                </div>
                <h4
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {action.name}
                </h4>
              </CardBody>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Support Tickets */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  My Support Tickets
                </h3>
                <Button color="primary" size="sm">
                  Create New Ticket
                </Button>
              </div>
              {supportTickets.length > 0 ? (
                <div className="space-y-4">
                  {supportTickets.map((ticket, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`p-4 border rounded-lg ${
                        isDark ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <p
                              className={`text-sm mr-2 ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {ticket.id}
                            </p>
                            <h4
                              className={`font-semibold ${
                                isDark ? "text-white" : "text-gray-800"
                              }`}
                            >
                              {ticket.title}
                            </h4>
                          </div>
                          <p
                            className={`text-sm mt-1 ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            Created: {ticket.created} • Last update:{" "}
                            {ticket.updated}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Chip
                            color={
                              ticket.status === "Open"
                                ? "warning"
                                : ticket.status === "In Progress"
                                ? "primary"
                                : "success"
                            }
                            variant="flat"
                          >
                            {ticket.status}
                          </Chip>
                          <Chip
                            color={
                              ticket.priority === "High"
                                ? "danger"
                                : ticket.priority === "Medium"
                                ? "warning"
                                : "default"
                            }
                            variant="dot"
                            size="sm"
                          >
                            {ticket.priority}
                          </Chip>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Button size="sm" variant="flat">
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div
                  className={`text-center p-6 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <CheckCircle className="w-12 h-12 mx-auto mb-2" />
                  <p>No active tickets</p>
                  <p className="text-sm">
                    You don't have any open support tickets.
                  </p>
                </div>
              )}
              <Button className="w-full mt-4" color="default" variant="flat">
                View All Tickets
              </Button>
            </CardBody>
          </Card>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <Card
            className={`border-none ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md h-full`}
          >
            <CardBody className="p-6">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqCategories.map((category, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors ${
                      isDark ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <category.icon
                        className={`w-5 h-5 mr-3 ${
                          isDark ? "text-blue-400" : "text-blue-500"
                        }`}
                      />
                      <p
                        className={`font-medium ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {category.name}
                      </p>
                    </div>
                    <Chip size="sm" variant="flat">
                      {category.count} articles
                    </Chip>
                  </motion.div>
                ))}
              </div>
              <div
                className={`mt-4 p-4 rounded-lg ${
                  isDark ? "bg-gray-700/50" : "bg-gray-50"
                }`}
              >
                <h4
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Can't find what you need?
                </h4>
                <p
                  className={`text-sm mt-1 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Our support team is ready to assist you with any questions or
                  issues.
                </p>
                <Button className="w-full mt-3" color="primary">
                  Contact Support
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Knowledge Base */}
      <motion.div variants={itemVariants}>
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
              Knowledge Base
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded-lg ${
                  isDark ? "bg-gray-700/50" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isDark ? "bg-blue-400/20" : "bg-blue-100"
                    }`}
                  >
                    <Book
                      className={`w-5 h-5 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <h4
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Getting Started
                  </h4>
                </div>
                <p
                  className={`text-sm mb-3 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Learn about team policies, training basics, and how to use our
                  facilities.
                </p>
                <Button
                  size="sm"
                  variant="flat"
                  color="primary"
                  className="w-full"
                >
                  View Articles
                </Button>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  isDark ? "bg-gray-700/50" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isDark ? "bg-green-400/20" : "bg-green-100"
                    }`}
                  >
                    <Activity
                      className={`w-5 h-5 ${
                        isDark ? "text-green-400" : "text-green-600"
                      }`}
                    />
                  </div>
                  <h4
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Training Guides
                  </h4>
                </div>
                <p
                  className={`text-sm mb-3 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Access detailed training protocols and recommended workout
                  routines.
                </p>
                <Button
                  size="sm"
                  variant="flat"
                  color="primary"
                  className="w-full"
                >
                  View Articles
                </Button>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  isDark ? "bg-gray-700/50" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isDark ? "bg-purple-400/20" : "bg-purple-100"
                    }`}
                  >
                    <PieChart
                      className={`w-5 h-5 ${
                        isDark ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                  </div>
                  <h4
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Performance Analysis
                  </h4>
                </div>
                <p
                  className={`text-sm mb-3 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Understand how we track and analyze your performance metrics.
                </p>
                <Button
                  size="sm"
                  variant="flat"
                  color="primary"
                  className="w-full"
                >
                  View Articles
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Last Updated: 2025-03-05 21:11:05 • User: Chirag-Punia
      </div>
    </motion.div>
  );
};

// Animation variants
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const Nutrition = () => {
  const { isDark } = useThemeStore();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample nutrition data
  const nutritionOverview = {
    dailyCalories: {
      consumed: 1850,
      target: 2400,
      percentage: 77,
    },
    macros: {
      protein: { consumed: 95, target: 120, unit: "g", percentage: 79 },
      carbs: { consumed: 210, target: 280, unit: "g", percentage: 75 },
      fat: { consumed: 55, target: 80, unit: "g", percentage: 69 },
    },
    water: {
      consumed: 1.8,
      target: 3.0,
      unit: "L",
      percentage: 60,
    },
    meals: [
      {
        name: "Breakfast",
        time: "7:30 AM",
        calories: 450,
        items: ["Oatmeal with berries", "Greek yogurt", "Black coffee"],
        protein: 22,
        carbs: 65,
        fat: 10,
      },
      {
        name: "Pre-Workout Snack",
        time: "10:15 AM",
        calories: 180,
        items: ["Banana", "Protein shake"],
        protein: 25,
        carbs: 30,
        fat: 2,
      },
      {
        name: "Lunch",
        time: "1:00 PM",
        calories: 620,
        items: [
          "Chicken breast",
          "Brown rice",
          "Mixed vegetables",
          "Olive oil",
        ],
        protein: 40,
        carbs: 65,
        fat: 18,
      },
      {
        name: "Afternoon Snack",
        time: "4:30 PM",
        calories: 150,
        items: ["Apple", "Almonds"],
        protein: 5,
        carbs: 20,
        fat: 7,
      },
      {
        name: "Dinner",
        time: "7:45 PM",
        calories: 450,
        items: ["Salmon", "Quinoa", "Asparagus", "Lemon dressing"],
        protein: 35,
        carbs: 30,
        fat: 20,
      },
    ],
  };

  const nutritionPlans = [
    {
      name: "Standard Training Diet",
      description: "Balanced nutrition for regular training days",
      calories: 2400,
      protein: 120,
      carbs: 280,
      fat: 80,
      isActive: true,
    },
    {
      name: "Competition Preparation",
      description: "Higher protein, moderate carb diet for competition prep",
      calories: 2200,
      protein: 150,
      carbs: 200,
      fat: 65,
      isActive: false,
    },
    {
      name: "Recovery Focus",
      description: "Increased carbs and protein for optimal recovery",
      calories: 2600,
      protein: 130,
      carbs: 340,
      fat: 70,
      isActive: false,
    },
  ];

  const supplements = [
    {
      name: "Whey Protein",
      timing: "Post-workout",
      dosage: "25g",
      status: "Recommended",
    },
    {
      name: "Creatine Monohydrate",
      timing: "Daily",
      dosage: "5g",
      status: "Recommended",
    },
    {
      name: "Multivitamin",
      timing: "Morning",
      dosage: "1 tablet",
      status: "Required",
    },
    {
      name: "Branch Chain Amino Acids",
      timing: "During workout",
      dosage: "10g",
      status: "Optional",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-none shadow-lg">
          <CardBody className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Apple className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Nutrition Center
                </h2>
                <p className="text-green-100 mt-2">
                  Track your diet, plan meals, and optimize your performance
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div variants={itemVariants}>
        <Tabs
          selectedKey={activeTab}
          onSelectionChange={setActiveTab}
          variant="underlined"
          classNames={{
            tabList: `gap-6 ${isDark ? "border-gray-700" : "border-gray-200"}`,
            cursor: "bg-primary",
            tab: `px-2 h-10 ${isDark ? "text-white" : "text-gray-800"}`,
          }}
        >
          <Tab key="overview" title="Daily Overview" />
          <Tab key="plans" title="Nutrition Plans" />
          <Tab key="supplements" title="Supplements" />
          <Tab key="history" title="History" />
        </Tabs>
      </motion.div>

      {activeTab === "overview" && (
        <>
          {/* Nutrition Summary */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card
                className={`border-none ${
                  isDark ? "bg-gray-800" : "bg-white"
                } shadow-md`}
              >
                <CardBody className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                        isDark ? "bg-green-500/20" : "bg-green-100"
                      }`}
                    >
                      <Flame
                        className={`w-8 h-8 ${
                          isDark ? "text-green-400" : "text-green-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {nutritionOverview.dailyCalories.consumed}
                    </h3>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Calories
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      of {nutritionOverview.dailyCalories.target} Target
                    </p>
                    <Progress
                      value={nutritionOverview.dailyCalories.percentage}
                      className="mt-2 h-2 w-full"
                      color="success"
                      classNames={{
                        track: isDark ? "bg-gray-700" : "bg-gray-200",
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <Card
                className={`border-none ${
                  isDark ? "bg-gray-800" : "bg-white"
                } shadow-md`}
              >
                <CardBody className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                        isDark ? "bg-blue-500/20" : "bg-blue-100"
                      }`}
                    >
                      <Droplets
                        className={`w-8 h-8 ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {nutritionOverview.water.consumed}{" "}
                      {nutritionOverview.water.unit}
                    </h3>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Water
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      of {nutritionOverview.water.target}{" "}
                      {nutritionOverview.water.unit} Target
                    </p>
                    <Progress
                      value={nutritionOverview.water.percentage}
                      className="mt-2 h-2 w-full"
                      color="primary"
                      classNames={{
                        track: isDark ? "bg-gray-700" : "bg-gray-200",
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <Card
                className={`border-none ${
                  isDark ? "bg-gray-800" : "bg-white"
                } shadow-md`}
              >
                <CardBody className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                        isDark ? "bg-purple-500/20" : "bg-purple-100"
                      }`}
                    >
                      <Utensils
                        className={`w-8 h-8 ${
                          isDark ? "text-purple-400" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      5
                    </h3>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Meals Today
                    </p>
                    <div className="flex justify-center mt-3">
                      <Button size="sm" color="secondary">
                        Add Meal
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card
                className={`border-none ${
                  isDark ? "bg-gray-800" : "bg-white"
                } shadow-md`}
              >
                <CardBody className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                        isDark ? "bg-amber-500/20" : "bg-amber-100"
                      }`}
                    >
                      <Heart
                        className={`w-8 h-8 ${
                          isDark ? "text-amber-400" : "text-amber-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Good
                    </h3>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Overall Health
                    </p>
                    <div className="flex justify-center mt-3">
                      <Button size="sm" variant="flat" color="warning">
                        Details
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Macronutrient Breakdown */}
            <motion.div variants={itemVariants}>
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
                    Macronutrient Breakdown
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(nutritionOverview.macros).map(
                      ([key, macro], i) => (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <span
                                className={`font-semibold ${
                                  isDark ? "text-white" : "text-gray-800"
                                }`}
                              >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </span>
                              <span
                                className={`ml-2 text-sm ${
                                  isDark ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                ({macro.consumed}/{macro.target} {macro.unit})
                              </span>
                            </div>
                            <span
                              className={
                                isDark ? "text-gray-300" : "text-gray-600"
                              }
                            >
                              {macro.percentage}%
                            </span>
                          </div>
                          <Progress
                            value={macro.percentage}
                            color={
                              key === "protein"
                                ? "secondary"
                                : key === "carbs"
                                ? "primary"
                                : "warning"
                            }
                            className="h-2"
                            classNames={{
                              track: isDark ? "bg-gray-700" : "bg-gray-200",
                            }}
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <PieChart
                          className={`w-5 h-5 mr-2 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          Macro Ratio
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          content="P"
                          color="secondary"
                          size="sm"
                          className="min-w-6"
                        >
                          <div className="w-8 h-3 bg-purple-500 rounded-full"></div>
                        </Badge>
                        <Badge
                          content="C"
                          color="primary"
                          size="sm"
                          className="min-w-6"
                        >
                          <div className="w-8 h-3 bg-blue-500 rounded-full"></div>
                        </Badge>
                        <Badge
                          content="F"
                          color="warning"
                          size="sm"
                          className="min-w-6"
                        >
                          <div className="w-8 h-3 bg-amber-500 rounded-full"></div>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Today's Meals */}
            <motion.div variants={itemVariants}>
              <Card
                className={`border-none ${
                  isDark ? "bg-gray-800" : "bg-white"
                } shadow-md`}
              >
                <CardBody className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3
                      className={`text-xl font-semibold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Today's Meals
                    </h3>
                    <Button color="success" size="sm">
                      <Plus size={16} className="mr-1" /> Log Meal
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {nutritionOverview.meals.map((meal, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.1 }}
                        className={`p-4 border rounded-lg ${
                          isDark ? "border-gray-700" : "border-gray-200"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center">
                              <h4
                                className={`font-semibold ${
                                  isDark ? "text-white" : "text-gray-800"
                                }`}
                              >
                                {meal.name}
                              </h4>
                              <span
                                className={`ml-2 text-xs px-2 py-0.5 rounded ${
                                  isDark
                                    ? "bg-gray-700 text-gray-300"
                                    : "bg-gray-200 text-gray-600"
                                }`}
                              >
                                {meal.time}
                              </span>
                            </div>
                            <p
                              className={`text-sm mt-1 ${
                                isDark ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {meal.items.join(", ")}
                            </p>
                          </div>
                          <Chip color="success" variant="flat">
                            {meal.calories} kcal
                          </Chip>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <Chip size="sm" variant="flat" color="secondary">
                            P: {meal.protein}g
                          </Chip>
                          <Chip size="sm" variant="flat" color="primary">
                            C: {meal.carbs}g
                          </Chip>
                          <Chip size="sm" variant="flat" color="warning">
                            F: {meal.fat}g
                          </Chip>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Recommendations */}
          <motion.div variants={itemVariants}>
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
                  Nutritionist Recommendations
                </h3>
                <div
                  className={`p-4 rounded-lg ${
                    isDark
                      ? "bg-green-900/30 border border-green-800"
                      : "bg-green-50 border border-green-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full flex-shrink-0 ${
                        isDark ? "bg-green-500/30" : "bg-green-100"
                      }`}
                    >
                      <AlertCircle
                        className={`w-6 h-6 ${
                          isDark ? "text-green-300" : "text-green-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Increase Protein Intake
                      </h4>
                      <p
                        className={`mt-1 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Based on your recent training intensity, consider
                        increasing your daily protein intake by 15-20g to
                        support muscle recovery. Good options include adding an
                        extra protein shake or increasing portion sizes of lean
                        meats at meals.
                      </p>
                      <div className="mt-3 flex items-center">
                        <div
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Rec. by Dietitian Sarah • March 4, 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Pre-Workout Nutrition
                      </h4>
                      <Check
                        className={`w-5 h-5 ${
                          isDark ? "text-green-400" : "text-green-500"
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-1 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Your current pre-workout nutrition is well optimized.
                      Continue with the current approach.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h4
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Post-Workout Recovery
                      </h4>
                      <AlertCircle
                        className={`w-5 h-5 ${
                          isDark ? "text-amber-400" : "text-amber-500"
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-1 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Consider adding more carbohydrates to your post-workout
                      meal to replenish glycogen stores.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </>
      )}

      {activeTab === "plans" && (
        <>
          {/* Nutrition Plans */}
          <motion.div variants={itemVariants}>
            <Card
              className={`border-none ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-md`}
            >
              <CardBody className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    My Nutrition Plans
                  </h3>
                  <Button color="primary" size="sm">
                    <Plus size={16} className="mr-1" /> Create Plan
                  </Button>
                </div>

                <div className="space-y-6">
                  {nutritionPlans.map((plan, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`p-4 border rounded-lg ${
                        plan.isActive
                          ? isDark
                            ? "border-green-600 bg-green-900/20"
                            : "border-green-500 bg-green-50"
                          : isDark
                          ? "border-gray-700"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4
                              className={`font-semibold ${
                                isDark ? "text-white" : "text-gray-800"
                              }`}
                            >
                              {plan.name}
                            </h4>
                            {plan.isActive && (
                              <Chip size="sm" color="success">
                                Active
                              </Chip>
                            )}
                          </div>
                          <p
                            className={`text-sm mt-1 ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {plan.description}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="flat"
                          color={plan.isActive ? "success" : "primary"}
                        >
                          {plan.isActive ? "Edit" : "Activate"}
                        </Button>
                      </div>

                      <div className="mt-4 grid grid-cols-4 gap-2">
                        <div
                          className={`p-2 text-center rounded ${
                            isDark ? "bg-gray-700/70" : "bg-gray-100"
                          }`}
                        >
                          <p
                            className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Calories
                          </p>
                          <p
                            className={`font-semibold ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {plan.calories}
                          </p>
                        </div>
                        <div
                          className={`p-2 text-center rounded ${
                            isDark ? "bg-purple-900/30" : "bg-purple-50"
                          }`}
                        >
                          <p
                            className={`text-xs ${
                              isDark ? "text-purple-300" : "text-purple-600"
                            }`}
                          >
                            Protein
                          </p>
                          <p
                            className={`font-semibold ${
                              isDark ? "text-purple-200" : "text-purple-700"
                            }`}
                          >
                            {plan.protein}g
                          </p>
                        </div>
                        <div
                          className={`p-2 text-center rounded ${
                            isDark ? "bg-blue-900/30" : "bg-blue-50"
                          }`}
                        >
                          <p
                            className={`text-xs ${
                              isDark ? "text-blue-300" : "text-blue-600"
                            }`}
                          >
                            Carbs
                          </p>
                          <p
                            className={`font-semibold ${
                              isDark ? "text-blue-200" : "text-blue-700"
                            }`}
                          >
                            {plan.carbs}g
                          </p>
                        </div>
                        <div
                          className={`p-2 text-center rounded ${
                            isDark ? "bg-amber-900/30" : "bg-amber-50"
                          }`}
                        >
                          <p
                            className={`text-xs ${
                              isDark ? "text-amber-300" : "text-amber-600"
                            }`}
                          >
                            Fat
                          </p>
                          <p
                            className={`font-semibold ${
                              isDark ? "text-amber-200" : "text-amber-700"
                            }`}
                          >
                            {plan.fat}g
                          </p>
                        </div>
                      </div>

                      <div
                        className={`mt-4 pt-3 border-t ${
                          isDark ? "border-gray-700" : "border-gray-200"
                        } flex justify-between items-center`}
                      >
                        <span
                          className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Last updated: Mar 1, 2025
                        </span>
                        <Button size="sm" variant="light">
                          View Details <ChevronRight size={16} />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </>
      )}

      {activeTab === "supplements" && (
        <>
          {/* Supplements */}
          <motion.div variants={itemVariants}>
            <Card
              className={`border-none ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-md`}
            >
              <CardBody className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Supplement Recommendations
                  </h3>
                  <Button color="primary" size="sm">
                    Manage Supplements
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table
                    className={`w-full table-auto ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <thead
                      className={isDark ? "text-gray-200" : "text-gray-700"}
                    >
                      <tr
                        className={`border-b ${
                          isDark ? "border-gray-700" : "border-gray-200"
                        }`}
                      >
                        <th className="text-left py-3 font-semibold">
                          Supplement
                        </th>
                        <th className="text-left py-3 font-semibold">Timing</th>
                        <th className="text-left py-3 font-semibold">Dosage</th>
                        <th className="text-left py-3 font-semibold">Status</th>
                        <th className="text-right py-3 font-semibold">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplements.map((supplement, i) => (
                        <motion.tr
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className={`border-b ${
                            isDark ? "border-gray-700" : "border-gray-200"
                          }`}
                        >
                          <td
                            className={`py-4 font-medium ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {supplement.name}
                          </td>
                          <td className="py-4">{supplement.timing}</td>
                          <td className="py-4">{supplement.dosage}</td>
                          <td className="py-4">
                            <Chip
                              color={
                                supplement.status === "Required"
                                  ? "danger"
                                  : supplement.status === "Recommended"
                                  ? "warning"
                                  : "primary"
                              }
                              variant="flat"
                              size="sm"
                            >
                              {supplement.status}
                            </Chip>
                          </td>
                          <td className="py-4 text-right">
                            <Button size="sm" variant="light" color="primary">
                              Details
                            </Button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-700/50" : "bg-gray-50"
                    }`}
                  >
                    <h4
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Important Notes
                    </h4>
                    <ul
                      className={`mt-2 space-y-2 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      } list-disc pl-5`}
                    >
                      <li>
                        All supplements should be approved by team dietitian and
                        medical staff
                      </li>
                      <li>
                        Report any adverse reactions immediately to medical
                        staff
                      </li>
                      <li>
                        Regular blood work will be scheduled to monitor effects
                        of supplementation
                      </li>
                      <li>
                        Do not take any additional supplements without prior
                        approval
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Supplement Schedule */}
          <motion.div variants={itemVariants} className="mt-6">
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
                  Daily Supplement Schedule
                </h3>
                <div className="space-y-3">
                  <div
                    className={`p-3 rounded-lg border ${
                      isDark
                        ? "border-gray-700 bg-gray-700/30"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-md ${
                            isDark ? "bg-amber-900/30" : "bg-amber-50"
                          }`}
                        >
                          <Coffee
                            className={`w-5 h-5 ${
                              isDark ? "text-amber-400" : "text-amber-600"
                            }`}
                          />
                        </div>
                        <div className="ml-3">
                          <h5
                            className={`font-medium ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            Morning
                          </h5>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            With breakfast
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="sm" variant="flat" color="primary">
                          Track
                        </Button>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="flex flex-wrap gap-2">
                      <Chip size="sm">Multivitamin (1 tablet)</Chip>
                      <Chip size="sm">Vitamin D (2000 IU)</Chip>
                      <Chip size="sm">Omega-3 (1000mg)</Chip>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-lg border ${
                      isDark
                        ? "border-gray-700 bg-gray-700/30"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-md ${
                            isDark ? "bg-green-900/30" : "bg-green-50"
                          }`}
                        >
                          <Activity
                            className={`w-5 h-5 ${
                              isDark ? "text-green-400" : "text-green-600"
                            }`}
                          />
                        </div>
                        <div className="ml-3">
                          <h5
                            className={`font-medium ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            Training
                          </h5>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            During workout
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="sm" variant="flat" color="primary">
                          Track
                        </Button>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="flex flex-wrap gap-2">
                      <Chip size="sm">BCAA (10g)</Chip>
                      <Chip size="sm">Electrolytes (1 serving)</Chip>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-lg border ${
                      isDark
                        ? "border-gray-700 bg-gray-700/30"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-md ${
                            isDark ? "bg-blue-900/30" : "bg-blue-50"
                          }`}
                        >
                          <Clock
                            className={`w-5 h-5 ${
                              isDark ? "text-blue-400" : "text-blue-600"
                            }`}
                          />
                        </div>
                        <div className="ml-3">
                          <h5
                            className={`font-medium ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            Evening
                          </h5>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            Before bed
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="sm" variant="flat" color="primary">
                          Track
                        </Button>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="flex flex-wrap gap-2">
                      <Chip size="sm">Casein Protein (25g)</Chip>
                      <Chip size="sm">ZMA (1 serving)</Chip>
                      <Chip size="sm">Magnesium (200mg)</Chip>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </>
      )}

      {activeTab === "history" && (
        <>
          {/* Nutrition History */}
          <motion.div variants={itemVariants}>
            <Card
              className={`border-none ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-md`}
            >
              <CardBody className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Nutrition History
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="flat" color="primary" size="sm">
                      <CalendarDays size={16} className="mr-1" /> Select Date
                    </Button>
                    <Button variant="flat" color="primary" size="sm">
                      <BarChart3 size={16} className="mr-1" /> Export Data
                    </Button>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-700/50" : "bg-gray-50"
                  } mb-6`}
                >
                  <h4
                    className={`font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Average Daily Intake (Last 7 Days)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Calories
                      </p>
                      <p
                        className={`text-xl font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        2,240
                      </p>
                    </div>
                    <div className="text-center">
                      <p
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Protein
                      </p>
                      <p
                        className={`text-xl font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        115g
                      </p>
                    </div>
                    <div className="text-center">
                      <p
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Carbs
                      </p>
                      <p
                        className={`text-xl font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        258g
                      </p>
                    </div>
                    <div className="text-center">
                      <p
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Fat
                      </p>
                      <p
                        className={`text-xl font-semibold ${
                          isDark ? "text-white" : "text-gray-800"
                        }`}
                      >
                        62g
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((day, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`border rounded-lg ${
                        isDark ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <div
                        className={`p-3 border-b ${
                          isDark
                            ? "border-gray-700 bg-gray-700/30"
                            : "border-gray-200 bg-gray-50"
                        } flex justify-between items-center`}
                      >
                        <h5
                          className={`font-medium ${
                            isDark ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {i === 0
                            ? "Today"
                            : i === 1
                            ? "Yesterday"
                            : `March ${5 - i}, 2025`}
                        </h5>
                        <div className="flex gap-2">
                          <Chip
                            size="sm"
                            variant="flat"
                            color={i < 3 ? "success" : "warning"}
                          >
                            {i < 3 ? "On Target" : "Below Target"}
                          </Chip>
                          <Button size="sm" variant="light" color="primary">
                            Details
                          </Button>
                        </div>
                      </div>
                      <div className="p-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                        <div>
                          <p
                            className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Calories
                          </p>
                          <p
                            className={`${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {2300 - i * 100}
                          </p>
                        </div>
                        <div>
                          <p
                            className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Protein
                          </p>
                          <p
                            className={`${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {120 - i * 5}g
                          </p>
                        </div>
                        <div>
                          <p
                            className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Carbs
                          </p>
                          <p
                            className={`${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {270 - i * 15}g
                          </p>
                        </div>
                        <div>
                          <p
                            className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Fat
                          </p>
                          <p
                            className={`${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {65 - i * 3}g
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button className="w-full mt-4" variant="flat" color="primary">
                  View Full History
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        </>
      )}

      {/* Footer with current date/time and user info */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Last Updated: 2025-03-05 21:29:47 • User: Chirag-Punia
      </div>
    </motion.div>
  );
};
