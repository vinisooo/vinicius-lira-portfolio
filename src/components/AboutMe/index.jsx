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
                    <Card data-aos="fade-up" data-aos-delay="100" title="Vinícius Lira" description="Engenheiro de Software">
                        {/* <span>3 anos codando</span>
                        <span>+30 projetos realizados</span> */}
                    </Card>
                </div>
                <div className="about-me-text">
                    <h2>Sobre mim</h2>
                    <p>
                        Sou Desenvolvedor e Engenheiro de Software apaixonado por criar soluções tecnológicas eficientes e visualmente atrativas.
                        Tenho sólida experiência em desenvolvimento web, back-end, mobile e UI/UX, focando sempre em qualidade e performance ao longo dos projetos.
                    </p>
                    <p>
                        Atuo com tecnologias modernas como JavaScript, TypeScript, React, Angular, NextJS, Node.js, NestJS, e bancos de dados como PostgreSQL e MySQL.
                        Também possuo experiência com desenvolvimento mobile usando Flutter, Ionic, e Kotlin, além de práticas em DevOps com Docker, AWS e versionamento com Git.
                        Sou fluente em metodologias ágeis como Scrum e mantenho uma abordagem colaborativa em equipe.
                    </p>
                    <p>
                        Estou sempre em busca de novos desafios e oportunidades para construir soluções impactantes e colaborar com outros profissionais da área.
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
