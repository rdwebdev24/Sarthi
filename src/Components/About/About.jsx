import React from "react";
import "./About.css";
import rohit from "../../images/rohit.jpg";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="About wrapper">
      <div className="about-content">
      <h1>About</h1>
          <p>
            If you want to learn something you always first do some research
            like you ask your friends your seniors, how to start from where to
            learn which course is best or you tube is best , so this website
            already do a lots of research and then put all the best content from
            where you can start learning without wandering here and there{" "}
          </p>
          <p><b>Visit Website</b> <a href="https://rdwebdev.vercel.app/">https://rdwebdev.vercel.app/</a></p>
      </div>
    </div>
  );
};

export default About;
