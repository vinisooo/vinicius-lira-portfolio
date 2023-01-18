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

    .dev{

    }

    .dev > figure{

        width: 300px;
        height: 300px;

        border-radius: 60% 40% 51% 49% / 44% 50% 50% 56%;

        animation: spinningPic 5s linear infinite;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;

        transition: 0.3s ease;

        img{
            object-fit: cover;
            width: 110%;
            height: 110%;

            transform: rotate(0deg !important);

            animation: notSpinningPic 5s linear infinite;
        }
    }

    figure:hover{
        border-radius: 51% 49% 41% 59% / 48% 42% 58% 52%;
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

`
