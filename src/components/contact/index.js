import React, { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { contactForm } from "../../store/actions/contactActions";
import "./style.css";

function ContactPage(props) {

  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
     props.sendContact(values);
     setValues(initialState)
  }
  
  return (
    <div className="container-fluid contact-detail mb-4">
      <div className="row">
        <div className="col-md-5 pt-4 contact-right-side">
          <h3>¿Quienes Somos?</h3>
          <p className="contact-description">
            TechnoSapience es un sitio web divulgativo que recopila informacion relacionada al mundo de la ciencia y la tecnologia. Los derechos de autor de todas nuestras publicaciones pertenecen a terceros y como tal su valor debe ser reconocido a sus propietarios.
          </p>
          <h3>Nuestro Objetivo</h3>
          <p className="contact-description">
            Nuestro objetivo es ofercer un sitio web amigable donde puedas encontrar en un solo lugar informacion sobre todos aquellos Gadgets y avances cientificos que estan cambiando al mundo.
          </p>
          <h3>Apoyanos</h3>
          <div className="social-buttons mt-4">
            <a
              href="https://www.instagram.com/technosapience2.0/"
              className="btn ig-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.instagram.com/technosapience2.0/"
              className="btn btn-danger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/TechnoSapience-106380507862357"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/technosapience2.0/"
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <h2 className="text-dark">CONTACTANOS</h2>
          <p className="text-dark">
            En nuestras redes sociales o en este formulario
          </p>
          <form onSubmit={handleSubmit} className="form-group contacto">
            <input
              className="contact-form"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              type="text"
              onChange={handleChange}
              value={values.name}
            />
            <input
              className="contact-form"
              id="email"
              name="email"
              placeholder="tucorreo@correo.com"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <input
              className="contact-form"
              id="subject"
              name="subject"
              placeholder="Asunto"
              type="text"
              onChange={handleChange}
              value={values.subject}
            />
            <textarea
              name="message"
              className="custom-area"
              id="message"
              placeholder="Escribe tu mensaje"
              onChange={handleChange}
              value={values.message}
            ></textarea>
            <input
              type="submit"
              className="btn btn-primary contact-submit"
              value="ENVIAR"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendContact: (data) => dispatch(contactForm(data))
  }
}

export default compose(firestoreConnect([
  { collection: "contact", orderBy: ["createdAt", "desc"] },
]),
connect(null, mapDispatchToProps))(ContactPage);
