// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);