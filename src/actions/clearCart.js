import { CLEAR_CART } from './types';

export const clearCart = () => {
    return (dispatch) => {
        console.log("Cart cleared");
        dispatch({
            type: CLEAR_CART
        })
    }
}