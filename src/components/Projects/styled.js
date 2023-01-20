import styled from "styled-components";

export const StyledProjects = styled.section`

    width: 100%;
    min-height: 90vh;

    position: relative;

    padding: 30px 0;

    background-color: ${props => props.theme.colorBG1};

    >div{
        display: flex;
        justify-content: space-between;
    }

    h2{
        font-size: 32px;
        font-family: 'Chivo Mono', monospace;

        color: var(--color-brand-1);
    }

    .projects-list{
        width: 100%;
    }

    ul{
        padding: 70px 0;

        gap: 120px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;


        li{
            display: flex;
            flex-direction: row;
            align-items: center;

            max-width: 100%;
                        
            position: relative;

            max-width: 100%;
        }

        li figure{
            width: 100%;
            max-width: 500px;
            height: 300px;

            opacity: 0.75;

            transform: translateX();
            overflow: hidden;

            display: flex;
            align-items: center;
            justify-content: center;
            
            border-radius: 16px;

            transition: 0.5s ease;
        }

        li:hover figure{
            opacity: 1;
        }

        li figure img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        li > div{
            position: absolute;
            bottom: -80px;

            width: 100%;
            max-width: 400px;

            *{
                color: ${ props => props.theme.colorText1 };
            }
        }
    }

    @media (min-width: 700px) {
        .projects-list{
            width: 80%;
        }
    }

    @media (min-width: 900px) {
        ul{
            gap: 50px;
            figure{
                height: 400px;
            }

            li >div{
                bottom: 25%;
                right: -222px;
            }
        }

        .reverse-align{
            figure{
                transform: translateX(222px);
            }
            >div{
                bottom: 25%;
                left: 0;
            }
        }
    }
`
