import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from "redux";
import authReducer from"./authReducer";
import projectReducer from "./projectReducer";
import contactReducer from "./contactReducer"
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    news: newsReducer,
    contact: contactReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
    
})

export default rootReducer;