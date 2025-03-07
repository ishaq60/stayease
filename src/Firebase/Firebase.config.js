// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_ENVAa9oPZ-ATtumkbZAF69FHe7Pnio",
  authDomain: "stayease-f95fc.firebaseapp.com",
  projectId: "stayease-f95fc",
  storageBucket: "stayease-f95fc.firebasestorage.app",
  messagingSenderId: "753258719184",
  appId: "1:753258719184:web:c8416fdc35b50fe3817bd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app