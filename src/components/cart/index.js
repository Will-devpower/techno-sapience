import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/deleteItem';
import './styles.css';


function Cart(props) {
    return (
        <div className="container">
            {props.items.map(product => {
                 return (
                    <article className="gadgetBox" key={product.id}>
                        <img src={product.image} className="gadgets" alt=""/>
                        <h3>{product.title}</h3>
                        <p>{product.quantity} x {product.price}</p>
                        <p>{product.quantity * Number(product.price)}</p>
                        <input type="submit" onClick={() => props.removeItem(product)} value="Delete"/>
                    </article>
                 )
            })}           
            
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        items: Object.values(state.cart.items)
    }
}

const mapDispatchToProps = {
        removeItem: deleteItem
    }


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

