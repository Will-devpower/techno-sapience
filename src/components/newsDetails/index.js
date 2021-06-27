import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./style.css";

const NewsDetails = (props) => {
  console.log(props);
  const { singleNew } = props;

  if (singleNew) {
    return (
      <div className="container-fluid single-new-main p-2">
        <div className="row">
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12 individual-new">
                <img src={singleNew.image1} alt="" className="sn-main-image" />
                <p className="sn-content">{singleNew.content}</p>
              </div>
              <div className="col-12">
                <img
                  src={singleNew.firstadimg}
                  alt=""
                  className="newsads-img"
                />
              </div>
              <div className="col-12 individual-new">
                <p className="sn-content">{singleNew.content2}</p>
                <img src={singleNew.image2} alt="" className="sn-main-image" />
              </div>
              <div className="col-12 mt-2">
                <img
                  src={singleNew.firstadimg}
                  alt=""
                  className="newsads-img"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="sn-content">{singleNew.content3}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 singleNew-sidebar">
            <div className="anuncio text-dark">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/net-react-rdx-fireb.appspot.com/o/RocketBanner2.jpg?alt=media&token=66f5c46a-316f-4887-b7fc-d24ffb3554f4"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="popular-gadgets mt-3">
              <img
                src="https://pbs.twimg.com/profile_images/1046144573934903296/bxIBeVHq.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading News...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  //  console.log("ownProps: ", ownProps.match)
  const id = ownProps?.match?.params?.id;
  const news = state.firestore.data.news;
  const singleNew = news ? news[id] : null;

  return {
    singleNew: singleNew,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "news" }])
)(NewsDetails);
