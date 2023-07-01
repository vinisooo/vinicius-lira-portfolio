import React, { createContext, useState } from "react";

export const FunctionalitiesContext = createContext({});

const FunctionalitiesProvider = ({children}) => {
    const [ theme, setTheme ] = useState(localStorage.getItem("@vinicius-lira: theme-preference") || "dark");
    const [ mobileMenu, setMobileMenu ] = useState(false);

    const handleTheme = () =>{
      const savedTheme = theme === "light" ? "dark" : "light";
      setTheme(savedTheme);
      localStorage.setItem("@vinicius-lira: theme-preference", savedTheme);
    }

    return(
        <FunctionalitiesContext.Provider value={{theme, handleTheme, mobileMenu, setMobileMenu}}>
            {children}
        </FunctionalitiesContext.Provider>
    )
}

export default FunctionalitiesProvider;
