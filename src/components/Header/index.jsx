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
        <StyledHeader id="header" bgImg={ theme === "light" ? lightBG : darkBG}>
            <div>
                <Container data-aos="fade-up">
                    <SectionNumber sectionNum="01" sectionTitle="Início" color="var(--color-brand-1)"/>

                    <div className="greetings">
                        <div>
                            <span>Olá!👋 meu nome é </span>
                            <h1>Vinícius Lira</h1>
                        </div>

                        <p>Desenvolvedor Front-end</p>
                        <LinkDefault target="_blank" href="https://drive.google.com/file/d/1x1EBWuns5XjEU6EsM8Ht6O5AjMwF6r_L/view?usp=sharing">
                            Baixar Curriculum
                            <img src={downloadIcon} />
                        </LinkDefault>

                    </div>
                    <span>Manaus - AM - 2004</span>
                </Container>
            </div>
        </StyledHeader>
    )
}

export default Header