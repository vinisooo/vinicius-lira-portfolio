import { StyledNav } from "./styled";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import { useContext } from "react";
import { FunctionalitiesContext } from "../../context/FunctContext";

const NavDesk = () => {

    const { theme, handleTheme } = useContext(FunctionalitiesContext);

    return(
        <StyledNav>
            <button onClick={handleTheme}>
                <img src={theme === "light" ? sun : moon}/>
            </button>
            
            <ul>
                <li data-aos="fade-right">
                    <a href="#header">01</a>
                    <span>Início</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="100">
                    <a href="#about-me">02</a>
                    <span>Sobre mim</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="200">
                    <a href="#technologies">03</a>
                    <span>Tecnologias</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="300">
                    <a href="#projects">04</a>
                    <span>Projetos</span>
                </li>
                <li data-aos="fade-right" data-aos-delay="400">
                    <a href="#contact">05</a>
                    <span>Contato</span>
                </li>
            </ul>
            <footer data-aos="fade-up">
                <a href="https://github.com/vinisooo" target="_blank">
                    <img src={github}/>
                </a>
                
                <a href="https://www.linkedin.com/in/vin%C3%ADcius-lira-a6294b244/" target="_blank">
                    <img src={linkedin} />
                </a>

            </footer>
        </StyledNav>
    )
}

export default NavDesk