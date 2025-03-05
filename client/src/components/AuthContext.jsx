import React, { createContext, useState, useEffect, useContext } from "react";
import { authService } from "../services/authService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set up auth state listener when the provider is mounted
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get additional user data from Firestore
          const userData = await authService.getUserData(user.uid);
          setCurrentUser({
            ...userData,
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
          });
        } catch (error) {
          console.error("Error getting user data:", error);
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            name: user.displayName || "User",
            role: "athlete",
          });
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  // Authentication methods
  const login = async (email, password) => {
    try {
      const user = await authService.login(email, password);
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const user = await authService.register(userData);
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setCurrentUser(null);
    } catch (error) {
      throw error;
    }
  };

  const googleSignIn = async () => {
    try {
      const user = await authService.signInWithGoogle();
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const githubSignIn = async () => {
    try {
      const user = await authService.signInWithGithub();
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const twitterSignIn = async () => {
    try {
      const user = await authService.signInWithTwitter();
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = async (email) => {
    return await authService.resetPassword(email);
  };

  const updateProfile = async (userData) => {
    try {
      const updatedUser = await authService.updateUserProfile(userData);
      setCurrentUser({ ...currentUser, ...updatedUser });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };

  const updateRole = async (role) => {
    try {
      const updatedUser = await authService.updateUserRole(role);
      setCurrentUser({ ...currentUser, role });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout,
    googleSignIn,
    githubSignIn,
    twitterSignIn,
    resetPassword,
    updateProfile,
    updateRole,
    isAuthenticated: !!currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
