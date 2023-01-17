import logo from './logo.svg';
import Aside from './components/Aside';
import Header from './components/Header';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./Styles/Themes";
import { useState } from 'react';

const App = () => {

  const [ theme, setTheme ] = useState("dark");

  const handleTheme = () =>{
    setTheme( theme === "light" ? "dark" : "light");
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
        <Aside changeThemeFunction={handleTheme} theme={theme} />
        <Header theme={theme} />
      </ThemeProvider>
    </div>
  );
}

export default App;  
