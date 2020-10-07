import { ActionTypes } from "./types";

const DASHBOARD_INITIAL_STATE = {
  current_page: "dashboard",
  active_topic: "",
  course_detail_show: false,
  course_topic_show: false,
};

export const DashboardReducer = (state = DASHBOARD_INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_PAGE:
      return {
        ...state,
        current_page: action.payload,
      };
    default:
      return state;
  }
};
const DASHBOARD_COURSE_INITIAL_STATE = {
  active_topic: "",
  course_detail_show: false,
  course_topic_show: false,
};
export const DashboarCoursedReducer = (
  state = DASHBOARD_COURSE_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_TOPIC:
      return {
        ...state,
        active_topic: action.payload,
      };
    case ActionTypes.TOGGLECOURSEDETAILSHOW:
      return {
        ...state,
        course_detail_show: action.payload,
      };
    case ActionTypes.TOGGLECOURSETOPICSHOW:
      return {
        ...state,
        course_topic_show: action.payload,
      };
    default:
      return state;
  }
};
