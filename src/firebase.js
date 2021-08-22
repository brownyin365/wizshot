// import firebase from 'firebase'
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
require('firebase/firestore')

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyD5M1IUgUwLxsVsdoSbDrlasI9IN99BRIk",
    authDomain: "wizshot-9c540.firebaseapp.com",
    databaseURL: "https://wizshot-9c540-default-rtdb.firebaseio.com",
    projectId: "wizshot-9c540",
    storageBucket: "wizshot-9c540.appspot.com",
    messagingSenderId: "125028683941",
    appId: "1:125028683941:web:0d7793e432a3dc85617d4c",
    measurementId: "G-QKH8VTXJD5"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(config);
 const db = firebase.firestore();

 export {fb,db}