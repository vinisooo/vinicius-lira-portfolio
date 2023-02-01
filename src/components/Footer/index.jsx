import { Container } from "../../Styles/Container"
import { StyledFooter } from "./styled"

const Footer = () => {

    return(
        <StyledFooter>
            <Container data-aos="flip-left">
                <h3>Até mais!👋</h3>
                <p>{"Muito obrigado pela atenção ;)"}</p>
            </Container>
        </StyledFooter>
    )

}

export default Footer