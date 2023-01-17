import styled from 'styled-components';

export const StyledHeader = styled.header `

    transition: 0.3s ease;

    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-repeat: no-repeat;


    >div{
        width: 90vw;
        height: 90vh;
        transform: translateY(45px);
        background-color: red;
    }

`
