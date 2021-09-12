import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ou-ffG9bJuz0xk_mh82UjlQpj44ZhuE",
  authDomain: "disney-plus-website.firebaseapp.com",
  projectId: "disney-plus-website",
  storageBucket: "disney-plus-website.appspot.com",
  messagingSenderId: "529879474208",
  appId: "1:529879474208:web:605d8acd9fac0fd2989c45",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Get a list of movies from your database
export default db;
