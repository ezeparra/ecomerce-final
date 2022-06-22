import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyDdBpJybKxKMaKmLhj6JprCIuL9QM8QMTA",
    authDomain: "garcia-sport.firebaseapp.com",
    projectId: "garcia-sport",
    storageBucket: "garcia-sport.appspot.com",
    messagingSenderId: "784506954089",
    appId: "1:784506954089:web:09234b20c4b200d8245df8"
  };

  const firebaseApp = firebase.initialApp(firebaseConfig)

  const auth = firebase.auth();

  export {auth};