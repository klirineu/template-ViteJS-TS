import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *,*::before,*::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
  }
  
  body {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    min-height: 100vh;
    --webkit-font-smoothing: antialiased;
    background-color: #f1f2f9;
  }

  body, button, input, optgroup, select, textarea {
    font-family: var(--font_family),BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;
  }
  
  button {
    &:hover {
      cursor: pointer;
    }
  }
  
  body::-webkit-scrollbar {
  width: 0;
}
 
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  
  body::-webkit-scrollbar-thumb {
    background: transparent;
  }
`
