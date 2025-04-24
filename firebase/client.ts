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

// Verify environment variables
if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    console.error('FIREBASE_API_KEY is missing');
}
if (!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) {
    console.error('FIREBASE_AUTH_DOMAIN is missing');
}
if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    console.error('FIREBASE_PROJECT_ID is missing');
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
let app;
try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Firebase initialization error:', error);
    throw error;
}
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);