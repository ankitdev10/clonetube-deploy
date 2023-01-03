import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "clonetube-6b327.firebaseapp.com",
  projectId: "clonetube-6b327",
  storageBucket: "clonetube-6b327.appspot.com",
  messagingSenderId: "372247509332",
  appId: "1:372247509332:web:3f5d6248920fd2b11930c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app