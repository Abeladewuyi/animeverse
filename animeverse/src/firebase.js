// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfkaovj8LdyAwnzBOMwN8RcxKtk1Phb6g",
  authDomain: "animeverse-adc42.firebaseapp.com",
  projectId: "animeverse-adc42",
  storageBucket: "animeverse-adc42.appspot.com",
  messagingSenderId: "313367572001",
  appId: "1:313367572001:web:929bad5fd803fd537c3d60",
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Auth instance (THIS IS WHAT WAS BREAKING)
export const auth = getAuth(app);

// 🔥 Google provider
export const googleProvider = new GoogleAuthProvider();
