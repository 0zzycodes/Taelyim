import React, { useState } from "react";
import plus from "../../assets/dashboard/plus.svg";
import NewCourse from "../new-course/new-course";
import "./dashboard-courses.scss";

const DashboardCourses = () => {
  const [isNewCourseContainerShowing, setNewCourseContainerToShow] = useState(
    false
  );
  const toggleNewCourseContainer = () => {
    setNewCourseContainerToShow(!isNewCourseContainerShowing);
  };
  return (
    <div className="dashboard-courses">
      <div className="head">
        <button className="btn trash" onClick={toggleNewCourseContainer}>
          <img src={plus} alt="plus" />
          <span>NEW COURSE</span>
        </button>
      </div>
      <div className="no-course-yet">
        <h2>You don't have any Courses yet</h2>
        <button className="btn" onClick={toggleNewCourseContainer}>
          {" "}
          <img src={plus} alt="plus" /> Add your first course
        </button>
      </div>
      {isNewCourseContainerShowing && (
        <NewCourse toggleNewCourseContainer={toggleNewCourseContainer} />
      )}
    </div>
  );
};

export default DashboardCourses;
