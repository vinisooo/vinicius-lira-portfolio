import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-family: 'Montserrat', sans-serif;
    }


    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *{
        box-sizing: border-box;

        scroll-behavior: smooth;
    }

    button{
        cursor: pointer;
        transition: 0.3s ease;
    }

    button:active{
        transform: translateY(3px);
    }

    :root{
        --color-black: #000000;
        --color-white: #ffffff;

        --color-grey-1: #353535;
        --color-grey-2: #696773;
        --color-grey-3: #D9D9D9;

        --color-brand-1: #3C6E71;
        --color-brand-2: #284B63;
        --color-brand-3: #70AE6E;
    }
    ::-webkit-scrollbar
    {
      width: 12px;  /* for vertical scrollbars */
      height: 12px; /* for horizontal scrollbars */
    }
    
    ::-webkit-scrollbar-track
    {
      background: var(--color-grey-3)
    }
    
    ::-webkit-scrollbar-thumb
    {
      background: var(--color-brand-1)
    }
`
