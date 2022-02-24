// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPcdsl1ZHsLydE96BeWz0HRe7qAoNwSU",
  authDomain: "nike-clone-76ab5.firebaseapp.com",
  projectId: "nike-clone-76ab5",
  storageBucket: "nike-clone-76ab5.appspot.com",
  messagingSenderId: "95635735941",
  appId: "1:95635735941:web:6f63961684fecfc98e30ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();
export { app, db, storage };
