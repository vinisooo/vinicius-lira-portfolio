import { StyledAside } from "./styled";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import { useContext } from "react";
import { FunctionalitiesContext } from "../../context/FunctContext";

const Aside = () => {

    const { theme, handleTheme } = useContext(FunctionalitiesContext);

    return(
        <StyledAside>
            <button onClick={handleTheme}>
                <img src={theme === "light" ? sun : moon}/>
            </button>
            
            <div className="links">
                <div>
                    <a href="">01</a>
                    <span>Início</span>
                </div>
                <div>
                    <a href="">02</a>
                    <span>Sobre mim</span>
                </div>
                <div>
                    <a href="">03</a>
                    <span>Tecnologias</span>
                </div>
                <div>
                    <a href="">04</a>
                    <span>Contato</span>
                </div>
            </div>
            <div className="social-medias">
                <a href="https://github.com/vinisooo" target="_blank">
                    <img src={github} alt="" />
                </a>
                
                <a href="https://www.linkedin.com/in/vin%C3%ADcius-lira-a6294b244/" target="_blank">
                    <img src={linkedin} alt="" />
                </a>

            </div>
        </StyledAside>
    )
}

export default Aside