// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB13Rfq4Z-pFSfw-7K6lt-bQczH8dKeK7c",
  authDomain: "exam-81a86.firebaseapp.com",
  projectId: "exam-81a86",
  storageBucket: "exam-81a86.appspot.com",
  messagingSenderId: "451102088232",
  appId: "1:451102088232:web:4c388dc5c77979906ee91d",
  measurementId: "G-NQP2436EVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig