import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDdBpJybKxKMaKmLhj6JprCIuL9QM8QMTA",
  authDomain: "garcia-sport.firebaseapp.com",
  projectId: "garcia-sport",
  storageBucket: "garcia-sport.appspot.com",
  messagingSenderId: "784506954089",
  appId: "1:784506954089:web:09234b20c4b200d8245df8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

 export const auth = getAuth(app);
 export default db;
