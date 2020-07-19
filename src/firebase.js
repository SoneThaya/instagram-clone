
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUX_BqKBKgl8ooMK-3M0oM2z27KwKJtuQ",
  authDomain: "instragram-clone-16ffc.firebaseapp.com",
  databaseURL: "https://instragram-clone-16ffc.firebaseio.com",
  projectId: "instragram-clone-16ffc",
  storageBucket: "instragram-clone-16ffc.appspot.com",
  messagingSenderId: "768885741869",
  appId: "1:768885741869:web:cf227e070d4e2d2e581ba4",
  measurementId: "G-8QSESXQS93"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };