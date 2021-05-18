import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_uaScJiC_AfHW9PVCVikzZqwBGnJh21U",
  authDomain: "disney-clone-c5c3b.firebaseapp.com",
  projectId: "disney-clone-c5c3b",
  storageBucket: "disney-clone-c5c3b.appspot.com",
  messagingSenderId: "846893987484",
  appId: "1:846893987484:web:fa1ff6e125634f48565f59",
  measurementId: "G-R9EDTLSRFK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
