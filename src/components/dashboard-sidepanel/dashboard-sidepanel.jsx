import React from "react";
import { connect } from "react-redux";
import { setAdmin } from "../../redux/admin/actions";
import { setCurrentPage } from "../../redux/dashboard/actions";
import { auth } from "../../firebase/firebase.utils";
import dash from "../../assets/dashboard/dash.svg";
import course from "../../assets/dashboard/course.svg";
import chat from "../../assets/dashboard/chat.svg";
import payroll from "../../assets/dashboard/payroll.svg";
import email from "../../assets/dashboard/email.svg";
import logout from "../../assets/dashboard/logout.svg";
import userAvatar from "../../assets/dashboard/user-avatar.png";
import "./dashboard-sidepanel.scss";

const DashboardSidepanel = ({
  isSidePanelShowing,
  setAdmin,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <>
      <div className="user-container">
        <div className="user-preview-main">
          <div className="avatar-container">
            <img
              src={userAvatar}
              alt="user"
              className="avatar"
              style={
                !isSidePanelShowing
                  ? { width: "50px", height: "50px", marginLeft: "-5px" }
                  : {}
              }
            />
          </div>
          <div
            className="user-preview-main-info"
            style={!isSidePanelShowing ? { display: "none" } : {}}
          >
            <h4 className="name">{"Sarah"}</h4>
            <h4 className="department">{"Instructor"}</h4>
          </div>
        </div>
      </div>

      <div className="dashboard-sidenav-links">
        <div
          className="link-btn"
          style={
            currentPage === "dashboard"
              ? {
                  borderLeft: "5px solid #ff8715",
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
            currentPage === "courses"
              ? {
                  borderLeft: "5px solid #ff8715",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("courses")}
        >
          <img src={course} alt="course" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>COURSES</span>
        </div>

        <div
          className="link-btn"
          style={
            currentPage === "payroll"
              ? {
                  borderLeft: "5px solid #ff8715",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("payroll")}
        >
          <img src={payroll} alt="payroll" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>PAYMENT</span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "chat"
              ? {
                  borderLeft: "5px solid #ff8715",
                  backgroundColor: "#f4f7f6",
                  boxShadow: "0px 2px 6px #00000015",
                }
              : {}
          }
          onClick={() => setCurrentPage("chat")}
        >
          <img src={chat} alt="chat" />
          <span style={!isSidePanelShowing ? { opacity: 0 } : {}}>CHAT</span>
        </div>
        <div
          className="link-btn"
          style={
            currentPage === "email"
              ? {
                  borderLeft: "5px solid #ff8715",
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
          auth.signOut();
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
    currentPage: state.dashboard.current_page,
    currentUser: state.user.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  setAdmin: (admin) => dispatch(setAdmin(admin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidepanel);
