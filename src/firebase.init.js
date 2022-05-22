// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuoCsxVTBs4YzOssOm7f17wOqkFxMLjE4",
  authDomain: "manufacturer-portal.firebaseapp.com",
  projectId: "manufacturer-portal",
  storageBucket: "manufacturer-portal.appspot.com",
  messagingSenderId: "903814980900",
  appId: "1:903814980900:web:933db14eb2a1a71db7bfb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;