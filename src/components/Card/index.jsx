import { StyledCard } from "./styled";
import lightBG from "../../assets/topoLight.png";
import darkBG from "../../assets/topoDark.jpg";

import { useContext } from "react";
import { FunctionalitiesContext } from "../../context/FunctContext";

const Card = ({children, title, description}) => {

    const { theme } = useContext(FunctionalitiesContext); 

    return(
        <StyledCard>
            <div className="left-img">
                <img src={theme === "light" ? lightBG : darkBG} />
            </div>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
                <div>
                    {children}
                </div>
            </div>
        </StyledCard>
    )
 
}

export default Card