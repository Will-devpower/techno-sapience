import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";
import "./style.css";

function GadgetsPage(props) {
  const { projects } = props;
  // console.log("props: ", props)
  return (
    <main className="container-fluid  gadgets-container">
      <div className="row">
        <div className="col-md-9">
          <div className="row gadgets-main-row">
            {projects &&
              projects.map((project, key) => {
                return (
                  <div
                    className="col-6 col-md-4 gadgets-main-col"
                    key={project.id}
                  >
                    <Link to={"/project/" + project.id}>
                      <img
                        src={project.img1}
                        alt=""
                        className="gadgetview-img"
                      />
                      <p className="gadgetview-title">{project.title}</p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-12 col-md-3 gadgets-sidebar">
        <h2 className="mt-4 text-dark text-center popular-gadgets-title">Trending News</h2>
          <div className="popular-gadgets">
            <img src="https://pbs.twimg.com/profile_images/1046144573934903296/bxIBeVHq.jpg" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
          <div className="popular-gadgets">
            <img src="https://www.rionegro.com.ar/wp-content/uploads/2019/04/Imagen-SIMPOSIUM.jpg" alt="" style={{width: "100%", height: "100%"}}/>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
  ]),
  connect(mapStateToProps)
)(GadgetsPage);
