import React from "react";
// import { Link } from "react-router-dom";
// import footerPattern from '../../assets/footerPattern.svg';
import "./footer.scss";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="copyright">&copy; Taelyim {year}</p>
    </footer>
  );
};

export default Footer;
