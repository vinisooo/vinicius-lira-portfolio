import styled from "styled-components";

export const StyledCard = styled.div`

    width: 400px;
    max-width: 95vw;
    min-height: 150px;
    height: 150px;
    max-height: 200px;
    overflow: hidden;

    border-radius: 16px;
    border: 2px solid ${props => props.theme.aboutMeBG};

    box-shadow:  -3px 5px 10px 0 rgba(0,0,0, 0.3);

    transition: 0.3s ease;

    background-color: rgba(250,250,250,.20);
    backdrop-filter: blur(32px);

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div{
        min-height: 100%;
        width: 100%;
        padding: 20px;

        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: space-between;

        color: var(--color-white);

        h4{
            font-family: 'Chivo Mono', monospace;
            font-size: 20px;
            font-weight: 600;

            cursor: default;
        }
        p{
            font-size: 10px;
            line-height: 150%;

            font-weight: 500;
            margin: 10px 0;

            cursor: default;
        }

        >div{
            display: flex;
            align-items: center;
            gap: 30px;

        }

        div a{
            font-size: 12px;
            font-weight: 500;

            transition: 0.3s ease;
            text-decoration: none;
        }

        div a:hover{
            text-decoration: underline;
        }

        div span{
            font-size: 12px;
            font-weight: 300;
        }
    }

    .left-img{

        pointer-events: none;

        width: 34px;
        height: 100%;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0;

            img{
                object-fit: cover;
                height: 100%;
            }
        }

    :hover{
        transform: translateY(3px) translateX(-3px);
        box-shadow: none;

    }

`
