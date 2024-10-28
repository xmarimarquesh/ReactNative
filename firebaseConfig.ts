// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-w159IA8qohnI5VkdVG6Xg2s5gjGuoRk",
  authDomain: "react-native-aaae9.firebaseapp.com",
  projectId: "react-native-aaae9",
  storageBucket: "react-native-aaae9.appspot.com",
  messagingSenderId: "154625314107",
  appId: "1:154625314107:web:8547dd77f934fe86eb3b1e",
  measurementId: "G-G3EYVTQJCG"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);