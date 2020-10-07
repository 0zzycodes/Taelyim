import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCourseDetailShow,
  selectCourseTopicShow,
} from "../../redux/dashboard/selectors";
import {
  setActiveTopic,
  toggleCourseDetailShow,
  toggleCourseTopicShow,
} from "../../redux/dashboard/actions";
import plus from "../../assets/dashboard/plus.svg";
import DashboardCourseTopic from "../dashboard-course-topic/dashboard-course-topic";

const DashboardCourseModule = ({
  setActiveTopic,
  toggleCourseDetailShow,
  courseDetailShow,
  courseTopicShow,
  toggleCourseTopicShow,
}) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const topicArr = [
    { title: "Topic Title", description: "", video_url: "", isVideo: true },
    { title: "Topic Title", description: "", video_url: "", isVideo: true },
  ];
  const handleToggleCourseToicShow = () => {
    toggleCourseTopicShow(!courseTopicShow);
    if (courseDetailShow) {
      toggleCourseDetailShow(!courseDetailShow);
    }
    setActiveTopic(null);
  };
  return (
    <div className="module">
      <div className="head">
        <h4 className="title">Module title</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.604"
          height="17.181"
          viewBox="0 0 26.604 17.181"
          onClick={toggleShow}
          style={
            show
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(-180deg)" }
          }
        >
          <path
            id="down-arrow"
            d="M57.312,107.846,46,96.536a1.988,1.988,0,0,0-2.819,0L41.3,98.416a1.988,1.988,0,0,0,0,2.819l8.017,8.017L41.3,117.269a1.988,1.988,0,0,0,0,2.819l1.879,1.879a1.988,1.988,0,0,0,2.819,0l11.31-11.31A1.978,1.978,0,0,0,57.312,107.846Z"
            transform="translate(122.553 -40.717) rotate(90)"
            fill="#272c42"
          />
        </svg>
      </div>
      {/* TOPIC */}
      {show && (
        <div className="wrapper-box">
          <div className="topics">
            {topicArr.map((data, index) => (
              <DashboardCourseTopic
                key={index}
                data={data}
                activeIndex={index}
              />
            ))}
          </div>
          {!courseTopicShow && (
            <button className="btn" onClick={handleToggleCourseToicShow}>
              <img src={plus} alt="plus" /> Add Topic
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
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
)(DashboardCourseModule);
