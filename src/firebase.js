// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV9mNMJksMiQ54Oeex4mi9lQrOYFx7uUA",
  authDomain: "login-authentication-oasis.firebaseapp.com",
  databaseURL: "https://login-authentication-oasis-default-rtdb.firebaseio.com",
  projectId: "login-authentication-oasis",
  storageBucket: "login-authentication-oasis.appspot.com",
  messagingSenderId: "714725956918",
  appId: "1:714725956918:web:cdfd7937787458dabe2797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth} 