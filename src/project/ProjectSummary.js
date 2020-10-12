import moment from "moment";
import React from "react";

const ProjectSummary = ({project}) => {
  
  return (
    <div className="card project-summary">
      <div className="card-body">
        <img src={project.imgURL} alt="img"/>
        <p className="grey-text">{ moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
