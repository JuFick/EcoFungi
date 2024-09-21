// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // chave de acesso na pasta .env que acessa por essa apiKey 
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meupetideal-f97b4.firebaseapp.com",
  projectId: "meupetideal-f97b4",
  storageBucket: "meupetideal-f97b4.appspot.com",
  messagingSenderId: "362569484322",
  appId: "1:362569484322:web:e4f81b81d294d332b2227b",
  measurementId: "G-YVRT2E96FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// importa o nome do db, se for o default não é necessário
export const db=getFirestore(app, 'default');
// const analytics = getAnalytics(app);