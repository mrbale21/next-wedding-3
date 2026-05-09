import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
    "AIzaSyCARQxYMwfbRIhB9NvhqfUuaqM3oCiTA3g",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "wedding-project-24561.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "wedding-project-24561",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "wedding-project-24561.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "873670578072",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:873670578072:web:543dd9d7152f06d23225ed",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-JBJSKTPHFG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
