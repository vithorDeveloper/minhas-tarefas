import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
    overflow: hidden;
    list-style: none;
  }

  body{
    background-color: #2c2c54;
  }

  button{
    cursor: pointer;
  }
`

export const Container = styled.main`
  display: grid;
  grid-template-columns: 20% 60%;
  justify-content: center;
`

export default GlobalStyles
