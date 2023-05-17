import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    a{
        text-decoration: none;
    }

    *{
        box-sizing: border-box;
    }

    select::-ms-expand { 
	    display: none;
    }
`;

export default GlobalStyles;
