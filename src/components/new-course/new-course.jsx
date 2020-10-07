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
  toggleCourseDetailShow,
  toggleCourseTopicShow,
} from "../../redux/dashboard/actions";
import close from "../../assets/dashboard/close.svg";
import CourseDetails from "../course-details/course-details";
import NewCourseSidebar from "../new-course-sidebar/new-course-sidebar";
import "./new-course.scss";
import TopicDetails from "../topic-details/topic-details";
import EditTopicDetail from "../edit-topic-detail/edit-topic-detail";

const NewCourse = ({
  toggleNewCourseContainer,
  courseDetailShow,
  courseTopicShow,
  activeTopic,
}) => {
  return (
    <div className="new-course-container">
      <div className="new-course-navbar">
        <div className="close" onClick={toggleNewCourseContainer}>
          <img src={close} alt="close" />
        </div>
        <div className="course-name">
          <span>Course Name</span>
        </div>
        <button className="btn" onClick={() => {}}>
          Publish Course
        </button>
      </div>
      <div className="new-course">
        <NewCourseSidebar />
        <div className="main-area">
          {courseDetailShow && <CourseDetails />}
          {courseTopicShow && <TopicDetails />}
          {activeTopic && <EditTopicDetail />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeTopic: selectActiveTopic,
  courseDetailShow: selectCourseDetailShow,
  courseTopicShow: selectCourseTopicShow,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCourseDetailShow: (isShow) => dispatch(toggleCourseDetailShow(isShow)),
  toggleCourseTopicShow: (isShow) => dispatch(toggleCourseTopicShow(isShow)),
  // toggleEditor: (isShow) => dispatch(toggleEditor(isShow)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewCourse);
