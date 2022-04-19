import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBsqCN-CAzb-3K_MLHMMmVXiOrFwqYHhuM",
  authDomain: "disneyplus-clone-94dc4.firebaseapp.com",
  projectId: "disneyplus-clone-94dc4",
  storageBucket: "disneyplus-clone-94dc4.appspot.com",
  messagingSenderId: "997449185796",
  appId: "1:997449185796:web:00ed071b8281a83b3d9351",
  measurementId: "G-6H593YQSWW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };

export default db;