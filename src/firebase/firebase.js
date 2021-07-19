import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAZW90ZKWVjLZ2uyGGzRmk5OJNq20AhCTo",
    authDomain: "news-app-db-1b328.firebaseapp.com",
    projectId: "news-app-db-1b328",
    storageBucket: "news-app-db-1b328.appspot.com",
    messagingSenderId: "37184351323",
    appId: "1:37184351323:web:0f09d16af044c1acff637e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore();