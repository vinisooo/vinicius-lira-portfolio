import { StyledCard } from "./styled";
import lightBG from "../../assets/topoLight.png";
import darkBG from "../../assets/topoDark.jpg";

const Card = ({children, title, description}) => {

    return(
        <StyledCard>
            <figure>
                <img src={darkBG} />
            </figure>
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