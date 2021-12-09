import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Barlow Condensed', sans-serif;
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