import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #1a1a1a;

  height: 58rem;

  margin: 1.2rem 1.2rem 0;

  border-radius: 1rem;

  position: relative;

  div {
    background-color: #0d0d0d;
    height: 5rem;

    input {
      position: absolute;
      top: 4rem;
      left: 2rem;

      color: white;

      border: 1px solid #333333;
      border-radius: 0.5rem;
      outline: none;

      background-color: #262626;
      color: 333333;

      padding: 0.5rem;

      width: 80%;
    }
  }

  a {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    color: #262626;
    background-color: #00b894;
    width: 100%;
    padding: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
`

export const ContainerFiltro = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  margin-top: 3rem;
`
