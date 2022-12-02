import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body { font-family:'Noto Sans KR', sans-serif; width:100%; margin:0; background:#f7f7f7; font-size:10px !important; color:#545454; -webkit-font-smoothing:antialiased;  overflow-x:hidden; /* word-wrap:break-word; word-break:keep-all; */ }
    section { position:relative; margin:0 0; padding:0 0; background-color:#F9F9F9; overflow: hidden; }
    a { text-decoration: none; color:#545454; }
    a:hover, a:active, a:focus { outline:none; text-decoration:none; }
    h1 { font-size:3.0rem; }
    h2 { font-size:2.4rem; }
    h3 { font-size:1.8rem; }
    h4 { font-size:1.6rem; }
    h5 { font-size:1.2rem; }
    h6 { font-size:1.0rem; }
    h1, h2, h3, h4, h5, h6 { margin:0; font-weight:normal; }
    @media screen and (max-width:1400px){
        html, body { font-size:8px !important; }
    }
    @media screen and (max-width:1200px){
        html, body { font-size:7px !important; }
    }
    @media screen and (max-width:993px){
        html, body { font-size:8px !important; }
    }
    @media screen and (max-width:768px){
        html, body { font-size:10px !important; }
    }
`;

export default GlobalStyle;
