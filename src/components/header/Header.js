import React from 'react';
import './style.css';
import logo from '../../images/ts-logo.png'
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
				<Link to="/"><img src={logo} alt="" className="logo"/></Link>
				<input type="checkbox" id="toggle"/>
				<ul className="hamburguer">
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<ul id="navigation">
					<li className="selected">
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/">GADGETS</Link>
					</li>
					<li className="menu">
						<Link to="/">NEWS</Link>
						<ul className="primary">
							<li>
								<Link to="/" className="sub-menu">proj 1</Link>
							</li>
							<li>
								<Link to="/" className="sub-menu">proj 2</Link>
							</li>
							<li>
								<Link to="/" className="sub-menu">proj 3</Link>
							</li>
							<li>
								<Link to="/" className="sub-menu">proj 4</Link>
							</li>
						</ul>
					</li>
					<li className="menu">
						<Link to="/">REVIEWS</Link>						
					</li>
					<li>
						<Link to="/">CONTACT</Link>
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