import { StyledMobMenu } from "./styled";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const MobMenu = () => {
    return(
        <StyledMobMenu>
            <button className="open-menu">
                <span className="bar-1"></span>
                <span className="bar-2"></span>
            </button>
            <div>
                <nav>
                    <button>
                        Mudar tema
                        <img src={sun} />
                    </button>
                    <ul>
                        <li>
                            <a href="#header">
                                <span>Início</span>
                                - 01
                            </a>
                        </li>
                        <li>
                            <a href="#header">
                                <span>Início</span>
                                - 01
                            </a>
                        </li>
                        <li>
                            <a href="#header">
                                <span>Início</span>
                                - 01
                            </a>
                        </li>
                        <li>
                            <a href="#header">
                                <span>Início</span>
                                - 01
                            </a>
                        </li>
                        <li>
                            <a href="#header">
                                <span>Início</span>
                                - 01
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
        </StyledMobMenu>
    )
}

export default MobMenu