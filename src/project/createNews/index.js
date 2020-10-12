import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import firebase from "../../config/firebaseConfig";
import { createNews, upateNews } from "../../store/actions/newsActions";


const db = firebase.firestore();

const CreateNews = (props) => {
 
  const initialState = {
    content: "",
    content2: "",
    content3: "",
    image1: "",
    image2: "",
    firstadimg: "",
    secondadimg: "",    
    title: ""
  };
  const [news, setNews] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [values, setValues] = useState(initialState);
  
 

  const getNews = () => {
    db.collection("news").onSnapshot((querySnapshot) => {
      const news= [];
      querySnapshot.forEach((singleNew) => {
        news.push({ ...singleNew.data(), id: singleNew.id });
      });
      setNews(news);
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === "") {
      props.createNews(values);
    } else {
      props.updateNews([values, currentId]);
    }
  };

  const getNewById = async (id) => {
    const doc = await db.collection("news").doc(id).get();
    setValues({ ...doc.data() });
  };
  
  useEffect(() => {
    getNews();
    currentId === "" ? setValues({ ...initialState }) : getNewById(currentId);
  }, [currentId]);
  return (
    <div className="container">
      <div className="row post-list-management">
        <div className="col-md-6 card">
          <form onSubmit={handleSubmit} className="form-group">
            <h1 className="text-dark">Create Single News</h1>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />              

              <label htmlFor="content">Content 1</label>
              <textarea
                id="content"
                name="content"
                value={values.content}
                className="form-control"
                onChange={handleChange}
              ></textarea>

              <label htmlFor="content2">Content 2</label>
              <textarea
                id="content2"
                name="content2"
                value={values.content2}
                className="form-control"
                onChange={handleChange}
              ></textarea>

              <label htmlFor="content3">Content 3</label>
              <textarea
                id="content3"
                name="content3"
                value={values.content3}
                className="form-control"
                onChange={handleChange}
              ></textarea>              

              <label htmlFor="image1">Image 1</label>
              <input
                type="text"
                className="form-control"
                id="image1"
                name="image1"
                value={values.image1}
                onChange={handleChange}
              />

              <label htmlFor="image2">Image 2</label>
              <input
                type="text"
                className="form-control"
                id="image2"
                name="image2"
                value={values.image2}
                onChange={handleChange}
              />
              <label htmlFor="firstadimg">Ad1</label>
              <input
                className="form-control"
                name="firstadimg"
                id="firstadimg"
                value={values.firstad}
                onChange={handleChange}
              />
              <label htmlFor="secondadimg">Ad2</label>
              <input
                type="text"
                className="form-control"
                id="secondadimg"
                name="secondadimg"
                value={values.secondad}
                onChange={handleChange}
              />
              
            </div>
            <div className="input-field">
              <button className="btn btn-primary">
                {currentId === "" ? "CREATE" : "UPDATE"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 card">
          <h2 className="card-title">News List</h2>
          <div className="p-2">
            {news.map((singleNew) => (
              <div className="card mb-1" key={singleNew.id}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4>{singleNew.title}</h4>
                    <div>
                      <i
                        className="material-icons"
                        onClick={() => setCurrentId(singleNew.id)}
                      >
                        create
                      </i>
                    </div>
                  </div>                  
                  <a href={singleNew.image1} target="_blank" rel="noopener noreferrer">
                    Go to website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
      createNews: (singleNew) => dispatch(createNews(singleNew)),
      updateNews: (...props) => dispatch(upateNews(...props)),
    };
  };

export default connect(null, mapDispatchToProps)(CreateNews);
