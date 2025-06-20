import styled from "styled-components";

export const StyledNav = styled.nav`

    display: none;

    width: 80px;
    height: 100vh;
    background-color: ${props => props.theme.colorBG1};

    transition: 0.3s ease;

    position: fixed;
    left: 0;

    z-index: 5;

    @media (min-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 50px;
    }

    button {
        background-color: transparent;
        width: 100%;

        padding: 10px;

        position: absolute;
        top: 10px;

        height: 70px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;

        img{
            width: 50%;
            height: 50%;
            pointer-events: none;

            transition: 1s ease;
        }
    }

    button:hover img{
        filter: brightness(1.2);
        transform: rotate(360deg);
    }


    a{
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;

        position: relative;

        color: ${props => props.theme.colorText1};

        font-family: 'Chivo Mono', monospace;

        transition: 0.3s ease;
        padding: 10px;
    }

    @media (max-height: 600px) {
        ul{
            gap: 30px;
        }
        a{
            font-size: 13px;
        }
    }

    @media (max-height: 480px) {
        ul{
            gap: 20px;
        }
        a{
            font-size: 10px;
        }
    }

    a::after{
        content: "";
        height: 4px;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0px;

        transition: 0.3s ease;

        background-color: ${props => props.theme.colorSection};
        box-shadow: 0 0 10px 0 ${props => props.theme.colorSection};
    }

    ul li{
        position: relative;

        span{
            /* display: none; */
            position: absolute;

            pointer-events: none;

            opacity: 0;
            transform: translateX(100px);

            left: 50px;
            top: -10px;

            color: ${props => props.theme.colorText1};
            background-color: ${props => props.theme.colorBG1};

            font-size: 14px;
            font-weight: 500;

            bottom: 10px;
            white-space: nowrap;

            height: 40px;
            padding: 15px;
            text-align: center;
            
            transition: 0.3s ease;
        }
    }
    
    ul li:hover{

        span{
            opacity: 1;
            transform: translateX(0);
        }

        a{
            color: ${props => props.theme.colorSection};

            ::after{
                width: 100%;
            }
        }
    }

    footer{

        display: flex;
        flex-direction: column;

        position: absolute;
        bottom: 0;

        gap: 20px;

        width: 100%;

        padding: 10px;
        background-color: var(--color-brand-1);
    }

`
