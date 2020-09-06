import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
import posts from './posts';

export default combineReducers({
    cart,
    products,
    posts
});