import { StyledMobMenu } from "./styled";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import { useContext } from "react";
import { FunctionalitiesContext } from "../../context/FunctContext";

import { useEffect } from "react";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const MobMenu = () => {
    const { theme, handleTheme, mobileMenu, setMobileMenu } = useContext(FunctionalitiesContext);

    const handleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    mobileMenu ? disableBodyScroll(document) : enableBodyScroll(document);

    useEffect(() =>{
        const clickOutToClose = (e) => {
            if(e.target.className === "menu-bg"){
                setMobileMenu(!mobileMenu)
            }
        }
        document.addEventListener("click", clickOutToClose)
    })
    return(
        <StyledMobMenu>
            <button onClick={handleMenu} className={mobileMenu ? "open-menu" : ""}>
                <span className="bar-1"></span>
                <span className="bar-2"></span>
            </button>
            {
                mobileMenu &&
                <div className="menu-bg">
                    <nav>
                        <button onClick={handleTheme}>
                            Mudar tema
                            <img src={theme === "light" ? sun : moon} />
                        </button>
                        <ul>
                            <li data-aos="fade-up">
                                <a onClick={handleMenu} href="#header">
                                    <span>Início</span>
                                    - 01
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="75">
                                <a onClick={handleMenu} href="#about-me">
                                    <span>Sobre Mim</span>
                                    - 02
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="150">
                                <a onClick={handleMenu} href="#technologies">
                                    <span>Tecnologias</span>
                                    - 03
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="225">
                                <a onClick={handleMenu} href="#projects">
                                    <span>Projetos</span>
                                    - 04
                                </a>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300">
                                <a onClick={handleMenu} href="#contact">
                                    <span>Contato</span>
                                    - 05
                                </a>
                            </li>
                        </ul>
                        <footer>
                            <a href="https://github.com/vinisooo" target="_blank">
                                <img src={github} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/vin%C3%ADcius-lira-a6294b244/" target="_blank">
                                <img src={linkedin} alt="" />
                            </a>
                        </footer>
                    </nav>
                </div>
            }
        </StyledMobMenu>
    )
}

export default MobMenu
