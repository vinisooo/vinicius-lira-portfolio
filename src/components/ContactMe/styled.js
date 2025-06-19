import styled from "styled-components";

export const StyledContactMe = styled.section`

    min-height: 80vh;

    padding: 30px 0;

    position: relative;

    background-color: ${props => props.theme.colorBG1};

    .form-div{
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 50px;
    }

    .cta{
        display: flex;
        flex-direction: column;

        gap: 40px;
        
        text-align: left;

        h2{
            font-family: 'Chivo Mono', monospace;
            font-size: 40px;
            font-weight: 800;
            max-width: 300px;

            line-height: 150%;

            color: ${props => props.theme.colorText1};
        }

        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;

            max-width: 400px;

            color: ${props => props.theme.colorText2};
        }

        ul{
            display: flex;
            flex-direction: column;

            gap: 10px;

            font-size: 12px;

            color: ${props => props.theme.colorText1};
        }
    }

    form{
        width: 100%;
        max-width: 500px;

        display: flex;
        flex-direction: column;

        gap: 40px;

        input, textarea{

            color: ${props => props.theme.colorText2};

            padding: 15px;
            border: none;
            background-color: transparent;

            border-bottom: 3px solid ${props => props.theme.colorText2 };

            outline: none;

            max-width: 100%;
            max-height: 400px;

            font-family: 'Montserrat', sans-serif;
            color: ${props => props.theme.colorText2};
            font-weight: 600;
        }
        transition: 0.3s ease;
        
        input:hover, textarea:hover{
            border-bottom: 3px solid var(--color-brand-3);
        }
        input::placeholder, textarea::placeholder{
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
        }
    }

    @media (min-width: 700px) {
        .form-div{
            flex-direction: row;
            align-items: center;
        }

        .cta{
            width: 50%;
        }

        form{
            width: 100%;
        }
    }
`
