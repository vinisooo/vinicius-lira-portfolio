import styled from "styled-components";

export const StyledAboutMe = styled.section`

    padding: 30px 0;

    min-height: 90vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    background-color: ${props => props.theme.aboutMeBG};

    :first-child{
        background-color: red;
    }

    >div{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 150px;
    }

    .dev{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        > div{
            position: absolute;
            bottom: -45%;
        }
    }

    .dev > figure{

        background: rgb(60,110,113);
        background: linear-gradient(90deg, rgba(60,110,113,1) 0%, rgba(112,174,110,1) 50%, rgba(40,75,99,1) 100%);
        
        width: 250px;
        height: 250px;

        border-radius: 60% 40% 51% 49% / 44% 50% 50% 56%;

        animation: spinningPic 5s linear infinite;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;

        transition: 0.3s ease;

        img{
            opacity: 0.8;

            pointer-events: none;
            object-fit: cover;
            width: 110%;
            height: 110%;

            transform: rotate(0deg !important);

            animation: notSpinningPic 5s linear infinite;

            transition: 0.3s ease;
        }
    }

    figure:hover{
        border-radius: 51% 49% 41% 59% / 48% 42% 58% 52%;

        background: none;

        img{
            filter: contrast(1.3);
        }
    }

    .about-me-text{
        h2{
        color: var(--color-brand-3);
        font-size: 26px;

        font-family: 'Chivo Mono', monospace;
        font-weight: 500;

        margin-bottom: 30px;
        }

        p{
            color: var(--color-grey-3);

            line-height: 150%;
            font-size: 14px;

            margin-bottom: 10px;
        }
    }

    @media (min-width: 1100px) {
        >div{
            flex-direction: row;
            justify-content: space-between;
        }
        .dev{

            width: 50%;
            display: flex;
            justify-content: flex-start;
            figure{
                width: 300px;
                height: 300px;
            }
            >div{
                right: -20%;
                top: 25%;
            }
        }

        .about-me-text{
            width: 50%;
        }
    }
    
    @keyframes spinningPic {
        from{
            transform: rotate(0deg);
        }to{
            transform: rotate(360deg);
        }
    }

    @keyframes notSpinningPic {
        from{
            transform: rotate(360deg);
        }to{
            transform: rotate(0deg);
        }
    }

    footer{
        width: 100%;
        height: 60px;
        background-color: red;

        overflow: hidden;

        position: absolute;
        bottom: 0;

        img{
            width: 100%;
            object-fit: cover;

        }
    }

`
