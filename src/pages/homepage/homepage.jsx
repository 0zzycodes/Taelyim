import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import start from "../../assets/angle-double-right.svg";
import flutter from "../../assets/flutter.png";
import rating from "../../assets/rating.svg";
// import { firestore } from '../../firebase/firebase.utils';
import "./homepage.scss";
import CoursePreview from "../../components/course-preview/course-preview";

class Homepage extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <div className="homepage">
        <Helmet>
          <title>Taelyim</title>
          <meta property="og:title" content="Taelyim" />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="Taelyim" />
          <meta property="og:url" content="https://www.taelyim.com" />
        </Helmet>
        <section className="hero">
          <div className="hero_content">
            <h1>
              An <br /> Outstanding <br /> Place For Better{" "}
              <span>Education</span>
            </h1>
            <Link to="/auth/register" className="get_started">
              GET STARTED
              <button>
                <img src={start} alt="arrow" />
              </button>
            </Link>
          </div>
        </section>
        <section className="courses">
          <div className="heading">
            <h2>Courses</h2>
          </div>
          <div className="courses-nav">
            <ul>
              <li style={{ color: "#fda82b" }}>FREE</li>
              <li className="paid">PAID</li>
              <li>DISCOUNT</li>
            </ul>
          </div>
          <div className="courses_container">
            <CoursePreview
              data={{
                imageUrl: flutter,
                title: "Flutter Developer Tutorial Bootcamp 2020",
                instructor: "Ozzycodes",
                duration: "5h 20m",
                price: 90,
                rating: rating,
                category: "Programming",
                nos: 100,
              }}
            />
            <CoursePreview
              data={{
                imageUrl: flutter,
                title: "Flutter Developer Tutorial Bootcamp 2020",
                instructor: "Ozzycodes",
                duration: "5h 20m",
                price: 90,
                rating: rating,
                category: "Programming",
                nos: 100,
              }}
            />
            <CoursePreview
              data={{
                imageUrl: flutter,
                title: "Flutter Developer Tutorial Bootcamp 2020",
                instructor: "Ozzycodes",
                duration: "5h 20m",
                price: 90,
                rating: rating,
                category: "Programming",
                nos: 100,
              }}
            />
            <CoursePreview
              data={{
                imageUrl: flutter,
                title: "Flutter Developer Tutorial Bootcamp 2020",
                instructor: "Ozzycodes",
                duration: "5h 20m",
                price: 90,
                rating: rating,
                category: "Programming",
                nos: 100,
              }}
            />
            <CoursePreview
              data={{
                imageUrl: flutter,
                title: "Flutter Developer Tutorial Bootcamp 2020",
                instructor: "Ozzycodes",
                duration: "5h 20m",
                price: 90,
                rating: rating,
                category: "Programming",
                nos: 100,
              }}
            />
            <CoursePreview
              data={{
                imageUrl: flutter,
                title: "Flutter Developer Tutorial Bootcamp 2020",
                instructor: "Ozzycodes",
                duration: "5h 20m",
                price: 90,
                rating: rating,
                category: "Programming",
                nos: 100,
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(Homepage);
