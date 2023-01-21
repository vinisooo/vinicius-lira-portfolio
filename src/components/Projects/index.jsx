import { Container } from "../../Styles/Container";
import Card from "../Card";
import SectionNumber from "../SectionNum";
import { StyledProjects } from "./styled";

import { projects } from "../../data/Projects";
import { useState } from "react";

const Projects = () => {

    const toggleReverse = (num) => {
        if ( num % 2 !== 0){
            return "reverse-align"
        }
    }

    return(
        <StyledProjects>
            <Container data-aos="fade-up">
                <div className="projects-list">
                    <h2>Projetos favoritos</h2>
                    <ul>
                        {
                            projects.map((pr, index) => {
                                return(
                                    <li className={toggleReverse(index)} key={index} data-aos="fade-up" data-aos-delay="50">
                                        <figure>
                                            <img src={pr.gif || "https://thumbs.dreamstime.com/b/error-page-not-found-ghost-cartoon-cute-111529535.jpg"} alt={pr.name} />
                                        </figure>
                                        <Card title={pr.name} description={pr.description}>
                                            <a target="_blank" href={pr.repo}>Ver repositório</a>
                                            <a target="_blank" href={pr.access}>Acessar projeto</a>
                                        </Card>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <SectionNumber sticky={true} sectionNum="4" sectionTitle="Projetos" color="var(--color-brand-1)"></SectionNumber>
            </Container>
        </StyledProjects>
    )
}

export default Projects