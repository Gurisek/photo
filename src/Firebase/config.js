import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAM2ZhWQc3GfGwqayTSvnqhhvuLNsymb4",
  authDomain: "photo-tery.firebaseapp.com",
  projectId: "photo-tery",
  storageBucket: "photo-tery.appspot.com",
  messagingSenderId: "821298270295",
  appId: "1:821298270295:web:a6301497f6303c62bcd312",
  measurementId: "G-3FQ50GSGFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);
