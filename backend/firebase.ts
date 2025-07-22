// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxq5MjwpAyt82T1REH5bRI6-9z9YGg2bc",
  authDomain: "smart-dental-booking.firebaseapp.com",
  projectId: "smart-dental-booking",
  storageBucket: "smart-dental-booking.firebasestorage.app",
  messagingSenderId: "763217718461",
  appId: "1:763217718461:web:9ff565f43e4c7360695bd4",
  measurementId: "G-GXY29NHKZE"
};

// Initialize Firebase (ป้องกันการ initialize ซ้ำ)
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// const analytics = getAnalytics(app);
const auth: Auth = getAuth(app);

export { auth, app }; 