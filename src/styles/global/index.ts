import { createGlobalStyle } from "styled-components";
import tinycolor from "tinycolor2";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    :root {
        font-family:${({ theme }) => theme.font.family};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    body {
        display: flex;
		flex-direction:column;
        height: 100vh;
        overflow-x: hidden ;
        background-color: ${({ theme }) => theme.color.background.soft};

		scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5, h6, p, span, a {
        color: ${({ theme }) => theme.color.text.dark};
        font-family:${({ theme }) => theme.font.family};
    }

    ::-webkit-scrollbar {
            width: 10px;
          
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) =>
            tinycolor(theme.color.background.soft).darken(10).toHex8String()};

        border-radius: ${({ theme }) => theme.shape.radius.small};
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.color.primary.main};
        border-radius: ${({ theme }) => theme.shape.radius.small};
    }


    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid white;
        -webkit-text-fill-color: black !important;
        -webkit-box-shadow: 0 0 0px 1000px #1212120A inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    
    .MuiStepper-root{
        width: 100% !important;
    }
    .MuiStepLabel-label{
        font-size: 20px !important;
        font-weight: bold !important;
    }

`;
