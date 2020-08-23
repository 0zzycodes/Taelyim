import React from "react";
import { Link } from "react-router-dom";
import "./course-preview.scss";
const CoursePreview = ({
  data: { imageUrl, title, instructor, duration, price, rating, category, nos },
}) => {
  return (
    <div className="course-preview">
      <img src={imageUrl} alt="course img preview" />
      <h1>
        <Link to={`/courses/${title.split(" ").join("-").toLowerCase()}`}>
          {title}
        </Link>
      </h1>
      <p>{nos} student enrolled</p>
      <p>Created by {instructor}</p>
      <div className="duration_price">
        <span className="duration">{duration}</span>
        <span className="price">${price}</span>
      </div>
      <div className="rating_tag">
        <img src={rating} alt="rating" />
        <Link to={`courses/${category.toLowerCase()}`} className="tag">
          {category}
        </Link>
      </div>
    </div>
  );
};

export default CoursePreview;
