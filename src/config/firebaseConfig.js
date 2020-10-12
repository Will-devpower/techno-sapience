import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDhrevR_zPdj0f3xeQJnmmvmUaXLUjorO0",
    authDomain: "net-react-rdx-fireb.firebaseapp.com",
    databaseURL: "https://net-react-rdx-fireb.firebaseio.com",
    projectId: "net-react-rdx-fireb",
    storageBucket: "net-react-rdx-fireb.appspot.com",
    messagingSenderId: "1054392439621",
    appId: "1:1054392439621:web:6b79948b580ab4dc4ca42c",
    measurementId: "G-CVC79D7DVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();  

  export default firebase;