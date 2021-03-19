import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDxishf8B-fKo-5hKaXPJDgf9zA4MIsX1A",
  authDomain: "react-slack-clone-541a3.firebaseapp.com",
  projectId: "react-slack-clone-541a3",
  storageBucket: "gs://react-slack-clone-541a3.appspot.com",
  messagingSenderId: "1017968598429",
  appId: "1:1017968598429:web:bc86a0329bad130b9be374",
  measurementId: "G-KQ87DXZGZB",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
