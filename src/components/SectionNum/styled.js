import styled from "styled-components";

export const StyledSectionNum = styled.div`

    max-width: 350px;

    margin-bottom: 50px;

    position: absolute;
    top: 15px;
    left: 15px;

    transition: 0.3s ease;

    :hover{
        filter: brightness(1.1);
    }

    div{
        display: flex;
        gap: 6px;
        align-items: center;
    
        width: 100%;
    
        justify-content: space-between;
    }

    h3{
        font-size: 30px;
        color: ${props => props.color || props.theme.colorText2};
        font-weight: 800;

        font-family: 'Chivo Mono', monospace;
    }

    p{
        color: ${props => props.color || props.theme.colorText2};
        font-size: 12px;

        position: relative;
        white-space: nowrap;
    }

    span{
        width: 55%;
        min-width: 100px;

        width: 100px;
        height: 1px;
        

        background-color: ${props => props.color || props.theme.colorText2};
    }

    @media (min-width: 700px) {
        width: 50px;

        position: static;

        h3{
            font-size: 64px;
        }

        div{
            flex-direction: column;
        }

        span{
            min-width: 1px;
            width: 1px;
            height: 140px;
        }

        p{
            transform: rotate(-90deg) translateX(-40px);
        }

    }

    @media (min-width: 700px) {
        .row-direction{
            flex-direction: row;

            span{
                min-width: 100px;
                width: 65%;
                height: 1px;
            }

            p{
                transform: rotate(0deg) translateX(0);
            }

        }   
    }

`
