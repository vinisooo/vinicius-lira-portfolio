import { StyledContactMe } from "./styled";
import { Container } from "../../Styles/Container";
import { BtnDefault } from "../../Styles/Buttons";

import SectionNumber from "../SectionNum";


const ContactMe = () => {

    return(
        <StyledContactMe>
            <Container>
                <SectionNumber sectionTitle="Contatos" sectionNum="05" row={true} />
            </Container>
            <Container className="form-div">
                <div className="cta">
                    <h2>Vamos Conversar!😁</h2>
                    <p>Fique à vontade para entrar em contato comigo em qualquer rede social!</p>
                    <ul>
                        <li>{"+55 (92) 99228-1034"}</li>
                        <li>cviniciusliramdev@gmail.com</li>
                    </ul>
                </div>
                <form>
                    <input placeholder="Nome" type="text" />
                    <input placeholder="email" type="email" />
                    <textarea placeholder="Digite sua mensagem"/>
                    <BtnDefault>Enviar</BtnDefault>
                </form>
            </Container>
        </StyledContactMe>
    )
}

export default ContactMe