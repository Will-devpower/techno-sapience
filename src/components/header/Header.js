import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { getNumber } from '../../actions/getAction';
import { clearCart } from '../../actions/clearCart';
import { Link } from 'react-router-dom';


const Header = (props) => { 
  console.log(props, "Desde el header") 
    return (
      <div id="header">
		  <div className="nav-header">
		  	<div className="top-header">
				<Link to="/" className="logo"><h1>Techno Sapience</h1></Link>
				<ul id="navigation">
					<li className="selected">
						<Link to="/">Home</Link>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li className="menu">
						<a href="#">Projects</a>
						<ul className="primary">
							<li>
								<a href="#">proj 1</a>
							</li>
						</ul>
					</li>
					<li className="menu">
						<a href="#">Blog</a>
						<ul className="primary">
							<li>
								<a href="#">Single post</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		  </div>
		  <div className="nav-body">
		  
		  </div>        
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