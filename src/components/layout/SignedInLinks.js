import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";


const SignedInLinks = (props) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li className="nav-item">
        <Link to="/gadgets">
          Gadgets
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/news">
          Noticias
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">
          Contacto
        </Link>
      </li>
            
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
