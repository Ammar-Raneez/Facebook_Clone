import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
