import React, { useState } from "react";
import CustomHero from "../../components/custom-hero/custom-hero";
import FormSelect from "../../components/form-select/form-select";
import CoursePreview from "../../components/course-preview/course-preview";
import flutter from "../../assets/flutter.png";
import rating from "../../assets/rating.svg";
import "./courses.scss";
const Courses = () => {
  const [filter, setFilter] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter({
      [name]: value,
    });
  };
  return (
    <div className="courses_page">
      <CustomHero title="Courses" />
      <main className="courses_page_container">
        <section className="side">
          <div className="head_block">
            <h3>All Courses</h3>
            <span className="course_count">{0}</span>
          </div>
          <div className="course_categories">
            <span className="categories_heading">Course Categories</span>
            <ul className="categories">
              <li className="category">
                <div className="radio">
                  {" "}
                  <div className="dot"></div>
                </div>
                TECHNOLOGY <span className="course_count">0</span>
              </li>
              <li className="category">
                <div className="radio"></div>
                TECHNOLOGY <span className="course_count">0</span>
              </li>
              <li className="category">
                <div className="radio"></div>
                TECHNOLOGY <span className="course_count">0</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="main">
          <div className="main_nav">
            <ul className="main_nav_links">
              <li className="main_nav_link">ALL</li>
              <li className="main_nav_link">FREE</li>
              <li className="main_nav_link">PAID</li>
              <li className="main_nav_link">DISCOUNT</li>
            </ul>
            <FormSelect
              name="filter"
              value={filter}
              opt="Most Recent"
              handleChange={handleChange}
              options={["Most Porpular", "Most Rated"]}
            />
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Courses;
