import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

  body {
    background: ${(props) => props.theme['white-bg']};
    color: ${(props) => props.theme['brown-500']};
    -webkit-font-smoothing: antialiased; 
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    border: none; 
  }
`
