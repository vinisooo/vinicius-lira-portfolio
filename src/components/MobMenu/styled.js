import styled from "styled-components";

export const StyledMobMenu = styled.div`


    > button{
        position: fixed;

        z-index: 3;
        top: 40px;
        right: 20px;

        width:60px;
        height: 25px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 0;

        background-color: transparent;
        border: none;

        mix-blend-mode: difference;
        filter: invert(1) grayscale(1) contrast(9); 

        span{
            width: 100%;
            height: 18%;
            background-color: var(--color-grey-1);
            
            transition: 0.4s ease;
        }
    }

    .open-menu{
        transform: translateX(10px);
        .bar-1{
            transform: rotate(45deg) translateY(14px);
            
        }

        .bar-2{
            transform: rotate(-45deg) translateY(-14px);
        }
    }

    >div{
        width: 100%;
        height: 100%;
        
        position: fixed;
        top: 0;

        background-color: rgba(0,0,0,0.6);

        z-index: 2;

        display: flex;
        justify-content: flex-end;
        transition: 0.4s ease;

        nav{
            height: 100%;
            width: 70%;

            padding-top: 160px;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;

            background-color: ${props => props.theme.colorBG1};

            animation: displayMenu 0.5s ease;
        }

        nav button{
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
            padding: 0;

            background-color: transparent;
            border: none;
            color: ${props => props.theme.colorText2};
            padding-right: 30px;
            padding-bottom: 30px;

            img{
                transition: 0.7s ease;
            }
        }

        nav button:hover{
            img{
                transform: rotate(360deg);
            }
        }

        nav ul{

            display: flex;
            flex-direction: column;
            gap: 45px;
            padding-right: 10px;
            padding-bottom: 60px;

            text-align: end;
        }

        nav a{
            font-family: 'Chivo Mono', monospace;

            text-decoration: none;
            font-weight: 700;
            font-size: 12px;

            padding: 30px;

            color: ${props => props.theme.colorText2};
        }

        nav span{
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
        }
    }

    footer{
        height: 20%;
        width: 100%;

        padding: 20px;
        background-color: var(--color-brand-1);

        display: flex;
        align-items: center;
        justify-content: center;

    }


    @media (min-width: 700px) {
        display: none;
    }

    @keyframes displayMenu {
        from{
            transform: translateX(100vw);
        }to{
            transform: translateX(0);
        }
    }
    
    @keyframes hideMenu {
        from{
            transform: translateX(0);
        }to{
            transform: translateX(100vw);
        }
    }

`