// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrkV59TKnrg2t_omOn2n0n9POBFenceZo",
  authDomain: "auth-integration-5d423.firebaseapp.com",
  projectId: "auth-integration-5d423",
  storageBucket: "auth-integration-5d423.firebasestorage.app",
  messagingSenderId: "1030017773603",
  appId: "1:1030017773603:web:d312cd63242829c9248196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);