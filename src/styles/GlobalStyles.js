import { createGlobalStyle } from "styled-components";

import "@fontsource/raleway";

import "@fontsource/playfair-display";

const GlobalStyles = createGlobalStyle`




    *,*::before,*::after{
        margin: 0;
        padding: 0;
    }
    html{
     
        overflow-x:hidden;
    }
    body{
        font-family: 'Raleway', sans-serif;
        
        overflow-x:hidden;
    }
    h1,h2{
        font-family: 'Playfair-display', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    a{
        color:inherit ;
        text-decoration:none ;
        
    }
    
`;
export default GlobalStyles;
