// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD90B_YplRRAV4SCZf27u2GuO3ejynnxak",
  authDomain: "prince-web-fa404.firebaseapp.com",
  projectId: "prince-web-fa404",
  storageBucket: "prince-web-fa404.firebasestorage.app",
  messagingSenderId: "55490340376",
  appId: "1:55490340376:web:b0ed6c76a829f3a2e0c56d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
