import { StyledAboutMe } from "./styled";
import { Container } from "../../Styles/Container";
import Card from "../Card";
import SectionNumber from "../SectionNum";

const AboutMe = () => {

    return(
        <StyledAboutMe>
            <Container>
                <SectionNumber color="var(--color-brand-3);" sectionNum="02" row={true} sectionTitle="sobre mim"></SectionNumber>
            </Container>
            <Container>
                <div className="dev">
                    <figure>
                        <img src="https://github.com/vinisooo.png" alt="Vinícius Lira" />
                    </figure>
                    <Card title="Vinícius Lira" description="Desenvolvedor FrontEnd e Estudante de Desenvolvimento FullStack">
                        <span>± 1 ano codando</span>
                        <span>+30 projetos realizados</span>
                    </Card>
                </div>

                <div className="about-me-text">
                    <h2>Sobre mim</h2>
                    <p>Sou um desenvolvedor front-end apaixonado desde os meus 10 anos de idade por design e tecnologia. Desde
                        que decidi focar os estudos em desenvolvimento web, tenho trabalhado incansavelmente para aperfeiçoar minhas habilidades
                        e me manter atualizado com as últimas tendências e ferramentas. Hoje, tenho experiência em criar websites e aplicativos
                        web responsivos e funcionais, com habilidades em HTML, CSS, JavaScript, Typescript e React, além de diversas ferramentas
                        que auxiliam no desenvolvimento de aplicações. Além disso, sou familiarizado com ferramentas de design, o que me permite criar layouts
                        e interfaces visuais atraentes.
                    </p>
                    <p>
                        Estou sempre em busca de novos desafios e oportunidades para trabalhar em projetos em equipe e colaborar com outros profissionais da área. Vamos trabalhar juntos?
                    </p>
                </div>
            </Container>
        </StyledAboutMe>
    )
}

export default AboutMe
