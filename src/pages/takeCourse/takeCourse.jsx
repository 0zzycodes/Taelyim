import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CustomHero from "../../components/custom-hero/custom-hero";
import rating from "../../assets/rating.svg";

import imageUrl from "../../assets/instructor_image_url.svg";
import CourseImage from "../../assets/full_course_image.png";
import "./takeCourse.scss";
import CourseModules from "../../components/course-modules/course-modules";

const TakeCourse = ({ history }) => {
  return (
    <section className="take_course_container">
      <CustomHero title="Take Course" />
      <div className="take_course">
        <aside className="sidebar">
          <div className="apply_to_enroll">
            <div className="head_block">
              <h3>Apply To Enroll</h3>
            </div>
            <ul className="stat">
              <li className="module">
                MODULE <span>{0}</span>
              </li>
              <li className="duration">
                DURATION <span>{"5H 20M"}</span>
              </li>
              <li className="category">
                CATEGORY <span>{"Programming"}</span>
              </li>
            </ul>
            <div className="rating">
              <img src={rating} alt="rating" />
              <span>4 / 5</span>
            </div>
            <div className="enroll_btn">
              <Link to="/checkout" className="enroll_now">
                ENROLL NOW
                <button>{"$90"}</button>
              </Link>
            </div>
            <div className="completion">
              <h3>CERTIFICATE OF COMPLETION</h3>
            </div>
          </div>
          <div className="instructor_details">
            <div className="head_block">
              <h3>Instructor</h3>
            </div>
            <div className="instructor">
              <img src={imageUrl} alt="instructor pic" />
              <h4 className="instructor_name">{"MIA TAOFEEK"}</h4>
            </div>
          </div>
        </aside>
        <main className="course_details">
          <div className="course_image">
            <img src={CourseImage} alt="course pic" />
          </div>
          <CourseModules />
        </main>
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(TakeCourse));
