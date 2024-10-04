
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqpNhXLwC1xcjVaAj43YWkJl6wSWNyBag",
  authDomain: "ku-cse-symposium-2024.firebaseapp.com",
  projectId: "ku-cse-symposium-2024",
  storageBucket: "ku-cse-symposium-2024.appspot.com",
  messagingSenderId: "961041040926",
  appId: "1:961041040926:web:c4cf039d14ccca752d100f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);