import { StyledCard } from "./styled";
import lightBG from "../../assets/topoLight.png";
import darkBG from "../../assets/topoDark.jpg";

const Card = ({children}) => {

    return(
        <StyledCard>
            <figure>
                <img src={darkBG} />
            </figure>
            <div>
                <h4>Nome do coiso</h4>
                <p>Descrição</p>
                <div>
                    {children}
                </div>
            </div>
        </StyledCard>
    )

}

export default Card