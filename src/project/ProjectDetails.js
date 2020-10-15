import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import './projectDetails.css';

function ProjectDetails(props) {
  const { project } = props;
  //  console.log("project: ", project);
  if (project) {
    return (
      <div className="container-fluid post-detail">
      <div className="row">
        <div className="col-12 col-md-8">        
          <img src={project.img1} alt="" className="img-principal"/>
          <h1 className="post-title ">{project.title}</h1>
          <div className="post-description">
            <p className="text-dark lg-paragraph">{project.content}</p>
            <p className="text-dark lg-paragraph">{project.content2}</p>
            <img src={project.firstadimg} alt="" className="ad-image1"/>
          </div>
          <img src={project.img2} alt="" className="img-principal"/>
          <div className="post-description mt-4">
            <p className="text-dark lg-paragraph">{project.content3}</p>
          </div>        
          {/* Small Images and paragraphs */}
          <div className="row sm-div">
            <div className="col-12 col-md-6"><img src={project.smallimg1} alt="" className="post-small-img" /></div>
            <div className="col-12 col-md-6 sm-content"><p className="text-dark sm-paragraph">{project.smcontent1}</p></div>
          </div>
          <div className="row sm-div">
            <div className="col-12 col-md-6 sm-content"><p className="text-dark sm-paragraph">{project.smcontent2}</p></div>
            <div className="col-12 col-md-6"><img src={project.smallimg2} alt="" className="post-small-img" /></div>
          </div>
          <img src={project.secondadimg} alt="" className="ad-image1"/>
        </div>

        {/* SideBar Starts here */}

        <div className="col-12 col-md-4 col-lg-4 sidebar">
          <div className="mt-3 anuncio text-dark">
            <img src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/RocketBanner2.jpg?alt=media&token=66f5c46a-316f-4887-b7fc-d24ffb3554f4" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
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
          <h2 className="mt-4 text-dark popular-gadgets-title">Trending News</h2>
          <div className="popular-gadgets">
            <img src="https://pbs.twimg.com/profile_images/1046144573934903296/bxIBeVHq.jpg" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
          <div className="popular-gadgets">
            <img src="https://www.rionegro.com.ar/wp-content/uploads/2019/04/Imagen-SIMPOSIUM.jpg" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
          <h2 className="mt-4 text-dark popular-gadgets-title">Popular Gadgets</h2>          
          <div className="popular-gadgets">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU60Fjnmy9hrG-LPSlM_IQXVsxCWu8MjOdXg&usqp=CAU" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
          <div className="popular-gadgets">
            <img src="https://chinanews.media/media/2020/05/tech.jpg" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
          <div className="anuncio text-dark">
            <img src="https://cutewallpaper.org/21/vertical-wallpapers-high-resolution/1242x2208-px-Portrait-Display-vertical-High-Quality-.jpg" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
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
      </div>
    </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //  console.log("ownProps: ", ownProps.match)
  const id = ownProps?.match?.params?.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;  
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ['createdAt', 'desc'] }])
)(ProjectDetails);
