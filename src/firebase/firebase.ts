import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyDO8g4Xc6In7HN-npv3hkYqVQ3-4tNzUl4",
    authDomain: "crown-clothing-db2.firebaseapp.com",
    projectId: "crown-clothing-db2",
    storageBucket: "crown-clothing-db2.appspot.com",
    messagingSenderId: "208078408640",
    appId: "1:208078408640:web:6f2ca985369bd445ac5625"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
