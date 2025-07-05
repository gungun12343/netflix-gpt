// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj-8S7raDmzH9c3C80ypG2VHnIflYtsDM",
  authDomain: "netflixgpt-af406.firebaseapp.com",
  projectId: "netflixgpt-af406",
  storageBucket: "netflixgpt-af406.firebasestorage.app",
  messagingSenderId: "651775744352",
  appId: "1:651775744352:web:4e44128e7c097461f52605",
  measurementId: "G-RKL05P4XP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();