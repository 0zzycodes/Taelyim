import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentPage } from "../../redux/admin/actions";
import { selectCurrentPage } from "../../redux/admin/selectors";
import DashboardNavbar from "../../components/dashboard-navbar/dashboard-navbar";
import DashboardAdminSidepanel from "../../components/dashboard-admin-sidepanel/dashboard-admin-sidepanel";
import AdminDashboard from "../../components/admin-dashboard/admin-dashboard";
import DashboardInstructors from "../../components/dashboard-instructors/dashboard-instructors";
import DashboardStudents from "../../components/dashboard-students/dashboard-students";
import DashboardAppointments from "../../components/dashboard-appointments/dashboard-appointments";
import DashboardDepertments from "../../components/dashboard-depertments/dashboard-depertments";
import DashboardPayroll from "../../components/dashboard-payroll/dashboard-payroll";
import DashboardEmail from "../../components/dashboard-email/dashboard-email";

import "./dashboard.scss";

const Dashboard = ({ currentPage }) => {
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
          <DashboardAdminSidepanel isSidePanelShowing={isSidePanelShowing} />
        </div>
        <div
          className={`admin-main ${!isSidePanelShowing ? "expand-main" : ""}`}
        >
          {currentPage === "dashboard" && <AdminDashboard />}
          {currentPage === "doctors" && <DashboardInstructors />}
          {currentPage === "patients" && <DashboardStudents />}
          {currentPage === "appointments" && <DashboardAppointments />}
          {currentPage === "departments" && <DashboardDepertments />}
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
