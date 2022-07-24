import React, { useState } from "react";
import "./Contact.css";
import contact from "../Context";
import { useRef } from "react";
import ContactWhatsup from "./ContactWhatsup";
const Contact = () => {
  const [show,setShow] = useState(true)
  function display_form(){
    setShow(!show)
  }
  return (
    <div className="Contact container">
      <div className="contact-container">
        <ContactWhatsup show={show} setShow={setShow}/>
        <h1 className="course-title">Contact</h1>
        <div className="card-container">
        {contact.map((item)=>{
          const {id,name,info,link,icon,type} = item
          return (
            <div key={id} className="card">
            <div className="card-body">
              <h5 className="card-title">
               {/* <i class={`fa fa-${icon}`} aria-hidden="true"></i>  */}
                <span className="icon">{icon}</span>
                <span>{name}</span>
               </h5>
              <p className="card-text">{info}</p>
              <a onClick={()=>display_form()} href={link} className={`btn btn-${type}`} target={`${id!=1?"_blank":""}`}>
                {info.split(' ')[0]}
              </a>
            </div>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
