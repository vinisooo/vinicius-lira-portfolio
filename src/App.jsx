import logo from './logo.svg';
import Aside from './components/Aside';
import Header from './components/Header';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./Styles/Themes";
import AboutMe from './components/AboutMe';

import { useContext } from 'react';
import { FunctionalitiesContext } from './context/FunctContext';

const App = () => {

  const {theme, handleTheme } = useContext(FunctionalitiesContext);

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
        <Aside/>
        <Header />
        <AboutMe/>
      </ThemeProvider>
    </div>
  );
}

export default App;  
