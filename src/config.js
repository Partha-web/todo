// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt5nSNwBq3TjfHKXTVJEa3lP26dn2nrzo",
  authDomain: "todo-app-react-firebase-f0cfa.firebaseapp.com",
  projectId: "todo-app-react-firebase-f0cfa",
  storageBucket: "todo-app-react-firebase-f0cfa.appspot.com",
  messagingSenderId: "795990094325",
  appId: "1:795990094325:web:cd422912bc72dc171bb0bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)





const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};