import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: 'AG-Regular';
    height: 100%;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1em;
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
