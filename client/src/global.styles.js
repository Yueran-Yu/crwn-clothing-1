import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    position: relative;
    @media screen and (max-width:800px){
      width: 100%;
    }
    
    .footer{
      position: fixed;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`