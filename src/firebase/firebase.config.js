// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCizMYLPkJAZZzm6orbdjOHaa30NFOiPM",
  authDomain: "mystery-maze.firebaseapp.com",
  projectId: "mystery-maze",
  storageBucket: "mystery-maze.appspot.com",
  messagingSenderId: "643423226167",
  appId: "1:643423226167:web:521f573c6168b90582f2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;