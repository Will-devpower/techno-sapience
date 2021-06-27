import moment from "moment";
import { toast } from "react-toastify";

export const createNews = (singleNew) => {
    return (dispatch, getState, { getFirebase }) => {
         
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;        
            firestore.collection('news').doc().set({
                ...singleNew,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId:  authorId,
                createdAt: moment(new Date()).calendar() 
             })
            .then(() => {
                dispatch({
                    type: 'CREATE_NEWS', 
                    singleNew
                })
            toast("New Post Added Successfully", {
                type: "success",
                autoClose: 2000
            })
            })
            .catch(err => {
                dispatch({
                    type: 'CREATE_NEWS_ERROR',
                    err
                })            
            })            
        
    }
}

export const upateNews = (props) => {
    
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid; 
        
            firestore.collection('news').doc(props[1]).update({
                ...props[0],
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId:  authorId,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({
                    type: 'UPDATE_NEWS', 
                    payload: props.singleNew
                })
            toast("Post Updated Successfully", {
                type: "info",
                autoClose: 2000
            })
            })
            .catch(err => {
                dispatch({
                    type: 'UPDATE_NEWS_ERROR', 
                    payload: props.singleNew
                })            
            })
          
    }
}