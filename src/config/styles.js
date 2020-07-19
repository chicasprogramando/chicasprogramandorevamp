
import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
    colors: {
        black: '#000',
        white: '#FFF'
    },
}

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.white};
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
`

export const PageContainer = styled.div`
  width: calc(100% - 250px);
`