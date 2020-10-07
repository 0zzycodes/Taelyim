import React from "react";
import location from "../../assets/dashboard/location.svg";
import userAvatar from "../../assets/dashboard/user-avatar.png";

import "./instructor-preview.scss";

const InstructorPreview = () => {
  return (
    <div className="instructor-preview-wrapper">
      <div className="instructor-preview">
        <div className="instructor-preview-main">
          <div className="avatar-container">
            <img src={userAvatar} alt="user" className="avatar" />
          </div>
          <div className="instructor-preview-main-info">
            <h4 className="name">{"Dr Sarah"}</h4>
            <h4 className="department">{"Neurologist"}</h4>
            <span className="billing">{"5000"}/hr</span>
            <button className="btn activities">ACTIVITIES</button>
          </div>
        </div>
        <div className="instructor-preview-footer">
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

export default InstructorPreview;
