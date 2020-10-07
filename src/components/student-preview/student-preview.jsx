import React from "react";
import location from "../../assets/dashboard/location.svg";
import userAvatar from "../../assets/dashboard/user-avatar.png";

import "./student-preview.scss";

const StudentPreview = () => {
  return (
    <div className="student-preview-wrapper">
      <div className="student-preview">
        <div className="student-preview-main">
          <div className="avatar-container">
            <img src={userAvatar} alt="user" className="avatar" />
          </div>
          <div className="student-preview-main-info">
            <h4 className="name">{"Jonas"}</h4>
            {/* <h4 className="age">Age {35}</h4> */}
            <button className="btn activities">ACTIVITIES</button>
          </div>
        </div>
        <div className="student-preview-footer">
          <div className="location">
            <img src={location} alt="location" />
            <p className="city-country">{"Ibadan, Oyo, Nigeria"}</p>
          </div>
          <span className="presence"></span>
        </div>
      </div>
    </div>
  );
};

export default StudentPreview;
