import lightBG from "../../assets/topoLight.png";
import darkBG from "../../assets/topoDark.jpg";
import downloadIcon from "../../assets/downloadIcon.svg";

import { LinkDefault } from "../../Styles/Buttons";
import { Container } from "../../Styles/Container";
import { StyledHeader } from './styled';

import SectionNumber from "../SectionNum";

import { useContext } from "react";
import { FunctionalitiesContext } from "../../context/FunctContext";

const Header = () => {

    const { theme } = useContext(FunctionalitiesContext);

    return(
        <StyledHeader bgImg={ theme === "light" ? lightBG : darkBG}>
            <div>
                <Container>
                    <SectionNumber sectionNum="01" sectionTitle="Início" color="var(--color-brand-1)"/>

                    <div className="greetings">
                        <h1>
                            <span>Olá! meu nome é </span>
                            Vinícius Lira
                        </h1>
                        <p>Desenvolvedor Frontend</p>
                        <LinkDefault href="">
                            Baixar Curriculum
                            <img src={downloadIcon} />
                        </LinkDefault>

                    </div>
                    <span>Manaus - AM - 2023</span>
                </Container>
            </div>
        </StyledHeader>
    )
}

export default Header