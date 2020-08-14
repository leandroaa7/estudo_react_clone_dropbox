import styled from 'styled-components';

export const Container = styled.div`
  /* variáveis de css */
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px; 
  --content-width: 100%; /* para ocupar todo o espaço */

  /* modificadores para cada variante OU pseudo classes  */
  /* https://css-tricks.com/the-sass-ampersand/#using-the-with-pseudo-classes */

  &.blue {
      /* backgroud color */
      --bg-color: var(--color-primary);
      --text-color: var(--color-tertiary);
      --logo-color: var(--color-secondary);
  }
  
  &.beige {
      /* backgroud color */
      --bg-color: var(--color-secondary);
      --text-color: var(--color-quaternary);
      --logo-color: var(--color-primary);
  }
  &.white {
      /* backgroud color */
      --bg-color: var(--color-tertiary);
      --text-color: var(--color-quaternary);
      --logo-color: var(--color-blue);
  }
  &.black {
      /* backgroud color */
      --bg-color: var(--color-quaternary);
      --text-color: var(--color-tertiary);
      --logo-color: var(--color-blue);
  }

  /* primeira section */
  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    /* para computadores */
    @media (min-width: 1024px){
        --heading-font-size: 71px;
        --content-width: 50%;
    }

  }
    background: var(--bg-color);

`;

export const Content = styled.div`
  z-index: 2;
  position:relative;
  max-width: 1440px;
  /* centralizar para os lados */
  margin: 0 auto;

  > h2 {
      font-size: var (--heading-font-size);
      /* a cor da fonte é igual a cor da logo */
      color: var(--logo-color);      
      max-width: var(--content-width);
  }

  > p {
      margin-top: 20px;
      font-size: 16px;
      color: var(--text-color);
      max-width: var(--content-width);      
  }


  padding: var(--padding-top) 32px var(--padding-bottom);



`;