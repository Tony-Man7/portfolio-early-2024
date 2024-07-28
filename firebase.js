// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM52bSYq9hzlakRgMjiLotPZSLX9UDh3w",
  authDomain: "portfolio-16c32.firebaseapp.com",
  projectId: "portfolio-16c32",
  storageBucket: "portfolio-16c32.appspot.com",
  messagingSenderId: "500899476698",
  appId: "1:500899476698:web:08343b640942388ef6e1e3",
  measurementId: "G-PG0NG8TEEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);