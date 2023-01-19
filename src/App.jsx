import logo from './logo.svg';
import Aside from './components/Aside';
import Header from './components/Header';
import Technologies from './components/Technologies';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./Styles/Themes";
import AboutMe from './components/AboutMe';

import { useContext, useEffect } from 'react';
import { FunctionalitiesContext } from './context/FunctContext';

const App = () => {
  const {theme, handleTheme } = useContext(FunctionalitiesContext);

  useEffect(()=>{
    AOS.init({ duration: 1200 })
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
        <Aside/>
        <Header />
        <AboutMe/>
        <Technologies/>
      </ThemeProvider>
    </div>
  );
}

export default App;  
