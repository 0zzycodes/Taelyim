import React from "react";
import { connect } from "react-redux";
import { setAdmin, setCurrentPage } from "../../redux/admin/actions";
import dash from "../../assets/dashboard/dash.svg";
import doctors from "../../assets/dashboard/doctors.svg";
import patients from "../../assets/dashboard/patients.svg";
import appointments from "../../assets/dashboard/appointments.svg";
import departments from "../../assets/dashboard/departments.svg";
import payroll from "../../assets/dashboard/payroll.svg";
import email from "../../assets/dashboard/email.svg";
import logout from "../../assets/dashboard/logout.svg";
import "./dashboard-admin-sidepanel.scss";

const DashboardAdminSidepanel = ({
  isSidePanelShowing,
  setAdmin,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <>
      <div className="dashboard-sidenav-links">
        <div
          className="link-btn"
          style={
            currentPage === "dashboard"
              ? {
                  borderLeft: "5px solid #01B2C6",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("dashboard")}
        >
          <img src={dash} alt="dash" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>
            DASHBOARD
          </span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "doctors"
              ? {
                  borderLeft: "5px solid #01B2C6",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("doctors")}
        >
          <img src={doctors} alt="doctors" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>DOCTORS</span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "patients"
              ? {
                  borderLeft: "5px solid #01B2C6",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("patients")}
        >
          <img src={patients} alt="patients" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>
            PATIENTS
          </span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "appointments"
              ? {
                  borderLeft: "5px solid #01B2C6",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("appointments")}
        >
          <img src={appointments} alt="appointments" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>
            APPOINTMENTS
          </span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "departments"
              ? {
                  borderLeft: "5px solid #01B2C6",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("departments")}
        >
          <img src={departments} alt="departments" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>
            DEPARTMENTS
          </span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "payroll"
              ? {
                  borderLeft: "5px solid #01B2C6",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("payroll")}
        >
          <img src={payroll} alt="payroll" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>PAYROLL</span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "email"
              ? {
                  borderLeft: "5px solid #01B2C6",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("email")}
        >
          <img src={email} alt="email" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>EMAIL</span>
        </div>
      </div>
      <div
        className="logout"
        onClick={() => {
          setAdmin(null);
        }}
      >
        <img src={logout} alt="dash" />
        <span
          style={
            !isSidePanelShowing
              ? { opacity: 0, color: "#E74424" }
              : { color: "#E74424" }
          }
        >
          LOGOUT
        </span>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.admin.current_page,
    currentUser: state.user.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  setAdmin: (admin) => dispatch(setAdmin(admin)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardAdminSidepanel);
