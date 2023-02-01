import NavDesk from './components/NavDesk';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import MobMenu from './components/MobMenu';

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
    AOS.init({
      duration: 1200,
      once: true
    })
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light"? lightTheme : darkTheme}>
        <MobMenu/>
        <NavDesk/>
        <Header/>
        <AboutMe/>
        <Technologies/>
        <Projects/>
        <ContactMe/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;  
