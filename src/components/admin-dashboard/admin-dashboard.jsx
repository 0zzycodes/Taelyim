import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import doctors from "../../assets/dashboard/doctors.svg";
import patients from "../../assets/dashboard/patients.svg";
import attended from "../../assets/dashboard/attended.svg";
import pending from "../../assets/dashboard/pending.svg";
import "./admin-dashboard.scss";

const AdminDashboard = () => {
  const [data, setData] = useState([
    {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Male",
          backgroundColor: "#01b2c69a",
          data: [
            "20",
            "40",
            "22",
            "30",
            "40",
            "50",
            "50",
            "35",
            "22",
            "25",
            "27",
            "90",
          ],
        },
        {
          label: "Female",
          backgroundColor: "#e74524a9",
          data: [
            "50",
            "35",
            "22",
            "25",
            "27",
            "90",
            "50",
            "40",
            "60",
            "80",
            "40",
            "50",
          ],
        },
      ],
    },
  ]);
  const setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
    return gradient;
  };
  const getChartData = (canvas) => {
    if (data[0].datasets) {
      let colors = ["#01b2c69a", "#e74524a9"];
      data[0].datasets.forEach((set, index) => {
        set.backgroundColor = setGradientColor(canvas, colors[index]);
        // set.borderColor = "white"
      });
    }
    return data[0];
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-boxes">
        <div className="box-wrapper">
          <div className="box">
            <div className="box-icon">
              <img src={doctors} alt="doctor" />
            </div>
            <div className="box-text">
              <h3 className="num">{1627}</h3>
              <span className="txt">DOCTORS</span>
            </div>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="box">
            <div className="box-icon">
              <img src={patients} alt="patients" />
            </div>
            <div className="box-text">
              <h3 className="num">{1627}</h3>
              <span className="txt">PATIENTS</span>
            </div>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="box">
            <div className="box-icon">
              <img src={attended} alt="attended" />
            </div>
            <div className="box-text">
              <h3 className="num">{1627}</h3>
              <span className="txt">ATTENDED</span>
            </div>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="box">
            <div className="box-icon">
              <img src={pending} alt="pending" />
            </div>
            <div className="box-text">
              <h3 className="num">{1627}</h3>
              <span className="txt">PENDING</span>
            </div>
          </div>
        </div>
      </div>
      <div className="charts">
        <div className="chart-wrapper">
          <div className="chart">
            <h4>DOCTORS</h4>
            <Line
              options={{
                responsive: true,
              }}
              data={getChartData}
            />
          </div>
        </div>
        <div className="chart-wrapper">
          <div className="chart">
            <h4>PATIENTS</h4>
            <Line
              options={{
                responsive: true,
              }}
              data={getChartData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
