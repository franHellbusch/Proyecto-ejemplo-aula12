import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkBdVkoi6m5FVKl6Q7vQnR7RaZWG1gI1c",
  authDomain: "aula-12-9502f.firebaseapp.com",
  projectId: "aula-12-9502f",
  storageBucket: "aula-12-9502f.appspot.com",
  messagingSenderId: "322000037162",
  appId: "1:322000037162:web:57813acd7768d7add12a53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
