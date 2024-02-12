// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-f50d9.firebaseapp.com",
  projectId: "mern-blog-f50d9",
  storageBucket: "mern-blog-f50d9.appspot.com",
  messagingSenderId: "640219629819",
  appId: "1:640219629819:web:4eb248ed090bf0652ac85e"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);