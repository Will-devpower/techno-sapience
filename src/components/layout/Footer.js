import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="page-footer font-small">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12 mt-md-0 mt-3">
            <img src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/ts-logo.png?alt=media&token=cfdb584c-fced-43c4-aaef-b4c92f5d180f" alt="" className="img-fluid" />
            <p>
              TechnoSapience es un portal informativo donde podras encontrar los mas recientes avances en ciencia y tecnologia.
            </p>            
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />  
          
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://www.technosapience.com/"> TechnoSapience.com</a>
      </div>
    </footer>
  );
}

export default Footer;
