import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { getNumber } from '../../actions/getAction';
import { clearCart } from '../../actions/clearCart';
import { Link } from 'react-router-dom';

const Header = (props) => { 
  console.log(props, "Desde el header") 
    return (
      <div id="header">
        
	  </div>
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