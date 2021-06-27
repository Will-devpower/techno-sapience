import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from "./config/firebaseConfig";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from 'redux-firestore'
import 'bootswatch/dist/cosmo/bootstrap.min.css'

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // this to enable realtime sync and allow create collections
}

const rrfProps = {
  firebase,
  useFirestoreForProfile: true,   
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
