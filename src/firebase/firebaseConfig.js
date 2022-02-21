
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvP6zL43DoMNxYXf-PJtJS8She8ivIFpA",
  authDomain: "block-master-825a1.firebaseapp.com",
  projectId: "block-master-825a1",
  storageBucket: "block-master-825a1.appspot.com",
  messagingSenderId: "588371307924",
  appId: "1:588371307924:web:2c1fd6b3c665c25b743381"
};



const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export { 
    app,
    google,
    db
}