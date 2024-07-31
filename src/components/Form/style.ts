import styled from 'styled-components'

const Form = styled.form`
  input[type='text'] {
    margin-bottom: 1rem;
    width: 100rem;
    padding: 0.5rem;
  }

  div {
    display: flex;
    margin-bottom: 0.8rem;
  }

  label {
    margin-right: 1rem;
    color: white;
  }

  input[type='radio'] {
    margin-right: 0.2rem;
  }

  button {
    color: #262626;
    background-color: #00b894;
    padding: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 1rem;
    border: none;
  }
`
export default Form
