// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBztr5A9IQf7WTO9GGZ73S39bKUp-Sdu-w",
  authDomain: "personalportfolio-8904c.firebaseapp.com",
  projectId: "personalportfolio-8904c",
  storageBucket: "personalportfolio-8904c.appspot.com",
  messagingSenderId: "1027655698113",
  appId: "1:1027655698113:web:2e944d0a5224f33a547640",
  measurementId: "G-WXL0J0Z9N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);