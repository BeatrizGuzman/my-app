import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDC7Fjkj3Y-gZpLWNAdG-8beK140q3dEGE",
  authDomain: "my-app-4e1bf.firebaseapp.com",
  projectId: "my-app-4e1bf",
  storageBucket: "my-app-4e1bf.appspot.com",
  messagingSenderId: "631209784429",
  appId: "1:631209784429:web:937c62f554bb0453343b64",
  measurementId: "G-KB7PM92QBT"
};

const app = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore(app)