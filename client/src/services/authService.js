import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence,
} from "firebase/firestore";
import {
  auth,
  db,
  CURRENT_UTC_DATETIME,
  CURRENT_USER_LOGIN,
} from "./firebaseConfig";

// Enable offline persistence for Firestore
try {
  enableIndexedDbPersistence(db)
    .then(() => {
      console.log("Firestore persistence enabled");
    })
    .catch((error) => {
      console.error("Firestore persistence error:", error.code, error.message);
      if (error.code === "failed-precondition") {
        console.warn(
          "Multiple tabs open. Persistence enabled in first tab only."
        );
      } else if (error.code === "unimplemented") {
        console.warn("Browser doesn't support indexed DB persistence.");
      }
    });
} catch (error) {
  console.error("Error enabling Firestore persistence:", error);
}

const handleFirestoreError = (error, fallbackData = {}) => {
  console.error("Firestore operation error:", error.code, error.message);

  // Return fallback data if provided
  if (Object.keys(fallbackData).length > 0) {
    console.log("Using fallback data:", fallbackData);
    return fallbackData;
  }

  // Re-throw the error for the caller to handle
  throw error;
};

// Create a user document safely
const createUserDocument = async (uid, userData) => {
  try {
    const userDocRef = doc(db, "users", uid);
    await setDoc(userDocRef, {
      name: userData.name || userData.email?.split("@")[0] || "User",
      email: userData.email,
      role: userData.role || "athlete",
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      lastLoginUTC: CURRENT_UTC_DATETIME,
      userLogin: CURRENT_USER_LOGIN,
      photoURL: userData.photoURL || null,
    });
    console.log("User document created successfully:", uid);
    return true;
  } catch (error) {
    console.error("Error creating user document:", error);
    return false;
  }
};

export const authService = {
  // Register a new user
  register: async (userData) => {
    console.log("Registering new user:", userData.email);
    try {
      // Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log("User created in Firebase Auth:", userCredential.user.uid);

      // Update the user profile with display name
      await updateProfile(userCredential.user, {
        displayName: userData.name,
      });
      console.log("User profile updated with name:", userData.name);

      // Create user document in Firestore
      const docCreated = await createUserDocument(
        userCredential.user.uid,
        userData
      );
      if (!docCreated) {
        console.warn("User document not created, but auth succeeded");
      }

      // Get ID token for local storage
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);

      // Store user data for app state
      const userToStore = {
        uid: userCredential.user.uid,
        name: userData.name,
        email: userCredential.user.email,
        role: userData.role || "athlete",
        emailVerified: userCredential.user.emailVerified,
      };
      localStorage.setItem("user", JSON.stringify(userToStore));

      return userToStore;
    } catch (error) {
      console.error("Registration error:", error.code, error.message);
      throw error;
    }
  },

  // Login existing user
  login: async (email, password) => {
    console.log("Logging in user:", email);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user.uid);

      // Try to update last login time in Firestore
      try {
        const userDocRef = doc(db, "users", userCredential.user.uid);
        await updateDoc(userDocRef, {
          lastLogin: serverTimestamp(),
          lastLoginUTC: CURRENT_UTC_DATETIME,
        });
        console.log("User last login updated");
      } catch (firestoreError) {
        console.warn(
          "Failed to update last login, creating user document instead"
        );
        // If document doesn't exist, create it
        await createUserDocument(userCredential.user.uid, {
          email: userCredential.user.email,
          name: userCredential.user.displayName || email.split("@")[0],
        });
      }

      // Get user data from Firestore or use auth data if Firestore fails
      let userData = {};
      try {
        const userDocRef = doc(db, "users", userCredential.user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          userData = userDoc.data();
          console.log("User document retrieved successfully");
        }
      } catch (firestoreError) {
        console.warn("Failed to get user document:", firestoreError);
      }

      // Get ID token for local storage
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);

      // Store user data for app state
      const userToStore = {
        uid: userCredential.user.uid,
        name:
          userCredential.user.displayName ||
          userData.name ||
          email.split("@")[0],
        email: userCredential.user.email,
        role: userData.role || "athlete",
        emailVerified: userCredential.user.emailVerified,
        photoURL: userCredential.user.photoURL || userData.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userToStore));

      return userToStore;
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      throw error;
    }
  },

  // Sign out user
  logout: async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      // Even if logout fails, clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      throw error;
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent to:", email);
      return { success: true, message: "Password reset email sent" };
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
  },

  // Sign in with Google
  signInWithGoogle: async () => {
    console.log("Attempting Google sign-in");
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", userCredential.user.uid);

      // Try to create or update user document
      await createUserDocument(userCredential.user.uid, {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
      });

      // Get ID token for local storage
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);

      // Try to get user data from Firestore, or use fallback
      let userData = {};
      try {
        const userDocRef = doc(db, "users", userCredential.user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          userData = userDoc.data();
        }
      } catch (firestoreError) {
        console.warn("Failed to get user document:", firestoreError);
      }

      // Store user data for app state
      const userToStore = {
        uid: userCredential.user.uid,
        name: userCredential.user.displayName || "User",
        email: userCredential.user.email,
        role: userData.role || "athlete",
        emailVerified: userCredential.user.emailVerified,
        photoURL: userCredential.user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userToStore));

      return userToStore;
    } catch (error) {
      console.error("Google sign in error:", error);
      throw error;
    }
  },

  // Other auth methods would follow the same pattern with error handling...

  // Get current authenticated user
  getCurrentUser: () => {
    console.log("Getting current user");
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        unsubscribe();
        if (user) {
          console.log("Current user found:", user.uid);
          // Try to get user data from Firestore, but don't fail if it doesn't work
          try {
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
              const userData = userDoc.data();
              resolve({
                uid: user.uid,
                name: user.displayName || userData.name || "User",
                email: user.email,
                role: userData.role || "athlete",
                emailVerified: user.emailVerified,
                photoURL: user.photoURL || userData.photoURL,
              });
            } else {
              // If document doesn't exist, return basic user data
              resolve({
                uid: user.uid,
                name: user.displayName || "User",
                email: user.email,
                role: "athlete",
                emailVerified: user.emailVerified,
                photoURL: user.photoURL,
              });
            }
          } catch (error) {
            console.warn("Error getting user data from Firestore:", error);
            // Return basic user info from auth
            resolve({
              uid: user.uid,
              name: user.displayName || "User",
              email: user.email,
              role: "athlete",
              emailVerified: user.emailVerified,
              photoURL: user.photoURL,
            });
          }
        } else {
          console.log("No current user found");
          resolve(null);
        }
      });
    });
  },

  // Check if user is logged in
  isAuthenticated: () => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    return !!user && !!token;
  },
};

export default authService;
