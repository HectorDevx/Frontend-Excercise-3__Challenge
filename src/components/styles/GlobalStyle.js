import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    li {
      margin: 8px;
    }
  }
`;
