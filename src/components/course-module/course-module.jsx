import React, { useState } from "react";
import downArrow from "../../assets/down-arrow.svg";
const CourseModule = () => {
  const [show, setShow] = useState(false);
  const toggleModule = ({ data }) => {
    setShow(!show);
  };
  return (
    <div className="course_module">
      <div className="course_module_head">
        <span className="count">{"01"}</span>
        <h3 className="module_name">{"Introduction To Flutter"}</h3>
        <span className="module_lecture_count">{2} Lectures</span>
        <span className="module_duration">{"45min"}</span>
        <div className="toggler" onClick={toggleModule}>
          <img
            src={downArrow}
            alt="Down Arrow"
            style={
              show
                ? { transform: "rotate(-180deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </div>
      </div>
      {show && (
        <div className="module_topic">
          <h4>Topic 1</h4>
        </div>
      )}
    </div>
  );
};

export default CourseModule;
