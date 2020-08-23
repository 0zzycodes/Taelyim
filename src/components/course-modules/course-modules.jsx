import React from "react";
import CourseModule from "../course-module/course-module";

const CourseModules = () => {
  return (
    <div className="course_modules">
      <h2 className="section_name">Course Modules</h2>
      <CourseModule data={""} />
    </div>
  );
};

export default CourseModules;
