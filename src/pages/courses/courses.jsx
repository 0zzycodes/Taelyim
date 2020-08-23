import React from "react";
import { Route, withRouter } from "react-router-dom";

import "./courses.scss";
import TakeCourse from "../takeCourse/takeCourse";
import CoursesContainer from "../../components/courses/courses";
const Courses = ({ match }) => {
  return (
    <div className="courses_page">
      <Route exact path={`${match.path}`} component={CoursesContainer} />
      <Route exact path={`/courses/:courseId`} component={TakeCourse} />
    </div>
  );
};

export default withRouter(Courses);
