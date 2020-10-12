import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import firebase from "../../config/firebaseConfig";
import { createPost, upatePost } from "../../store/actions/projectActions";


const db = firebase.firestore();

const CreatePost = (props) => {
 
  const initialState = {
    content: "",
    content2: "",
    content3: "",
    creator: "",
    img1: "",
    img2: "",
    firstadimg: "",
    secondadimg: "",
    smallimg1: "",
    smallimg2: "",
    smcontent1: "",
    smcontent2: "",
    title: "",
  };
  const [posts, setPosts] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [values, setValues] = useState(initialState);
  
 

  const getPosts = () => {
    db.collection("projects").onSnapshot((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((post) => {
        posts.push({ ...post.data(), id: post.id });
      });
      setPosts(posts);
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === "") {
      props.createPost(values);
    } else {
      props.updatePost([values, currentId]);
    }
  };

  const getPostById = async (id) => {
    const doc = await db.collection("projects").doc(id).get();
    setValues({ ...doc.data() });
  };
  
  useEffect(() => {
    getPosts();
    currentId === "" ? setValues({ ...initialState }) : getPostById(currentId);
  }, [currentId, initialState]);
  return (
    <div className="container">
      <div className="row post-list-management">
        <div className="col-md-6 card">
          <form onSubmit={handleSubmit} className="form-group">
            <h1 className="text-dark">Create a New Post</h1>
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

              <label htmlFor="creator">Creator</label>
              <input
                type="text"
                className="form-control"
                id="creator"
                name="creator"
                value={values.creator}
                onChange={handleChange}
              />

              <label htmlFor="img1">Image 1</label>
              <input
                type="text"
                className="form-control"
                id="img1"
                name="img1"
                value={values.img1}
                onChange={handleChange}
              />

              <label htmlFor="img2">Image 2</label>
              <input
                type="text"
                className="form-control"
                id="img2"
                name="img2"
                value={values.img2}
                onChange={handleChange}
              />
              <label htmlFor="firstadimg">Ad1</label>
              <input
                className="form-control"
                name="firstadimg"
                id="firstadimg"
                value={values.firstadimg}
                onChange={handleChange}
              />
              <label htmlFor="secondadimg">Ad2</label>
              <input
                type="text"
                className="form-control"
                id="secondadimg"
                name="secondadimg"
                value={values.secondadimg}
                onChange={handleChange}
              />

              <label htmlFor="smallimg1">Small Image 1</label>
              <input
                type="text"
                className="form-control"
                id="smallimg1"
                name="smallimg1"
                value={values.smallimg1}
                onChange={handleChange}
              />

              <label htmlFor="smallimg2">Small Image 2</label>
              <input
                type="text"
                className="form-control"
                id="smallimg2"
                name="smallimg2"
                value={values.smallimg2}
                onChange={handleChange}
              />

              <label htmlFor="smcontent1">Small Content 1</label>
              <textarea
                type="text"
                className="form-control"
                id="smcontent1"
                name="smcontent1"
                value={values.smcontent1}
                onChange={handleChange}
              ></textarea>

              <label htmlFor="smcontent2">Small Content 2</label>
              <textarea
                type="text"
                className="form-control"
                id="smcontent2"
                name="smcontent2"
                value={values.smcontent2}
                onChange={handleChange}
              ></textarea>
              
            </div>
            <div className="input-field">
              <button className="btn btn-primary">
                {currentId === "" ? "CREATE" : "UPDATE"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 card">
          <h2 className="card-title">Post List</h2>
          <div className="p-2">
            {posts.map((post) => (
              <div className="card mb-1" key={post.id}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4>{post.title}</h4>
                    <div>
                      <i
                        className="material-icons"
                        onClick={() => setCurrentId(post.id)}
                      >
                        create
                      </i>
                    </div>
                  </div>
                  <p>{post.creator}</p>
                  <a href={post.img1} target="_blank" rel="noopener noreferrer">
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
      createPost: (post) => dispatch(createPost(post)),
      updatePost: (...props) => dispatch(upatePost(...props)),
    };
  };

export default connect(null, mapDispatchToProps)(CreatePost);
