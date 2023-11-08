// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA8XpdvnXVU1nkRKGu5YI2XzZrntthqwg",
  authDomain: "countries-api-kacper-d97ae.firebaseapp.com",
  projectId: "countries-api-kacper-d97ae",
  storageBucket: "countries-api-kacper-d97ae.appspot.com",
  messagingSenderId: "245995565858",
  appId: "1:245995565858:web:52fad4fdb367fae6e0ab7b",
  measurementId: "G-6G4MQYSMDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);