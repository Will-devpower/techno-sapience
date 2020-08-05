import { ADD_TO_CART } from './types';

export const addToCart = (product) => {
    return (dispatch) => {
        console.log("Added to Cart");
        dispatch({
            type: ADD_TO_CART,
            payload: product
        })
    }
}