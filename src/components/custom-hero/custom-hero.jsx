import React from "react";
import { Helmet } from "react-helmet";
import arrowDown from "../../assets/arrow-down.svg";
import "./custom-hero.scss";
const CustomHero = ({ title }) => {
  return (
    <div className="custom_hero">
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={`https://www.taelyim.com/${title}`} />
      </Helmet>
      <section className="hero">
        <div className="hero_content">
          <h1>{title}</h1>
          <button>
            <img src={arrowDown} alt="arrow" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomHero;
