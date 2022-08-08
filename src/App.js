import React, { useState } from "react";
import Home from "./Components/Home_/Home";
import Nav from "./Components/NavBar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error_/Error";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CourseDetail from "./Components/Courses/CourseDetail";
import CourseData from "./Components/Courses/CourseData.js";
import Frontend from "./Components/CourseName/Frontend_/Frontend"
import Backend from "./Components/CourseName/Backend_/Backend"
import MAchineLearning from "./Components/CourseName/MachineLearning/MAchineLearning"
import AppDev from "./Components/CourseName/AppDev/AppDev"
import GraphicDesign from "./Components/CourseName/GraphicDesign/GraphicDesign"
import Programming from "./Components/CourseName/ProgrammingLanguages/Programming"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/machineLearning" element={<MAchineLearning />} />
          <Route path="/appdev" element={<AppDev />} />
          <Route path="/graphicDesign" element={<GraphicDesign />} />
          <Route path="/Languages" element={<Programming />} /> */}
          <Route path="/courseDetail/:id" element={<CourseDetail CourseData={CourseData}/>} />
        </Routes>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
