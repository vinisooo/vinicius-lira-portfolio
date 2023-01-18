import React, { createContext, useContext, useState } from "react";

export const FunctionalitiesContext = useContext({});

const FunctionalitiesProvider = ({children}) => {

    const [ theme, setTheme ] = useState(localStorage.getItem("@vinicius-lira: theme-preference") || "light");

    const handleTheme = () =>{
      const savedTheme = theme === "light" ? "dark" : "light";
      setTheme(savedTheme);
      localStorage.setItem("@vinicius-lira: theme-preference", savedTheme);
    }

    return(
        <FunctionalitiesContext.Provider value={{theme, handleTheme}}>
            {children}
        </FunctionalitiesContext.Provider>
    )
}

export default FunctionalitiesProvider