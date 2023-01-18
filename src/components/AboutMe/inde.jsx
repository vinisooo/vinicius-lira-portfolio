import { StyledAboutMe } from "./styled";
import { Container } from "../../Styles/Container";
import Card from "../Card";

const AboutMe = () => {

    return(
        <StyledAboutMe>
            <Container>
                <div className="dev">
                    <figure>
                        <img src="https://github.com/vinisooo.png" alt="Vinícius Lira" />
                    </figure>
                    <Card>
                        <span>span 1</span>
                        <span>span 2</span>
                    </Card>
                </div>
            </Container>
        </StyledAboutMe>
    )
}

export default AboutMe
