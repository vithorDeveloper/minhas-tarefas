import { useState, useEffect, ChangeEvent } from 'react'
import { Container, Tag, Button } from './style'
import { EditNote, Save, Delete, Cancel } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { remover, editar, alterarStatus } from '../../store/reducers/tarefa'
import TarefaClass from '../../models/Tarefa'
import { Status } from '../../utils/enums'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoAlfa,
  id
}: Props) => {
  const [editando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (descricaoAlfa.length > 0) {
      setDescricao(descricaoAlfa)
    }
  }, [descricaoAlfa])

  function cancelarEdicao() {
    setEditando(false)
    setDescricao(descricaoAlfa)
  }

  function handleStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alterarStatus({
        id,
        concluida: event.target.checked
      })
    )
  }

  return (
    <Container>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === Status.CONCLUIDA}
          onChange={handleStatus}
        />
        {editando ? <h2>Editando: {titulo}</h2> : <h2>{titulo}</h2>}
      </label>

      <Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>

      <textarea
        disabled={!editando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <hr />

      {editando ? (
        <>
          <Button
            onClick={() => {
              dispatch(
                editar({
                  titulo,
                  prioridade,
                  status,
                  descricao,
                  id
                })
              )
              setEditando(false)
            }}
          >
            <Save />
          </Button>

          <Button onClick={cancelarEdicao}>
            <Cancel />
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => setEditando(true)}>
            <EditNote />
          </Button>

          <Button onClick={() => dispatch(remover(id))}>
            <Delete />
          </Button>
        </>
      )}
    </Container>
  )
}

export default Tarefa
