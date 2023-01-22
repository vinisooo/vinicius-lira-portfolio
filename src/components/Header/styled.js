import styled from 'styled-components';

export const StyledHeader = styled.header `

    transition: 0.3s ease;

    min-height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-repeat: no-repeat;

    position: relative;

    >div{
        width: 95vw;
        height: 95vh;
        transform: translateY(30px);
        background-color: ${props => props.theme.colorBG1};

        >div{
            height: 100%;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            flex-wrap: wrap;
            align-items: center;
        }

        > div > span{
            position: absolute;
            right: 30px;
            bottom: 30px;

            font-size: 14px;
            color: ${props => props.theme.colorText2};
        }
    }

    .greetings p{
            padding: 30px 0;
            padding-bottom: 60px;
    
            border-top: 2px solid ${props => props.theme.colorText2};

            font-size: 14px;
            color: ${props => props.theme.colorText2};
    }


    .greetings >div{
        font-family: 'Chivo Mono', monospace;
        color: ${props => props.theme.colorText1};

        padding-bottom:30px;

        h1{
            font-size: 36px;
            font-weight: 600;
            
            width: 100%;
            max-width: 310px;
            padding-right: 10px;

            white-space: nowrap;
            overflow: hidden;

            animation: typing 2s, cursor .4s step-end infinite alternate;

            border-right: 5px solid ${props => props.theme.colorText1};
        }

        span{
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }
    }

    @media (min-width: 700px) {
        >div{
            width: 78vw;

            >div{
                gap: 70px;

                flex-direction: row;
                justify-content: flex-start;
            }
        }
    }

    @media (min-width: 900px) {
        >div{
            width: 80vw;
        }
    }

    @keyframes cursor {
        50%{
            border-color: transparent;
        }
    }

    @keyframes typing {
        from{
            width: 0%;
        }
    }

`
