import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer font-small">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <img src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/ts-logo.png?alt=media&token=cfdb584c-fced-43c4-aaef-b4c92f5d180f" alt="" className="img-fluid" />
            <p>
              TechnoSapience is a technology portal, sharing the latest news,
              gadgets and science articles.
            </p>
            <div className="social">
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </Link>
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Tiktok"
              >
                <i className="fab fa-tiktok"></i>
              </Link>
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Google Plus"
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Link 1</Link>
              </li>
              <li>
                <Link to="/">Link 2</Link>
              </li>
              <li>
                <Link to="/">Link 3</Link>
              </li>
              <li>
                <Link to="/">Link 4</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Link 1</Link>
              </li>
              <li>
                <Link to="/">Link 2</Link>
              </li>
              <li>
                <Link to="/">Link 3</Link>
              </li>
              <li>
                <Link to="/">Link 4</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <Link to="https://mdbootstrap.com/"> MDBootstrap.com</Link>
      </div>
    </footer>
  );
}

export default Footer;
