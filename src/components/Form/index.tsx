import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Prioridade, Status } from '../../utils/enums'
import { cadastrar } from '../../store/reducers/tarefa'
import { useNavigate } from 'react-router-dom'
import Form from './style'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        status: Status.PENDENTE,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <Form>
      <input
        type="text"
        placeholder="Titulo"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
      />
      <input
        type="text"
        placeholder="Descrição"
        onChange={(e) => setDescricao(e.target.value)}
        value={descricao}
      />
      <div>
        {Object.values(Prioridade).map((prioridade) => (
          <div key={prioridade}>
            <input
              onChange={(e) => setPrioridade(e.target.value as Prioridade)}
              value={prioridade}
              type="radio"
              name="prioridade"
              id={prioridade}
              defaultChecked={prioridade === Prioridade.NORMAL}
            />{' '}
            <label htmlFor={prioridade}>{prioridade}</label>
          </div>
        ))}
      </div>

      <button type="submit" onClick={cadastrarTarefa}>
        cadastrar
      </button>
    </Form>
  )
}

export default Formulario
