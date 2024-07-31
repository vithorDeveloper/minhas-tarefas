import styled from 'styled-components'

type Props = {
  ativo: boolean
}

const Card = styled.div<Props>`
  border: 1px solid ${(props) => (props.ativo ? '#5e60ce' : '#8284FA')};
  color: ${(props) => (props.ativo ? '#5e60ce' : '#8284FA')};
  opacity: ${(props) => (props.ativo ? '1' : '0.4')};
  border-radius: 0.5rem;
  padding: 0.5rem 0 0 0.5rem;
  width: 40%;
  cursor: pointer;

  p {
    font-size: 1.6rem;
  }

  span {
    font-family: 'Madimi One';
  }
`

export default Card
