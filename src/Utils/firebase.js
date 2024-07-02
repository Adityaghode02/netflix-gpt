// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE64wcCOa2U39WWBHCxTJwkZHXPuAGQCc",
  authDomain: "netflix-gpt-7b333.firebaseapp.com",
  projectId: "netflix-gpt-7b333",
  storageBucket: "netflix-gpt-7b333.appspot.com",
  messagingSenderId: "111131825388",
  appId: "1:111131825388:web:1bce1dbc5dd04b9bde81c9",
  measurementId: "G-B7DX1P18V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export the auth object
export const auth = getAuth(app);
