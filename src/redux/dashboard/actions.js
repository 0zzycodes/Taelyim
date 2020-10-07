import { ActionTypes } from "./types";

export const setCurrentPage = (data) => ({
  type: ActionTypes.CURRENT_PAGE,
  payload: data,
});
export const setActiveTopic = (data) => ({
  type: ActionTypes.ACTIVE_TOPIC,
  payload: data,
});
export const toggleCourseDetailShow = (data) => ({
  type: ActionTypes.TOGGLECOURSEDETAILSHOW,
  payload: data,
});
export const toggleCourseTopicShow = (data) => ({
  type: ActionTypes.TOGGLECOURSETOPICSHOW,
  payload: data,
});
