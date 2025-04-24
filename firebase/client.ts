// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Debug logging
console.log('Firebase Environment Variables:', {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Present' : 'Missing',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'Present' : 'Missing',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'Present' : 'Missing',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? 'Present' : 'Missing',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? 'Present' : 'Missing',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'Present' : 'Missing',
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ? 'Present' : 'Missing'
});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSwDAIgQoUHnaYtbppN_ssPGydlIfizQg",
    authDomain: "miniproject-d3356.firebaseapp.com",
    projectId: "miniproject-d3356",
    storageBucket: "miniproject-d3356.firebasestorage.app",
    messagingSenderId: "853599854464",
    appId: "1:853599854464:web:417335506664eef89f2b65",
    measurementId: "G-ZKP57FFHTY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);