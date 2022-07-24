import { useContext } from "react";
import React, { useState } from 'react'
import Frontend from "./CourseName/Frontend_/Frontend";
import Backend from "./CourseName/Backend_/Backend";
import MAchineLearning from "./CourseName/MachineLearning/MAchineLearning";
import GraphicDesign from "./CourseName/GraphicDesign/GraphicDesign";
import AppDev from "./CourseName/AppDev/AppDev";
import Programming from "./CourseName/ProgrammingLanguages/Programming";
import {BsWhatsapp} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const AppContext = React.createContext();

const componentArray = [
     <Frontend/>,
     <Backend/>,
     <AppDev/>,
     <MAchineLearning/>,
     <GraphicDesign/>,
     <Programming/>
]




const AppProvider = ({children}) =>{
  const [value,setValue] = useState(0)

     return <AppContext.Provider value={{
          setValue,
          value
     }}>
          {children}
     </AppContext.Provider>
}

const useGlobalContext = () =>{
     return useContext(AppContext)
}

export {AppContext,AppProvider, useGlobalContext,componentArray}


// CONTACT //

const contact = [
     {
          id:1,
          name:"Whatsup",
          info:"Message on whatsup",
          link:"#",
          icon:<BsWhatsapp/>,
          type:"success"
     },
     {
          id:2,
          name:"Linkedin",
          info:"Connect on Linkedin",
          link:"https://www.linkedin.com/in/rohit-dhakad-15b618236/",
          icon:<BsLinkedin/>,
          type:"primary"
     },
     {
          id:3,
          name:"Twitter",
          info:"Follow on Twitter",
          link:"https://twitter.com/Rohitdh58773632",
          icon:<BsTwitter/>,
          type:"info"
     },
     {
          id:4,
          name:"Github",
          info:"Follow on github",
          link:"https://github.com/rdwebdev24",
          icon:<BsGithub/>,
          type:"dark"
     },
]

export default contact