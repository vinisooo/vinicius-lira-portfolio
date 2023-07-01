import styled from "styled-components";

export const StyledTech = styled.section`

    min-height: 85vh;
    width: 100%;

    padding: 30px 0;

    position: relative;

    display: flex;
    align-items: center;

    background-color: ${props => props.theme.colorBG1};

    :hover{
        h2{
            color: ${props => props.theme.colorSection};
        }
    }

    > div {
        display: flex;
        align-items: center;

        justify-content: space-between;
    }

    h2{
        font-size: 32px;
        font-weight: 500;
        font-family: 'Chivo Mono', monospace;

        color: var(--color-brand-1);

        margin-bottom: 40px;
        margin-top: 40px;
    }

    .technologies{
        display: flex;
        flex-direction: column;

        width: 100%;
        margin-top: 70px;

        >p{
            margin-top: 60px;
            height: 40px;

            transform: translateY(-20px);

            transition: 0.3s ease;

            color: ${ props => props.theme.colorText2 };
            line-height: 150%;
            font-size: 13px;

            animation: displayDescription 1s ease;
        }
    }

    ul{
        width: 100%;

        display: flex;
        justify-content: space-between;

        gap: 10px;

        flex-wrap: wrap;

        li{
            display: flex;
            align-items: center;
            gap: 10px;


            width: 30%;
            height: 100px;
            opacity: 0.8;

            position: relative;

        }

        li:hover{
            figure{
                filter: grayscale(0);
                opacity: 1;
            }

            h4{
                color: ${props => props.theme.colorSection}
            }
        }

        li figure{
            min-width: 50px;
            width: 50px;
            min-height: 50px;
            height: 50px;

            filter: grayscale(1);
            opacity: 0.5;

            overflow: hidden;
            transition: 0.3s ease;
        }

        li figure img{
            min-width: 100%;
            width: 100%;
            min-height: 100%;
            height: 100%;
            object-fit: contain;
        }

        h4{
           font-family: 'Chivo Mono', monospace;

           cursor: default;

           font-size: 18px;
           font-weight: 400;
           line-height: 130%;

           display: none;

           color: var(--color-grey-2);

           transition: 0.3s ease;
        }
    }

    @media (min-width: 400px) {

        .technologies > p{

            display: flex;
        }

        ul li{
            width: 30%;
        }

    }

    @media (min-width: 750px) {
        .technologies{
            width: 80%;
        }

        ul{
            gap: 40px;
        }

        ul li{
            width: 30%;
        }

        ul li figure{
            width: 70px;
            height: 70px;
        }

        ul li h4{
            font-size: 22px;
            display: inline;
        }
    }

    @keyframes displayDescription {
        from{
            opacity: 0;
            transform: translateY(3px);
        }to{
            opacity: 1;
            transform: translateY(0);
        }
    }

`
