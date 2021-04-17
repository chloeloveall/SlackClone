import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBZ3QxxjINtgdu50zSmDMGRZIhU501-Z1M",
    authDomain: "slack-clone-9593d.firebaseapp.com",
    projectId: "slack-clone-9593d",
    storageBucket: "slack-clone-9593d.appspot.com",
    messagingSenderId: "814097446184",
    appId: "1:814097446184:web:4539ab560aaabb51e50c1d",
    measurementId: "G-LYKPEDGQKF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;