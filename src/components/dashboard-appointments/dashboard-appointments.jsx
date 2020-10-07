import React from "react";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import "./dashboard-appointments.scss";

const DashboardAppointments = () => {
  const data = [
    {
      id: 1,
      patient_Name: "Leonanie Mountfort",
      age: 26,
      email: "lmountfort0@t-online.de",
      gender: "Female",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
    {
      id: 2,
      patient_Name: "Iosep Anand",
      age: 49,
      email: "ianand1@digg.com",
      gender: "Male",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
    {
      id: 3,
      patient_Name: "Leonanie Mountfort",
      age: 26,
      email: "lmountfort0@t-online.de",
      gender: "Female",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
    {
      id: 4,
      patient_Name: "Iosep Anand",
      age: 49,
      email: "ianand1@digg.com",
      gender: "Male",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
    {
      id: 5,
      patient_Name: "Leonanie Mountfort",
      age: 26,
      email: "lmountfort0@t-online.de",
      gender: "Female",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
    {
      id: 6,
      patient_Name: "Iosep Anand",
      age: 49,
      email: "ianand1@digg.com",
      gender: "Male",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
    {
      id: 7,
      patient_Name: "Leonanie Mountfort",
      age: 26,
      email: "lmountfort0@t-online.de",
      gender: "Female",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
    {
      id: 8,
      patient_Name: "Iosep Anand",
      age: 49,
      email: "ianand1@digg.com",
      gender: "Male",
      doctor_Name: "Sarah Ali",
      department: "Cardiology",
      date: "30 Dec 2018",
      time: "10:00am - 11:00am",
    },
  ];
  return (
    <div className="dashboard-appointments">
      <ReactFlexyTable
        data={data}
        sortable
        // filterable
        className="custom-table"
      />
    </div>
  );
};

export default DashboardAppointments;
