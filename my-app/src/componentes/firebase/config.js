
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBvChJ-VxvhCMFrufYjXlzbuSs1Ys4rDU8",
  authDomain: "my-app-1f2d3.firebaseapp.com",
  projectId: "my-app-1f2d3",
  storageBucket: "my-app-1f2d3.appspot.com",
  messagingSenderId: "423108660735",
  appId: "1:423108660735:web:b5ec7a2af38463042d6bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
