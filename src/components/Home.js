import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/addAction';
import './home.css'

const Home = (props) => {
    console.log(props, "desde el home");
    return (
        <div className="container">
            {props.products.map(product => {
                 return (
                    <article className="gadgetBox" key={product.id}>
                        <img src={product.image} className="gadgets" alt=""/>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <input type="submit" onClick={() => props.addToCart(product)} value="Add to Cart"/>
                    </article>
                 )
            })}           
            
        </div>    
    )
}

const mapStateToProps = (store) => {
    console.log(store)
    return {
        products: store.products
    }
}

export default connect(mapStateToProps, { addToCart })(Home);