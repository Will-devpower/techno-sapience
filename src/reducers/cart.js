import { ADD_TO_CART, GET_COUNTER, CLEAR_CART, DELETE_ITEM } from "../actions/types";

const initialState = {
    numberOfItems: 0,
    items: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,                
                items: {
                    ...state.items, 
                    [action.payload.id]: {
                        ...action.payload,
                        quantity: state.items[action.payload.id] 
                        ? state.items[action.payload.id].quantity + 1
                        : 1
                    }
                }
            }
        case CLEAR_CART:
            return {
                ...state,
                items: []
            }    
        case GET_COUNTER:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}