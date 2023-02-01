import { StyledTech } from "./styled";

import SectionNumber from "../SectionNum";
import { Container } from "../../Styles/Container";

import { techData } from "../../data/Technologies";
import { useState } from "react";

const Technologies = () => {

    const [ techDescription, setTechDescription ] = useState("");

    return(
        <StyledTech id="technologies">
            <Container data-aos="fade-up">
                <SectionNumber sectionNum="03" sectionTitle="Tecnologias" color="var(--color-brand-1)" />
                <div className="technologies">
                    <h2>Tecnologias</h2>
                    <ul>
                        {
                            techData.map((tech, index) => {
                                return (
                                    <li data-aos="fade-right" data-aos-delay={`${index * 75}`} onMouseLeave={()=> setTechDescription("")} onMouseEnter={()=>setTechDescription(tech.description)} key={index}>
                                        <figure>
                                            <img src={tech.img} alt={tech.name} />
                                        </figure>
                                        <h4>{tech.name}</h4>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <p>{techDescription}</p>
                    
                </div>
            </Container>
        </StyledTech>
    )
}

export default Technologies