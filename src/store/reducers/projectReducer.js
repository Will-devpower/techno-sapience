const initState = {
    projects: []
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_POST':
            /* console.log('Project Created', action.project); */
            return state;
            
        case 'CREATE_POST_ERROR':
            /* console.log('create project error', action.err); */
            return state;
        case 'UPDATE_POST':
            /* console.log('Project Created', action.project); */
            return state;
            
        case 'UPDATE_POST_ERROR':
             console.log('create project error', action.err); 
            window.alert("Update Error")
            return state;
        default:
            return state        
    }
         
}

export default projectReducer;