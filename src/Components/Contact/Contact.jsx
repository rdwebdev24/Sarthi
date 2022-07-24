import React, { useState } from "react";
import "./Contact.css";
import contact from "../Context";
import { useRef } from "react";
const Contact = () => {
 
  function send_handle(id){
    if(id==1){
      window.open(`https://api.whatsapp.com/send?phone=${+918449864328}&text=Hi"`);
    }
  }
  return (
    <div className="Contact wrapper">
      <div className="contact-container">
        <h1 className="course-title">Contact</h1>
        <div className="card-container contact-card-container">
        {contact.map((item)=>{
          const {id,name,info,link,icon,type} = item
          return (
            <div key={id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                <span className={`icon text-${type}`}>{icon}</span>
                <span className={`text-${type}`}>{name}</span>
               </h5>
              <p className="card-text">{info}</p>
              <a onClick={()=>send_handle(id)} href={link} className={`btn btn-${type}`} target={`${id!=1?"_blank":""}`}>
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
