// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7dbbe.firebaseapp.com",
  projectId: "mern-estate-7dbbe",
  storageBucket: "mern-estate-7dbbe.appspot.com",
  messagingSenderId: "23632054039",
  appId: "1:23632054039:web:556aa2858714b2c6319952"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);