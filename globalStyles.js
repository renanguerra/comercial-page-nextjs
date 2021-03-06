import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    html{
        scroll-behavior: smooth;
    }
    body {
        background-color: #F9F9FB;
        font-family:'Roboto',sans-serif;
    }
`;

export default GlobalStyles