import React from 'react';
import './header.css';
import shoppingCart from './images/shoppingCart.png'
import { connect } from 'react-redux';
import { getNumber } from '../actions/getAction';
import { clearCart } from '../actions/clearCart';
import { Link } from 'react-router-dom';

const Header = (props) => { 
  console.log(props, "Desde el header") 
    return (
        <header className="App-header">
        <h2 className="headerTitle">Header here</h2>            
        <nav className="headerNav">        
              <ul className="navigation">            
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
              
              <div className="headerCart">
                <ul>                        
                  <li>
                    <div className="countImg">
                      <span className="counter">{props.numberOfItems}</span>
                      <p className="total">{props.total}</p>                      
                    </div>
                    <div id="carrito">
                      <img src={shoppingCart} className="cart-img" alt="shoppingCart"/>
                      <Link to="/cart" id="show-cart" className="showEmpty">Show Cart</Link>
                      <button onClick={props.clearCart} id="delete-cart" className="showEmpty">Empty Cart</button>                                   
                    </div>
                  </li>                            
                </ul>
              </div>  
        </nav>
      </header>
    )
}

const mapStateToProps = ({ cart }) => ({    
    numberOfItems: Object.values(cart.items).length,
    total: Object.values(cart.items).reduce((total, current) => total + Number(current.price), 0)

})
const mapDispatchToProps =  { 
    
    getNumber,
    clearCart  
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);