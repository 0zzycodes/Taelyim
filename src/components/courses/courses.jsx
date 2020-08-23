import React, { useState } from "react";
import FormSelect from "../../components/form-select/form-select";
import CoursePreview from "../../components/course-preview/course-preview";
import flutter from "../../assets/flutter.png";
import rating from "../../assets/rating.svg";
import CustomHero from "../custom-hero/custom-hero";
const CoursesContainer = () => {
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("technology");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const handleSelect = (value) => {
    setSelectedCategory(value);
  };
  return (
    <>
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
              <li
                className="category"
                onClick={handleSelect.bind(this, "technology")}
              >
                <div className="radio">
                  {" "}
                  {selectedCategory === "technology" && (
                    <div className="dot"></div>
                  )}
                </div>
                TECHNOLOGY <span className="course_count">0</span>
              </li>
              <li
                className="category"
                onClick={handleSelect.bind(this, "mathematics")}
              >
                <div className="radio">
                  {selectedCategory === "mathematics" && (
                    <div className="dot"></div>
                  )}
                </div>
                MATHEMATICS <span className="course_count">0</span>
              </li>
              <li
                className="category"
                onClick={handleSelect.bind(this, "english")}
              >
                <div className="radio">
                  {selectedCategory === "english" && (
                    <div className="dot"></div>
                  )}
                </div>
                ENGLISH <span className="course_count">0</span>
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
    </>
  );
};

export default CoursesContainer;
