// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN4XJPynDPbqTkN_FblcNgThYRG6nJc5M",
  authDomain: "kutacuwine-1f95a.firebaseapp.com",
  projectId: "kutacuwine-1f95a",
  storageBucket: "kutacuwine-1f95a.appspot.com",
  messagingSenderId: "162645348174",
  appId: "1:162645348174:web:14d5255c84342e43f1d81f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);