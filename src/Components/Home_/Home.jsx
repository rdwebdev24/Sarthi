import React from "react";
import CourseMain from "../Courses/CourseMain";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="Home wrapper">
        <div className="home-content">
        <h1>Sa<span className="rath">r</span>thi</h1>
        <p className="home-para">Clear your path for learning</p>
        </div>
      </div>
      <CourseMain />
    </>
  );
};

export default Home;
