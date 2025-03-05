import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Log Firebase initialization for debugging
console.log("Initializing Firebase with config:", {
  apiKey: firebaseConfig.apiKey?.substring(0, 5) + "...", // Only log part of the API key for security
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
});

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Firebase initialization error:", error);
  throw error;
}

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Current UTC Date and Time
export const CURRENT_UTC_DATETIME = "2025-03-05 21:54:44";
export const CURRENT_USER_LOGIN = "Chirag-Punia";

export default app;
