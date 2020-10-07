import React from "react";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import "./dashboard-payroll.scss";

const DashboardPayroll = () => {
  const data = [
    {
      id: 1,
      doctor_Name: "Sarah Ali",
      email: "lmountfort0@t-online.de",
      gender: "Female",
      department: "Cardiology",
      salary: 10000,
      date: "30 Dec 2018",
    },
  ];
  return (
    <div className="dashboard-payroll">
      <ReactFlexyTable
        data={data}
        sortable
        // filterable
        className="custom-table"
      />
    </div>
  );
};

export default DashboardPayroll;
