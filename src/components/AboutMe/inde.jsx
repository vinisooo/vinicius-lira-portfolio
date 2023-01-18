import { StyledAboutMe } from "./styled";
import { Container } from "../../Styles/Container";
import Card from "../Card";

const AboutMe = () => {

    return(
        <StyledAboutMe>
            <Container>
                <Card>
                    <span>span 1</span>
                    <span>span 2</span>
                </Card>
            </Container>
        </StyledAboutMe>
    )
}

export default AboutMe
