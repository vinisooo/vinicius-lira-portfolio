import styled from "styled-components";

export const StyledMobMenu = styled.div`

    > button{
        position: fixed;

        z-index: 3;
        top: 40px;
        right: 20px;

        width: 65px;
        height: 30px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 0;

        background-color: transparent;
        border: none;

        mix-blend-mode: difference;
        filter: invert(1) grayscale(1) contrast(9); 

        

        span{
            width: 100%;
            height: 20%;
            background-color: var(--color-grey-1);

            
            transition: 0.4s ease;
        }
    }

    .open-menu:hover{
        .bar-1{
            transform: rotate(45deg) translateY(16px);
            
        }

        .bar-2{
            transform: rotate(-45deg) translateY(-16px);
        }
    }

    @media (min-width: 700px) {
        display: none;
    }

`