import styled from 'styled-components'
import { Prioridade, Status } from '../../utils/enums'
import variaveis from '../../styles/variaveis'

type TagProps = {
  prioridade?: Prioridade
  status?: Status
  parametro: 'status' | 'prioridade'
}

function manipulaCores(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === Status.CONCLUIDA) return variaveis.verde
    if (props.status === Status.PENDENTE) return variaveis.laranja
  } else {
    if (props.prioridade === Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === Prioridade.IMPORTANTE) return variaveis.laranja
  }

  return '#6a89cc'
}

export const Container = styled.main`
  padding: 1.2rem;
  border: 1px solid #30336b;
  background-color: #262626;
  border-radius: 0.5rem;
  width: 90%;
  margin: 0 auto 2.5rem;
  color: white;

  label {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 1rem;
  }

  textarea {
    display: block;
    width: 100%;
    resize: none;
    background: transparent;
    border: none;
    margin-bottom: 1rem;
    color: gray;
  }

  hr {
    border: 1px solid #30336b;
    opacity: 0.3;
  }
`
export const Tag = styled.span<TagProps>`
  background-color: transparent;
  border: 1px solid ${(props) => manipulaCores(props)};
  border-radius: 1rem;
  padding: 0 0.6rem 0.2rem;
  margin: 0 0.8rem 1rem 0;
  display: inline-block;
  color: ${(props) => manipulaCores(props)};
  opacity: 0.7;
`

export const Button = styled.button`
  padding: 0.5rem;
  margin: 1rem 1rem 0 0;
  border-radius: 0.5rem;
  border: none;
  background-color: #30336b;
`
