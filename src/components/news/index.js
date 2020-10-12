import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";
import "./style.css";

const NewsComponent = (props) => {
  const { news } = props;
  return (
    <div className="conatiner-fluid news-view pt-2 pb-2">
      <div className="row">
        <div className="col-md-2 pr-0 news-right-sidebar">
          <img src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/TS%20Vertical%20banner.jpg?alt=media&token=ee79d8fb-11c1-4b36-a35d-66f7ac0df376" alt="" className="newsidebarimg"/>
        </div>
        <div className="col-md-8">
          <div className="row news-main-row">
            {news &&
              news.map((singleNew, key) => {
                return (
                  <div className="col-6 news-main-col" key={singleNew.id}>
                    <Link to={'/news/' + singleNew.id}>
                      <img
                        src={singleNew.image1}
                        alt=""
                        className="news-main-img"
                      />
                      <p className="news-img-title">{singleNew.title}</p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-md-2 pl-0 news-left-sidebar">
        <img src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/TS%20Vertical%20banner.jpg?alt=media&token=ee79d8fb-11c1-4b36-a35d-66f7ac0df376" alt="" className="newsidebarimg"/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.firestore.ordered.news,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "news", orderBy: ["createdAt", "desc"] }])
)(NewsComponent);
