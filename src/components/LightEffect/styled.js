import styled from "styled-components";

export const StyledLightEffect = styled.span`
    width: 4000px;
    height: 4000px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: radial-gradient(circle at center, ${props => props.theme.lightEffect},transparent,transparent);

    position: absolute;
    top: ${props => props.top ? props.top : 0}vh;
    right: ${props => props.right ? props.right : 0}vw;

    z-index: 2;

    animation: twinkingLight 10s ease infinite;
    animation-delay: ${props => props.delay ? props.delay * 1000 : 0 }ms;

    pointer-events: none;

    opacity: 0.4;

    @keyframes twinkingLight {
        30%{
            opacity: 0.4;
        }70%{
            opacity: 0.2;
        }100%{
            opacity: 0.4;
        }
    }

    @media (min-width: 1400px) {
        opacity: 0.6;
        @keyframes twinkingLight {
            30%{
                opacity: 0.6;
            }70%{
                opacity: 0.4;
            }100%{
                opacity: 0.6;
            }
        }
    }
`

export const StlyedLightEffects = styled.div`

    max-width: 100vw;
    overflow: hidden;
`
