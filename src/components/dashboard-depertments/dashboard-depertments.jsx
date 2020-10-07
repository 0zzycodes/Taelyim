import React from "react";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import "./dashboard-depertments.scss";

const DashboardDepertments = () => {
  const data = [
    {
      id: 1,
      Depertment_Name: "Cardiology",
      status: "Active",
      No_Of_Doctors: 4,
    },
    {
      id: 2,
      Depertment_Name: "Dentist",
      status: "Active",
      No_Of_Doctors: 4,
    },
    {
      id: 3,
      Depertment_Name: "Neurology",
      status: "Active",
      No_Of_Doctors: 4,
    },
    {
      id: 4,
      Depertment_Name: "Orthopedics",
      status: "Active",
      No_Of_Doctors: 4,
    },
    {
      id: 5,
      Depertment_Name: "Opthalmology",
      status: "Active",
      No_Of_Doctors: 4,
    },
  ];
  return (
    <div className="dashboard-depertments">
      <ReactFlexyTable
        data={data}
        sortable
        // filterable
        className="custom-table"
      />
    </div>
  );
};

export default DashboardDepertments;
