// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVy88BMc2eSgKAC0OEImHx8yaYZ99RR1I",
  authDomain: "smartclass-f16da.firebaseapp.com",
  projectId: "smartclass-f16da",
  storageBucket: "smartclass-f16da.firebasestorage.app",
  messagingSenderId: "124896757557",
  appId: "1:124896757557:web:733a34fa65989e44a96e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use elsewhere
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);