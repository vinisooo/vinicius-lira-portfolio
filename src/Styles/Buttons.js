import styled from "styled-components";

export const BtnDefault = styled.button`

    padding: 15px 20px;
    text-decoration: none;
    
    font-size: 12px;

    color: var(--color-brand-1);
    border: 2px solid var(--color-brand-1);

    transition: 0.3s ease;

    position: relative;
    background-color: transparent;


    img{
        width: 12px;
        height: 12px;
        margin-left: 10px;

        transition: 0.3s ease;
    }
    
    ::after{
        position: absolute;

        top: 0;
        left: 0;
        z-index: -1;

        content: "";

        width: 0px;
        height: 100%;
        background-color: var(--color-brand-3);

        transition: 0.3s ease;
    }

    z-index: 1;

    :hover{
        color: var(--color-white);


        img{
            filter: brightness(5);
        }

        ::after{
            width: 100%;

            box-shadow: 0 0 16px 0 var(--color-brand-3);
        }
    }

`

export const LinkDefault = styled.a`

    padding: 15px 20px;
    text-decoration: none;
    
    font-size: 12px;

    color: var(--color-grey-2);
    border: 2px solid var(--color-brand-1);

    transition: 0.3s ease;

    position: relative;

    img{
        width: 12px;
        height: 12px;
        margin-left: 10px;

        transition: 0.3s ease;

        pointer-events: none;
            filter: brightness(5);
    }
    overflow: hidden;

    
    ::after{
        position: absolute;

        top: 0;
        left: 0;
        z-index: -1;

        content: "";

        width: 0px;
        height: 100%;
        background-color: var(--color-brand-3);

        transition: 0.3s ease;
    }

    :hover{
        color: var(--color-white);
        border-color: var(--color-brand-3);

        ::after{
            width: 100%;
            box-shadow: 0 0 16px 0 var(--color-brand-3);
        }
    }

`