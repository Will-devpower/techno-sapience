const initState = {
    projects: []
}

const contactReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SEND_CONTACT_FORM':
            /* console.log('Project Created', action.project); */
            return state;
            
        case 'SEND_CONTACT_FORM_ERROR':
             console.log('error: ', action.err);
            return state;        
        default:
            return state        
    }
         
}

export default contactReducer;