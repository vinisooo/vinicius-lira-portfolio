import styled from "styled-components";

export const StyledAboutMe = styled.section`

    height: 734px;
    width: 100%;

    background-color: ${props => props.theme.aboutMeBG};

    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`