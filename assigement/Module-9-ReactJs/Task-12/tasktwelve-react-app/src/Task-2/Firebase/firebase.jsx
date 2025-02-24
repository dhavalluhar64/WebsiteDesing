import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1EI3gBh_-KzqAhhMVQjN2dyz0br1JJUo",
  authDomain: "demo1-387ed.firebaseapp.com",
  projectId: "demo1-387ed",
  storageBucket: "demo1-387ed.firebasestorage.app",
  messagingSenderId: "987713968572",
  appId: "1:987713968572:web:98bce795e393bc3e2cb3b9",
  measurementId: "G-PS83RCTZB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDB = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, fireDB, googleProvider, analytics };
