import React from "react";
import { connect } from "react-redux";
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
import textFile from "../../assets/dashboard/text-file.svg";

const DashboardCourseTopic = ({
  activeTopic,
  data,
  activeIndex,
  setActiveTopic,
  courseDetailShow,
  courseTopicShow,
  toggleCourseTopicShow,
  toggleCourseDetailShow,
}) => {
  const handleSetActive = () => {
    setActiveTopic({ index: activeIndex, ...data });
    if (courseDetailShow) {
      toggleCourseDetailShow(!courseDetailShow);
    } else if (courseTopicShow) {
      toggleCourseTopicShow(!courseTopicShow);
    }
  };
  return (
    <div
      className={`topic ${
        activeTopic && activeTopic.index === activeIndex && "active"
      }`}
      onClick={handleSetActive}
    >
      <h5>Topic title</h5>
      <div className="type">
        <img src={textFile} alt="text file" />
        <span>Text</span>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCourseTopic);
