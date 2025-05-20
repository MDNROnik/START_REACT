// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCydbyVCEteWh9ADixNkrFRznxYcxyDRN0",
  authDomain: "online-newspaper-7ef9a.firebaseapp.com",
  projectId: "online-newspaper-7ef9a",
  storageBucket: "online-newspaper-7ef9a.firebasestorage.app",
  messagingSenderId: "1078063875153",
  appId: "1:1078063875153:web:ee2510e402bfe131666470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;