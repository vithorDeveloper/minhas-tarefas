import { useDispatch, useSelector } from 'react-redux'
import CardFiltro from '../../components/CardFiltro'
import { Aside, ContainerFiltro } from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { Prioridade, Status } from '../../utils/enums'
import { Link } from 'react-router-dom'
import { Add } from '@mui/icons-material'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        <input
          type="text"
          placeholder="Procurar..."
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
      </div>

      <ContainerFiltro>
        <CardFiltro
          valor={Status.PENDENTE}
          criterio="status"
          legenda="pendentes"
        />
        <CardFiltro
          valor={Status.CONCLUIDA}
          criterio="status"
          legenda="concluidas"
        />
        <CardFiltro
          valor={Prioridade.URGENTE}
          criterio="prioridade"
          legenda="urgentes"
        />
        <CardFiltro
          valor={Prioridade.IMPORTANTE}
          criterio="prioridade"
          legenda="importantes"
        />
        <CardFiltro
          valor={Prioridade.NORMAL}
          criterio="prioridade"
          legenda="normal"
        />
        <CardFiltro criterio="todas" legenda="todas" />
      </ContainerFiltro>

      <Link to="/novo">
        <Add /> nova tarefa
      </Link>
    </Aside>
  )
}

export default BarraLateral
