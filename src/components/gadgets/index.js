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
        <div className="col-md-8">
          <div className="row gadgets-main-row">
            {projects &&
              projects.map((project, key) => {
                return (
                  <div
                    className="col-6 gadgets-main-col"
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
        <div className="col-12 col-md-4 gadgets-sidebar"></div>
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
