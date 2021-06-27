const initState = {
    news: []
}

const newsReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_NEWS':
            /* console.log('Project Created', action.project); */
            return state;
            
        case 'CREATE_NEWS_ERROR':
            /* console.log('create project error', action.err); */
            return state;
        case 'UPDATE_NEWS':
            /* console.log('Project Created', action.project); */
            return state;
            
        case 'UPDATE_NEWS_ERROR':
            //  console.log('create project error', action.err); 
            window.alert("Update Error")
            return state;
        default:
            return state        
    }
         
}

export default newsReducer;