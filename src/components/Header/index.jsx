import lightBG from "../../assets/topoLight.png";
import darkBG from "../../assets/topoDark.jpg";

import { StyledHeader } from './styled';

const Header = ({theme}) => {

    return(
        <StyledHeader bgImg={ theme === "light" ? lightBG : darkBG}>
            <div>
                
            </div>
        </StyledHeader>
    )
}

export default Header