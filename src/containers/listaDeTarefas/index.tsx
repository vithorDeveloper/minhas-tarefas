import { Container } from './styled'
import Tarefa from '../../components/CardTarefa'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

const ListaDetarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (iten) => iten.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (iten) => iten.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (iten) => iten.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <Container>
      <h1 id="titulo">TAREFAS</h1>
      <ul>
        {filtrarTarefas().map((item) => (
          <li key={item.titulo}>
            <Tarefa
              id={item.id}
              titulo={item.titulo}
              prioridade={item.prioridade}
              status={item.status}
              descricao={item.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDetarefas
