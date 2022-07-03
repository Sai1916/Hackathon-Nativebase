// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArP4fDLjOGLHgMs68P4Y-KBfApiWjulrU",
  authDomain: "disney-plus-clone-rn.firebaseapp.com",
  projectId: "disney-plus-clone-rn",
  storageBucket: "disney-plus-clone-rn.appspot.com",
  messagingSenderId: "929164930894",
  appId: "1:929164930894:web:aa147c1f33b2690642b81f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { firebase,db,auth,provider };