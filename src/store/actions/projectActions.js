import moment from "moment";
import { toast } from "react-toastify";

export const createPost = (post) => {
    return (dispatch, getState, { getFirebase }) => {
         
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;        
            firestore.collection('projects').doc().set({
                ...post,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId:  authorId,
                createdAt: moment(new Date()).calendar() 
             })
            .then(() => {
                dispatch({
                    type: 'CREATE_POST', 
                    post
                })
            toast("New Post Added Successfully", {
                type: "success",
                autoClose: 2000
            })
            })
            .catch(err => {
                dispatch({
                    type: 'CREATE_POST_ERROR',
                    err
                })            
            })            
        
    }
}

export const upatePost = (props) => {
    
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid; 
        
            firestore.collection('projects').doc(props[1]).update({
                ...props[0],
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId:  authorId,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({
                    type: 'UPDATE_POST', 
                    payload: props.post
                })
            toast("Post Updated Successfully", {
                type: "info",
                autoClose: 2000
            })
            })
            .catch(err => {
                dispatch({
                    type: 'UPDATE_POST_ERROR', 
                    payload: props.post
                })            
            })
          
    }
}