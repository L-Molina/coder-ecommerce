import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyANtqAkmjSYRxFW7EQoznu5qBExCHw7uyE",
  authDomain: "molina-ss.firebaseapp.com",
  projectId: "molina-s",
  storageBucket: "molina-s.appspot.com",
  messagingSenderId: "700621102267",
  appId: "1:700621102267:web:1208f01a5d0eca886cdd9e"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)