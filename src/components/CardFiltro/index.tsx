import Card from './style'
import { Prioridade, Status } from '../../utils/enums'
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: Prioridade | Status
}

const CardFiltro = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefa = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefa()
  const ativo = verificaAtivo()

  return (
    <Card ativo={ativo} onClick={filtrar}>
      <p>{contador}</p>
      <span>{legenda}</span>
    </Card>
  )
}

export default CardFiltro
