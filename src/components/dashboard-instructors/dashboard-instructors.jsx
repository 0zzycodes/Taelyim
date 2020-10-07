import React from "react";
import plus from "../../assets/dashboard/plus.svg";
import InstructorPreview from "../instructor-preview/instructor-preview";

import "./dashboard-instructors.scss";
const DashboardInstructors = () => {
  return (
    <div className="dashboard-instructors">
      <div className="head">
        <button className="btn add-instructor" onClick={() => {}}>
          {" "}
          <img src={plus} alt="plus" /> INSTRUCTOR
        </button>
      </div>
      <div className="instructor-lists">
        <InstructorPreview />
        <InstructorPreview />
        <InstructorPreview />
        <InstructorPreview />
        <InstructorPreview />
      </div>
    </div>
  );
};

export default DashboardInstructors;
