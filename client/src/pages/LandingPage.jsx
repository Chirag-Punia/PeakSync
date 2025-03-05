import React, { useEffect, useRef } from "react";
import { Button, Card } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Brain,
  BarChart,
  Shield,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    viewport={{ once: true }}
  >
    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-none bg-white">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 mb-4 bg-blue-50 rounded-full">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  </motion.div>
);

const features = [
  {
    icon: BarChart,
    title: "Performance Analytics",
    description:
      "Track and analyze your athletic progress with advanced metrics",
  },
  {
    icon: Brain,
    title: "Smart Training",
    description: "AI-powered training programs tailored to your goals",
  },
  {
    icon: Shield,
    title: "Health Monitoring",
    description: "Comprehensive health tracking and injury prevention",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Efficiently manage teams, schedules, and resources",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Olympic Swimmer",
    content:
      "PeakSync has revolutionized how I track my performance and training.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "Basketball Coach",
    content:
      "The team management features have streamlined our entire operation.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-2 bg-blue-600 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="ml-2 text-2xl font-bold text-gray-900">
                PeakSync
              </span>
            </motion.div>
            <div className="flex items-center gap-4">
              <Button
                variant="light"
                className="text-gray-900"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                className="bg-blue-600 text-white font-semibold"
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-blue-600/80 backdrop-blur-sm"></div>
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Elevate Your Athletic Journey
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Comprehensive athlete management platform for peak performance
            tracking, team coordination, and professional development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 font-semibold text-lg px-8"
              onClick={() => navigate("/register")}
              endContent={<ArrowRight className="ml-2" size={18} />}
            >
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-400/30 backdrop-blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-blue-500/20 backdrop-blur-xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Powerful Features for Athletes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to track, analyze, and improve your athletic
              performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section with Counter Animation */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "10,000+", label: "Athletes", icon: Users },
              { value: "98%", label: "Satisfaction", icon: Award },
              { value: "24/7", label: "Support", icon: Shield },
              { value: "150+", label: "Features", icon: Activity },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="p-3 bg-white/10 backdrop-blur rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <motion.h3
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center text-blue-600 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 border-none shadow-md bg-white">
                  <div className="flex items-start gap-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{testimonial.role}</p>
                      <p className="text-gray-800">{testimonial.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Athletic Performance?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of athletes who are already reaching new heights with
            PeakSync
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 font-semibold text-lg px-8"
              onClick={() => navigate("/register")}
              endContent={<ArrowRight className="ml-2" size={18} />}
            >
              Get Started for Free
            </Button>
          </motion.div>
        </div>
      </motion.div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 text-2xl font-bold">PeakSync</span>
              </div>
              <p className="text-gray-400 mb-4">
                Elevating athletic performance through data-driven insights and
                personalized training.
              </p>
              <div className="flex space-x-4">
                {["twitter", "facebook", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <i className={`fab fa-${social}`}></i>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
            {[
              {
                title: "Solutions",
                links: [
                  "Analytics",
                  "Team Management",
                  "Performance",
                  "Health Tracking",
                ],
              },
              {
                title: "Support",
                links: ["Pricing", "Documentation", "Guides", "API Status"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Jobs", "Partners"],
              },
            ].map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 PeakSync. All rights reserved. Current User:{" "}
              {window.userLogin || "Chirag-Punia"}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
