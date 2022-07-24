import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../../Context";
import "./Frontend.css";
import FrontendData from "./FrontendData.js";
const Frontend = () => {
  const {value} = useGlobalContext()
  const cont = useRef()
  useEffect(()=>{
    cont.current.innerHTML = FrontendData[value].data  // value jo hai courseDetail component se aa rahi hai 
  },[value])
  return (
    <div ref={cont} className="Frontend-container">
     
    </div>
  );
};

export default Frontend;

