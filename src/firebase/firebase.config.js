// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUSszYJfsPXEVOY4ar0ntnZojWHrQenlo",
  authDomain: "event-management-ec9ec.firebaseapp.com",
  projectId: "event-management-ec9ec",
  storageBucket: "event-management-ec9ec.appspot.com",
  messagingSenderId: "187287003734",
  appId: "1:187287003734:web:8e446e2197f9e68ced51f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;