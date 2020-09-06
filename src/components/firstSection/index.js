import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const FirstSection = ({ posts }) => {
  return (
    <div className="first-section">
      {posts.map((post, key) => {
        return (
          <Link
            to={{ pathname: `/post/${post.id}`, state: post }}
            className={key === 0 ? "first-article" : "next-article"}
            key={key}
          >
            <img
              src={post.image}
              alt=""
              className="firstSection-img next-image"
            />
            <h3 className="firstSectionTitle">{post.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default FirstSection;
