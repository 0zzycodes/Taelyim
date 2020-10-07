import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentPage } from "../../redux/dashboard/actions";
import { selectCurrentPage } from "../../redux/dashboard/selectors";
import DashboardNavbar from "../../components/dashboard-navbar/dashboard-navbar";
import DashboardSidepanel from "../../components/dashboard-sidepanel/dashboard-sidepanel";
import InstructorDash from "../../components/instructor-dashboard/instructor-dashboard";
import DashboardCourses from "../../components/dashboard-courses/dashboard-courses";
import DashboardPayroll from "../../components/dashboard-payroll/dashboard-payroll";
import DashboardEmail from "../../components/dashboard-email/dashboard-email";

import "./dashboard.scss";

const InstructorDashboard = ({ currentPage }) => {
  const [isSidePanelShowing, setSidePanelToShow] = useState(true);
  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);
  const toggleSidePanel = () => {
    setSidePanelToShow(!isSidePanelShowing);
  };
  return (
    <div className="admin-dashboard">
      <DashboardNavbar
        isSidePanelShowing={isSidePanelShowing}
        toggleSidePanel={toggleSidePanel}
        currentPage={currentPage}
      />
      <div className="admin-dashboard-main">
        <div
          className={`sidepanel ${
            !isSidePanelShowing ? "contract-sidepanel" : ""
          }`}
        >
          <DashboardSidepanel isSidePanelShowing={isSidePanelShowing} />
        </div>
        <div
          className={`admin-main ${!isSidePanelShowing ? "expand-main" : ""}`}
        >
          {currentPage === "dashboard" && <InstructorDash />}
          {currentPage === "courses" && <DashboardCourses />}
          {currentPage === "payroll" && <DashboardPayroll />}
          {currentPage === "email" && <DashboardEmail />}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentPage,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstructorDashboard);
