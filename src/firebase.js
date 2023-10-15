import { GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrdBL5_jCxpzclTIuUOyh8K09v3wzUYlg",
  authDomain: "move-it-80d43.firebaseapp.com",
  projectId: "move-it-80d43",
  storageBucket: "move-it-80d43.appspot.com",
  messagingSenderId: "143684185705",
  appId: "1:143684185705:web:4914be39a6729a22c23cf8",
  measurementId: "G-TLHS41370K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//initialize google auth
const provider = new GoogleAuthProvider();