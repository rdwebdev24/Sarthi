import React from "react";
import "./CourseMain.css";
import CourseData from './CourseData.js'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CourseMain = () => {
  return (
    <div className="CourseMain">
      <h1 className="course-title">Courses</h1>
      <div className="card-container">
        {CourseData.map((item,index)=>{
          const {id,name,info,path,img} = item
          return (
            <Link to={`${path}/${id}`} key={id} className="card" style={{ width: "18rem" }} >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
               {info}
              </p>
            </div>
          </Link>
          )
        })}
      </div>
      
    </div>
  );
};

export default CourseMain;
