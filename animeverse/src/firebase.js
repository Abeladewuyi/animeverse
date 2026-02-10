import { initializeApp } from "firebase/app";

import { 
  getAuth,
  GoogleAuthProvider 
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfkaovj8LdyAwnzBOMwN8RcxKtk1Phb6g",
  authDomain: "animeverse-adc42.firebaseapp.com",
  projectId: "animeverse-adc42",
  storageBucket: "animeverse-adc42.firebasestorage.app",
  messagingSenderId: "313367572001",
  appId: "1:313367572001:web:929bad5fd803fd537c3d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 🔥 THIS IS NEW — DATABASE
export const db = getFirestore(app);