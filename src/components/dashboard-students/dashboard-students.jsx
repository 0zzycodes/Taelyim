import React from "react";
import plus from "../../assets/dashboard/plus.svg";
import StudentPreview from "../student-preview/student-preview";

import "./dashboard-students.scss";

const DashboardStudents = () => {
  return (
    <div className="dashboard-students">
      <div className="head">
        <button className="btn add-student" onClick={() => {}}>
          {" "}
          <img src={plus} alt="plus" /> STUDENTS
        </button>
      </div>
      <div className="student-lists">
        <StudentPreview />
        <StudentPreview />
        <StudentPreview />
        <StudentPreview />
        <StudentPreview />
      </div>
    </div>
  );
};

export default DashboardStudents;
