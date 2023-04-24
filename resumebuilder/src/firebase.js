// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuGaG2edBQd1NyBtRsF7thxCAZxhAS72s",
  authDomain: "resume-builder-d2775.firebaseapp.com",
  projectId: "resume-builder-d2775",
  storageBucket: "resume-builder-d2775.appspot.com",
  messagingSenderId: "420685089487",
  appId: "1:420685089487:web:db27eeec57aa0320c885ba",
  measurementId: "G-D3VF83ZLX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const analytics = getAnalytics(app);