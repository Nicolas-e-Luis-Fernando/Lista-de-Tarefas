import React, { useEffect, useState } from 'react'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'

const App = () => {

  // Hook que armazena a lista de tarefas
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('tarefas')

    return tarefasSalvas ? JSON.parse(tarefasSalvas) : []
  })

  // Hook que controla o filtro selecionado
  const [filtro, setFiltro] = useState('todas')

  // Hook que salva as tarefas no localStorage
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa])
  }

  const concluirTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        }
      }

      return tarefa
    })

    setTarefas(tarefasAtualizadas)
  }

  const removerTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter((tarefa) => {
      return tarefa.id !== id
    })

    setTarefas(tarefasAtualizadas)
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {

    if (filtro === 'pendentes') {
      return tarefa.concluida === false
    }

    if (filtro === 'concluidas') {
      return tarefa.concluida === true
    }

    return true
  })

  return (
    <div className="container">

      <h1>Lista de Tarefas do Programador</h1>

      <TaskForm
        adicionarTarefa={adicionarTarefa}
      />

      <FilterButtons
        filtro={filtro}
        setFiltro={setFiltro}
      />

      <TaskList
        tarefas={tarefasFiltradas}
        concluirTarefa={concluirTarefa}
        removerTarefa={removerTarefa}
      />

    </div>
  )
}

export default App