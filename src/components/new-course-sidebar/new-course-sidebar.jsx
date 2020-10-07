import React from "react";
import { connect } from "react-redux";
// import { firestore } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import {
  selectActiveTopic,
  selectCourseDetailShow,
  selectCourseTopicShow,
} from "../../redux/dashboard/selectors";
import {
  setActiveTopic,
  toggleCourseDetailShow,
  toggleCourseTopicShow,
} from "../../redux/dashboard/actions";
import plus from "../../assets/dashboard/plus.svg";
import "./new-course-sidebar.scss";
import DashboardCourseModule from "../dashboard-course-module/dashboard-course-module";

const NewCourseSidebar = ({
  // activeIndex,
  setActiveTopic,
  courseDetailShow,
  courseTopicShow,
  toggleCourseTopicShow,
  toggleCourseDetailShow,
}) => {
  const handleToggleCourseDetailShow = () => {
    toggleCourseDetailShow(!courseDetailShow);
    if (courseTopicShow) {
      toggleCourseTopicShow(!courseTopicShow);
    }
    setActiveTopic(null);
  };
  return (
    <div className="new-course-sidebar">
      {/* MODULE */}
      <div className="new-course-sidebar-course-details">
        <h1>Course Name</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          consequatur quae blanditiis corporis nihil doloremque?
        </p>
        {!courseDetailShow && (
          <button className="btn" onClick={handleToggleCourseDetailShow}>
            <img src={plus} alt="plus" /> Add Details
          </button>
        )}
      </div>
      <div className="modules">
        <DashboardCourseModule />
        <DashboardCourseModule />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeTopic: selectActiveTopic,
  courseTopicShow: selectCourseTopicShow,
  courseDetailShow: selectCourseDetailShow,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTopic: (topic) => dispatch(setActiveTopic(topic)),
  toggleCourseTopicShow: (topic) => dispatch(toggleCourseTopicShow(topic)),
  toggleCourseDetailShow: (topic) => dispatch(toggleCourseDetailShow(topic)),
  // toggleEditor: (isShow) => dispatch(toggleEditor(isShow)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewCourseSidebar);
