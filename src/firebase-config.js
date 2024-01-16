// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaHCKU6g0nDtnPruqe1TKJZ0NaMWPiWZo",
  authDomain: "blog-app-1ac68.firebaseapp.com",
  projectId: "blog-app-1ac68",
  storageBucket: "blog-app-1ac68.appspot.com",
  messagingSenderId: "259399770073",
  appId: "1:259399770073:web:a0f8db0029068d24ca03c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
