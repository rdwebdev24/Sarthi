import React, { useState } from "react";
import Home from "./Components/Home_/Home";
import Nav from "./Components/NavBar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error_/Error";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CourseDetail from "./Components/Courses/CourseDetail";
import CourseData from "./Components/Courses/CourseData.js";
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
          <Route path="/courseDetail/:id" element={<CourseDetail CourseData={CourseData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
