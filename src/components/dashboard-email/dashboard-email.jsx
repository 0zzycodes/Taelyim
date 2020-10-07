import React from "react";
import "./dashboard-email.scss";

const DashboardEmail = () => {
  return (
    <div className="dashboard-email">
      <div className="head">
        <button className="btn compose" onClick={() => {}}>
          COMPOSE
        </button>
        <button className="btn draft" onClick={() => {}}>
          DRAFT <span>0</span>
        </button>
        <button className="btn sent" onClick={() => {}}>
          SENT <span>0</span>
        </button>
        <button className="btn trash" onClick={() => {}}>
          TRASH <span>0</span>
        </button>
      </div>
      <h4 className="mail-location">{"Inbox"}</h4>
      <div className="mail-container">
        <div className="mail-controls"></div>
      </div>
    </div>
  );
};

export default DashboardEmail;
