import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        /* para todos os elementos */
        margin:0;
        padding:0;
        box-sizing: border-box;        
    }

    /* adicionar fontes em todos os elementos, 
    é preciso incluir button e input */
    *, button, input {
        font-family: Roboto, sans-serif;
    }

    :root {
    /*
        matches the root element of a tree representing the document.
        In HTML, :root represents the <html> element and is identical to the selector html, 
        except that its specificity is higher.    
    */
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-tertiary: #fff;
    --color-quaternary: #000;

    --color-blue: #0061ff;
    --color-border: #bdc4c9;
    }
`;
