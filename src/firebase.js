
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaGU6bApmg97N7ZvSEw9I3ZPhOAtjfZfM",
  authDomain: "todosproject-81049.firebaseapp.com",
  projectId: "todosproject-81049",
  storageBucket: "todosproject-81049.firebasestorage.app",
  messagingSenderId: "845762327204",
  appId: "1:845762327204:web:1d88a7576c189841a9ec31",
  databaseURL: 'https://todosproject-81049-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)