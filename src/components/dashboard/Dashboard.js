import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    // console.log("firebase: ", firebase)
    return (
        <main className="container-fluid  main-container">
        <div className="row text-center">
          {projects && projects.slice(0, 7).map((project, key) => {
            return (
              <article className={project.articleClass} key={project.id}>
                <Link to={'/project/' + project.id} >
                  <img
                    src={project.img1}
                    alt=""
                    className={project.imgClass}
                  />
                  <p className="img-title">{project.title}</p>                  
                </Link>
              </article>
            );
          })}
        </div>
      </main>
    );
  }
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
)(Dashboard);
