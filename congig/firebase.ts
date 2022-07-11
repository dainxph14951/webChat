// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6QAdOjDWpwE_ufXEv-8DHVMBxaIx0PSI",
  authDomain: "whatsapp-17c54.firebaseapp.com",
  projectId: "whatsapp-17c54",
  storageBucket: "whatsapp-17c54.appspot.com",
  messagingSenderId: "254335395115",
  appId: "1:254335395115:web:af0286dfb0181df340516e"
};

// Initialize Firebase
const app = getApps().length ? getApps() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth =   getAuth(app)

const provider = new GoogleAuthProvider()

export {db, auth, provider}