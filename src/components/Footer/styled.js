import styled from "styled-components";

export const StyledFooter = styled.footer`

    min-height: 200px;
    width: 100%;

    padding: 30px 0;
    
    background-color: var(--color-black);

    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h3{
        color: var(--color-white);

        text-align: center;

        font-family: 'Chivo Mono', monospace;
        font-size: 32px;
        font-weight: 700;
    }

    p{
        color: var(--color-grey-2);
        text-align: center;
        
        font-size: 16px;

        margin-top: 20px;
    }

`
