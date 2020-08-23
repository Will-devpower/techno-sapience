import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/deleteItem';
import './styles.css';


function Cart(props) {
    return (
        <div className="container">
            
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

