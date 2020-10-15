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
          <img src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/RocketBanner2.jpg?alt=media&token=66f5c46a-316f-4887-b7fc-d24ffb3554f4" alt="" className="newsidebarimg"/>
          <img src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/RocketBanner2.jpg?alt=media&token=66f5c46a-316f-4887-b7fc-d24ffb3554f4" alt="" className="newsidebarimg mt-3"/>
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
        <img src="https://cutewallpaper.org/21/vertical-wallpapers-high-resolution/1242x2208-px-Portrait-Display-vertical-High-Quality-.jpg" alt="" className="newsidebarimg"/>
        <img src="https://cutewallpaper.org/21/vertical-wallpapers-high-resolution/1242x2208-px-Portrait-Display-vertical-High-Quality-.jpg" alt="" className="newsidebarimg mt-3"/>
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
