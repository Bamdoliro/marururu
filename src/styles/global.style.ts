import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    ${reset};
    * {
      box-sizing: border-box; 
      margin: 0;
      padding: 0;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
      border: none;
      outline: none;
    }
    input:focus {
      outline: none;
    }
    button {
      outline: none;
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyled;
