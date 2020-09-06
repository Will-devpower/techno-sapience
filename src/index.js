import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAi9xeoBKVsvjWhfREeMT5FQ-FlfkqYZ0E",
  authDomain: "technosapience-b02d9.firebaseapp.com",
  databaseURL: "https://technosapience-b02d9.firebaseio.com",
  projectId: "technosapience-b02d9",
  storageBucket: "technosapience-b02d9.appspot.com",
  messagingSenderId: "795613264656",
  appId: "1:795613264656:web:91d3b829673de015cf4395",
  measurementId: "G-JJJNP0DT4G"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
