// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCto3Z-Go4bRYwJ2H8_R_nucMAqoapHszk",
  authDomain: "project-website-29.firebaseapp.com",
  projectId: "project-website-29",
  storageBucket: "project-website-29.appspot.com",
  messagingSenderId: "151566934926",
  appId: "1:151566934926:web:f579b738234169eca1fadf",
  measurementId: "G-LY20RRSJSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);