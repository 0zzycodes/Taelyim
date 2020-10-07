import { createSelector } from "reselect";

const selectDashboardState = (state) => state.dashboard;
const selectDashboardCourseState = (state) => state.dashboard_course;

export const selectCurrentPage = createSelector(
  [selectDashboardState],
  (dashboard) => dashboard.current_page
);
export const selectActiveTopic = createSelector(
  [selectDashboardCourseState],
  (dashboard) => dashboard.active_topic
);
export const selectCourseDetailShow = createSelector(
  [selectDashboardCourseState],
  (dashboard) => dashboard.course_detail_show
);
export const selectCourseTopicShow = createSelector(
  [selectDashboardCourseState],
  (dashboard) => dashboard.course_topic_show
);
