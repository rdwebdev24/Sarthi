import { useContext } from "react";
import React, { useState } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
     return <AppContext.Provider value="hello">
          {children}
     </AppContext.Provider>
}

const useGlobalContext = () =>{
     return useContext(AppContext)
}

export {AppContext,AppProvider}