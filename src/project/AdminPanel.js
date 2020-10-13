import React from "react";
import { Link } from "react-router-dom";
import './adminPanel.css'

const AdminPanel = (props) => {
  return (
    <div className="container-fluid admin-panel">
      <div className="row p-4">
        <div className="col-md-6 text-center card pt-5">
          <Link to="/war-create" className="admin-panel-link">Create or Edit Post</Link>
        </div>
        <div className="col-md-6 text-center card pt-5">
          <Link to="/war-create-news" className="admin-panel-link">Create or Edit a Single New</Link>
        </div>
      </div>
    </div>
  );
};


export default AdminPanel;
