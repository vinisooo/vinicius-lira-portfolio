import { StyledContactMe } from "./styled";

import { Container } from "../../Styles/Container";
import { BtnDefault } from "../../Styles/Buttons";

import SectionNumber from "../SectionNum";


const ContactMe = () => {
    return(
        <StyledContactMe id="contact">
            <Container>
                <SectionNumber sectionTitle="Contatos" sectionNum="05" row={true} />
            </Container>
            <Container className="form-div" data-aos="fade-up">
                <div className="cta">
                    <h2>Vamos Conversar!😁</h2>
                    <p>Fique à vontade para entrar em contato comigo em qualquer rede social!</p>
                    <ul>
                        <li>{"+55 (47) 98863-8979"}</li>
                        <li>cviniciusliramdev@gmail.com</li>
                    </ul>
                </div>
                <form action="https://formsubmit.co/cviniciusliramdev@gmail.com" method="POST">
                    <input placeholder="Seu Nome" name="name"  data-aos="fade-up" data-aos-delay="50"/>
                    <input placeholder="Seu Email" name="email" data-aos="fade-up" data-aos-delay="150"/>
                    <textarea name="message" placeholder="Digite sua mensagem" data-aos="fade-up" data-aos-delay="250"/>
                    <BtnDefault type="submit">Enviar</BtnDefault>
                </form>
            </Container>
        </StyledContactMe>
    )
}

export default ContactMe
