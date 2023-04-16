import { StyledAboutMe } from "./styled";
import { Container } from "../../Styles/Container";

import Card from "../Card";
import SectionNumber from "../SectionNum";

import lightBG from "../../assets/topoLight.png";
import darkBG from "../../assets/topoDark.jpg";

import { useContext, useState } from "react";
import { FunctionalitiesContext } from "../../context/FunctContext";


const AboutMe = () => {
    const { theme } = useContext(FunctionalitiesContext);
    const [ coWork, setCoWork ] = useState(false);
    
    return(
        <StyledAboutMe id="about-me">
            <Container>
                <SectionNumber color="var(--color-brand-3);" sectionNum="02" row={true} sectionTitle="sobre mim"></SectionNumber>
            </Container>
            <Container data-aos="fade-up">
                <div className="dev">
                    <figure>
                        <img src="https://github.com/vinisooo.png" alt="Vinícius Lira" />
                    </figure>
                    <Card title="Vinícius Lira" description="Desenvolvedor Front-end e Estudante de Desenvolvimento FullStack">
                        <span>1 ano codando</span>
                        <span>+20 projetos realizados</span>
                    </Card>
                </div>

                <div className="about-me-text">
                    <h2>Sobre mim</h2>
                    <p>Sou um desenvolvedor Full-Stack apaixonado desde os meus 11 anos de idade por design e tecnologia. Desde
                        que decidi focar os estudos em desenvolvimento web, tenho trabalhado incansavelmente para aperfeiçoar minhas habilidades
                        . Hoje, tenho experiência em criar websites e aplicações web responsivas e funcionais, com habilidades em HTML, CSS, JavaScript,
                        Typescript, React, NodeJS, Express Python e Django, além de diversas ferramentas
                        que auxiliam no desenvolvimento dos projetos. Além disso, sou familiarizado com ferramentas de design, o que me permite criar layouts
                        e interfaces visuais atraentes. 
                    </p>
                    <p>
                        Estou sempre em busca de novos desafios e oportunidades para trabalhar em projetos em equipe e colaborar com outros profissionais da área. 
                        <a href="#contact" onMouseEnter={() => setCoWork(true)} onMouseLeave={() => setCoWork(false)}>
                            Vamos trabalhar juntos {coWork ? "!" : "?"}
                        </a>
                    </p>
                </div>
            </Container>
            <footer>
                <img src={theme === "light" ? lightBG : darkBG} />
            </footer>
        </StyledAboutMe>
    )
}

export default AboutMe
