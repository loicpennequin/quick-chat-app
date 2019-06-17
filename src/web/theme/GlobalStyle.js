import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,900&display=swap');
    :root{
        --font-primary: 'Roboto';
        --orange: hsl(25, 60%, 70%);
        --red: hsl(350, 63%, 60%);
        --black: hsl(0, 0%, 5%);
        --darkgrey: hsl(0, 0%, 12%);
        --grey: hsl(0, 0%, 70%);
        --lightgrey: hsl(0, 0%, 85%);
        --white: hsl(0, 0%, 98%);
    }

    body {
        font-family: ${props => props.theme.font.primary};
        color: ${props => props.theme.colors.text}
    }

    ul{
        list-style: none;
        padding-left: 0;
    }
    ${normalize()}
`;

export default GlobalStyles;
