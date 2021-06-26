import { createGlobalStyle } from 'styled-components';

export const theme = {
    brand: '#E47D31',
    logo: '#0a452b',
    colors: {

        background: '#fff',
        header: '#0a1f44',
        paragraph: '#343D48',
        anchor: '#356b17'

    },
};

export const GlobalStyle = createGlobalStyle`
    body, html, a {
        font-family: 'Ubuntu', sans-serif;
    }
    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: ${ theme.colors.background };
        overflow-x: hidden; 
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Ubuntu', sans-serif;
        color: ${ theme.colors.header };
        font-size: 2.6275rem;
        line-height: 2.9625rem;
    
        @media only screen and (max-width: 480px) {
        font-size: 1.575rem;
        }
    }

    p {
        color: ${ theme.colors.paragraph };
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        color: ${ theme.colors.anchor };
        outline: none;
        text-decoration: none;

        :hover {
            color: ${ theme.colors.anchor };
        }
    }
    
    *:focus {
        outline: none;
    }
`;

