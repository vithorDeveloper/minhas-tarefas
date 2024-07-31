import { Prioridade, Status } from '../utils/enums'

class Tarefa {
  titulo: string
  prioridade: Prioridade
  status: Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: Prioridade,
    status: Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
