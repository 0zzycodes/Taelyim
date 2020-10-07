import React from "react";
import "./instructor-dashboard.scss";
const InstructorDash = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-boxes">
        <div className="box-wrapper">
          <div className="box">
            <div className="box-icon">
              <h3 className="num">{2}</h3>
            </div>
            <div className="box-text">
              <span className="txt">COURSES</span>
            </div>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="box">
            <div className="box-icon">
              <h3 className="num">{4.5}</h3>
            </div>
            <div className="box-text">
              <span className="txt">Rating</span>
            </div>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="box">
            <div className="box-icon">
              <h3 className="num">${1627}</h3>
            </div>
            <div className="box-text">
              <span className="txt">Income</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDash;
