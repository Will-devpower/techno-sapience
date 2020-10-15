import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import { signOut } from "../../store/actions/authActions";
import "./navbar.css";

const Navbar = (props) => {
  const { auth, profile } = props;
  const initials = profile.initials;
  return (
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg my-navbar bg-primary">
          <Link className="my-logo" to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/ts-logo.png?alt=media&token=cfdb584c-fced-43c4-aaef-b4c92f5d180f"
              alt=""
              className="my-logo-img"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse right-div"
            id="navbarNavDropdown"
          >
            <SignedInLinks />
          </div>

          {auth.uid && (
            <div className="admin">
              <Link to="/war-admin">Admin</Link>
              <Link to="/war-signin" onClick={props.logOut}>
                Logout
              </Link>
              <p className="initials">{initials}</p>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
