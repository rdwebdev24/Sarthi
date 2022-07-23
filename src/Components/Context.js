import { useContext } from "react";
import React, { useState } from 'react'
import Frontend from "./CourseName/Frontend_/Frontend";
import Backend from "./CourseName/Backend_/Backend";
import MAchineLearning from "./CourseName/MachineLearning/MAchineLearning";
import GraphicDesign from "./CourseName/GraphicDesign/GraphicDesign";
import AppDev from "./CourseName/AppDev/AppDev";
import Programming from "./CourseName/ProgrammingLanguages/Programming";

const AppContext = React.createContext();

const componentArray = [
     <Frontend/>,
     <Backend/>,
     <MAchineLearning/>,
     <GraphicDesign/>,
     <AppDev/>,
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