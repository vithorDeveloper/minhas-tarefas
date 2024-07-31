import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { Prioridade, Status } from '../../utils/enums'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      titulo: 'Terminar tarefa da Ebac',
      prioridade: Prioridade.URGENTE,
      status: Status.CONCLUIDA,
      descricao: 'Terminar a tarefa do módulo de React'
    },
    {
      id: 2,
      titulo: 'Terminar modulo da Ebac',
      prioridade: Prioridade.IMPORTANTE,
      status: Status.PENDENTE,
      descricao: 'Terminar a tarefa do módulo de React'
    },
    {
      id: 3,
      titulo: 'Ler a Biblia',
      prioridade: Prioridade.NORMAL,
      status: Status.PENDENTE,
      descricao: 'Terminar a tarefa do módulo de React'
    },
    {
      id: 4,
      titulo: 'Fazer Anucio',
      prioridade: Prioridade.URGENTE,
      status: Status.CONCLUIDA,
      descricao: 'Terminar a tarefa do módulo de React'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaExiste) {
        alert('Titulo ja cadastrado')
      } else {
        const ultimatarefa = state.itens[state.itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          id: ultimatarefa ? ultimatarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; concluida: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.concluida
          ? Status.CONCLUIDA
          : Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alterarStatus } = tarefaSlice.actions
export default tarefaSlice.reducer
